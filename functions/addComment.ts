import {
  HandlerEvent,
  HandlerContext,
  HandlerCallback,
} from "@netlify/functions";
import contentful from "contentful-management";
import util from "uuidv4";
exports.handler = function (
  event: HandlerEvent,
  context: HandlerContext,
  callback: HandlerCallback
) {
  async function main() {
    // Setup variables
    const data = JSON.parse(event.body);
    console.log(data);
    console.log("Token is: " + process.env.CONTENTFUL_MANAGEMENT_TOKEN);
    const { name, email, website, message, ID, reply, replyID } = data;
    let postComments = [];
    // Connect to contentful
    const client = contentful.createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });
    // Get the entry based on post ID.
    await client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then((space) => {
        console.log("Space is: " + space);
        return space.getEnvironment("master");
      })
      .then((environment) => {
        console.log("Environment is: " + environment);
        return environment.getEntry(ID);
      })
      .then((entry) => {
        console.log("Entry ==> ", entry);
        // Get current comments
        console.log("Entry.fields.comments ==> ", entry.fields.comments);
        entry.fields.comments?.["en-US"].comments?.forEach((comment) => {
          postComments.push(comment);
        });
        if (reply) {
          console.log("Reply is: " + reply);
          postComments.forEach((comment) => {
            if (comment.id === replyID) {
              comment.replies.push({
                name: name,
                email: email,
                website: website,
                message: message,
                timestamp: Math.round(new Date().getTime() / 1000),
                id: util.uuid(),
              });
            }
          });
        } else {
          console.log("No Reply Found");
          postComments.push({
            name: name,
            email: email,
            website: website,
            message: message,
            timestamp: Math.round(new Date().getTime() / 1000),
            id: util.uuid(),
            replies: [],
          });
        }
      });
    await client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then((space) => space.getEnvironment("master"))
      .then((environment) => environment.getEntry(ID))
      .then((entry) => {
        // Update comments
        entry.fields.comments = { "en-US": { comments: postComments } };
        // Update post
        console.log("Post Comments ==> ", postComments);
        console.log("Data Updated ==> ", entry);
        return entry;
      })
      .catch(console.error);
    // Callback with updated comments to update state
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        comments: postComments,
      }),
    });
  }
  main().catch(console.error);
};
