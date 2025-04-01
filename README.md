# Discord Bot with Node.js

## Overview
This project is a simple Discord bot built using Node.js and the `discord.js` library. The bot can respond to commands, send messages, and perform various tasks based on user input.

## Prerequisites
Before setting up the bot, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A [Discord Developer Portal](https://discord.com/developers/applications) account
- A bot token from the Discord Developer Portal

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/discord-bot.git
   cd discord-bot
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your bot token:
   ```env
   DISCORD_TOKEN=your-bot-token-here
   ```

4. Run the bot:
   ```sh
   node index.js
   ```

## Features
- Responds to user messages
- Supports commands using a prefix (e.g., `!ping`)
- Sends custom responses based on commands
- Can be extended with additional functionalities

## Usage
Once the bot is running, invite it to your Discord server and use the following example commands:

- `!ping` - The bot responds with "Pong!"
- `!hello` - The bot greets the user

## Configuration
You can modify the bot’s behavior by editing the `index.js` file. The prefix and responses can be adjusted to meet your needs.

## Example Code
Below is a basic implementation of the bot in `index.js`:

```javascript
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const PREFIX = '!';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'hello') {
        message.channel.send(`Hello, ${message.author.username}!`);
    }
});

client.login(process.env.DISCORD_TOKEN);
```

## Troubleshooting
- Ensure your bot token is correctly added to the `.env` file.
- Check that the bot has the necessary permissions in your Discord server.
- Verify that Node.js and npm are correctly installed.

## Contributing
Feel free to submit issues and pull requests for improvements!

## License
This project is open-source and available under the MIT License.





