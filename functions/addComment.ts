import {
  HandlerEvent,
  HandlerContext,
  HandlerCallback,
} from "@netlify/functions";
import contentful from "contentful-management";

exports.handler = function (
  event: HandlerEvent,
  context: HandlerContext,
  callback: HandlerCallback
) {
  async function main() {
    // Setup variables
    const data = JSON.parse(event.body);
    const { name, email, website, message, ID, reply, replyID } = data;
    let commentsRef = [];
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
        return entry.fields.comments?.["en-US"].forEach((ref) => {
          return commentsRef.push(ref);
        });
      });

    await client.getSpace(process.env.CONTENTFUL_SPACE_ID).then((space) => {
      return space.getEnvironment("master").then((environment) =>
        environment
          .createEntry("comments", {
            fields: {
              name: { "en-US": name },
              email: { "en-US": email },
              website: { "en-US": website },
              message: { "en-US": message },
              approved: { "en-US": false },
              replies: { "en-US": [] },
            },
          })
          .then((entry) => entry.update())
          .then((entry) => entry.publish())
          .then((entry) => {
            commentsRef.push({
              sys: { type: "Link", linkType: "Entry", id: entry.sys.id },
            });
            return entry.sys.id;
          })
      );
    });
    await client
      .getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then((space) => space.getEnvironment("master"))
      .then((environment) => environment.getEntry(ID))
      .then((entry) => {
        entry.fields.comments = { "en-US": commentsRef };
        return entry.update();
      })
      .then((entry) => {
        return entry.publish();
      })
      .catch(console.error);

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        comments: commentsRef,
      }),
    });
  }
  main().catch(console.error);
};
