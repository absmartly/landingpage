var request = require("request");

require("dotenv").config();

const URL = "https://absmartly.netlify.app";

exports.handler = async (event, context, callback) => {
  // get the arguments from the notification
  console.log(event.body);
  // console.log(context);
  var body = JSON.parse(event.body);

  // prepare call to the Slack API
  var slackURL = process.env.SLACK_WEBHOOK_URL;
  var slackPayload = {
    text: "New comment on " + URL,
    attachments: [
      {
        fallback: "New comment on the ABSmartly site",
        color: "#444",
        author_name: body.data.email,
        title: body.data.path,
        title_link: URL + body.data.path,
        text: body.data.comment,
      },
      {
        fallback: "Manage comments on " + URL,
        callback_id: "comment-action",
        actions: [
          {
            type: "button",
            text: "Approve comment",
            name: "approve",
            value: body.id,
          },
          {
            type: "button",
            style: "danger",
            text: "Delete comment",
            name: "delete",
            value: body.id,
          },
        ],
      },
    ],
  };

  // post the notification to Slack
  request.post(
    { url: slackURL, json: slackPayload },
    function (err, httpResponse, body) {
      var msg;
      if (err) {
        msg = "Post to Slack failed:" + err;
      } else {
        msg = "Post to Slack successful!  Server responded with:" + body;
      }
      callback(null, {
        statusCode: 200,
        body: msg,
      });
      return console.log(msg);
    }
  );
};
