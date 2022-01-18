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
        return space.getEnvironment("master");
      })
      .then((environment) => {
        return environment.getEntry(ID);
      })
      .then((entry) => {
        entry.fields.comments?.["en-US"].comments?.forEach((comment) => {
          postComments.push(comment);
        });
        if (reply) {
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
        entry.fields.comments = { "en-US": { comments: postComments } };
        return entry.update();
      })
      .then((entry) => {
        return entry.publish();
      })
      .catch(console.error);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        comments: postComments,
      }),
    });
  }
  main().catch(console.error);
};
