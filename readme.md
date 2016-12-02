# WDIR-MATEY BOT
A general purpose slackbot for queueing TA appointments & taking attendance

Using the [slackbot NPM](https://github.com/rmcdaniel/node-slackbot)
by [Richard McDaniel](https://github.com/rmcdaniel)

Based on [dianabot](https://github.com/maxrpeterson/dianabot) by [Max R. Peterson](https://github.com/maxrpeterson)

Based on [GA-Bot](https://github.com/bryanmytko/ga-bot) by [Bryan Mtko](https://github.com/bryanmytko)

Based on [GA-Bot](https://github.com/colintherobot/ga-bot) by [Colin Hart](https://github.com/colintherobot)

This version updated & maintained by [Christine Yi](https://github.com/hizegi)

Star Wars facts from [Buzzfeed](https://www.buzzfeed.com/awesomer/facts-you-probably-didnt-know-about-the-star-wars-movies?utm_term=.pgnXBG0MA#.mvMYGMzyX) and [Mashable](http://mashable.com/2014/04/17/star-wars-facts/).

-----
# Setup

1. Slack bot's name is `@polly`
1. Set the api key in a .env file to an environment variable `SLACKBOT_KEY`
  - slack Christine for apikey
1. Invite @polly to whatever ga-students channel you want to use it in.
1. Run `node app.js` to start the bot.
1. Communicate with the bot by typing commands directly to the bot via mention or private message in Slack.
1. There are permission levels for certain commands. These can be set with environment variables `TA_ID` and `ADMIN_ID`
1. Run `@polly what is my user id?` to get your Slack id

-------
# Customization

GA-Bot allows for custom interaction via the `bot_flavor.js` file. You can override the default messages here by adding data for the specific flavor keys:

- `present` Response when a student sends the attendance secret word. (Removed for now)
- `already_queued` Response when you try to queue again.
- `secret_set` Message logged to the server when the secret changes. (Removed for now)
- `remove` Response for leaving the queue.
- `empty_queue` Display message for clearing the queue.
- `attendance_cleared` Display message for clearing attendance. (Removed for now)
- `quotes` An array of quotes chosen at random when a user queues.
- `greeting` Message logged to the server when the bot has connected successfully.

-------

### List of commands:
All commands work by mentioning the bot directly, using the `@` mention system of Slack. For instance, to use the queue command, you would write: `@bot-name q me`
- `hello` - the bot will greet you back.
- `queue me` or `q me` - add yourself to the queue for help
- `remove` or `remove me` - remove yourself from the queue
- `status` - display the current status of/who is in the queue
- `what is my user id?` - the bot will give you your Slack internal user id.
- `<secret word>` - send the secret word to be marked as present for attendance. (Removed for now)
- `help` - displays a list of the commands available to anyone who is not the admin/TA

Commands only available for the TA & Admin:
- `next` - removes the first person from the queue and sends a message to alert them that it is their turn. It also displays the new status of the queue
- `clear queue` - clears the queue.
- `attendance` - outputs the current attendance list. (Removed for now)
- `clear attendance` - clears the current attendance list. (Removed for now)

Commands only available for the Admin:
- `set secret <secret word>` - sets the secret word for attendance. (Removed for now)

-------

### Issues

Currently attendance & queues are kept in local data store. Feedback would be very valuable to let the developers know if it's worthwhile to convert to using a real database.

To request a feature, create an issue on the [GitHub](https://github.com/bryanmytko/ga-bot)  page

For more info on bots/bot users, check out [this page](https://api.slack.com/bot-users).
