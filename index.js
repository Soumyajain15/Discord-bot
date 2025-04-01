import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({
     intents: 
     [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ] ,
});

client.on('messageCreate', message => {

    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url= message.content.split('create')[1]
        return message.reply({
            content:"Generating Short ID  for"+url,
        });
    }
  message.reply({
    content:'Hi from the bot ',
  })
  client.on('interactionCreate',(interaction) =>{
    console.log(interaction);
    interaction.deleteReply('Pong!!')
  });
});
client.login('MTM1NjU3ODc2ODY2NzU0NTcyMA.GRT1NM.L2mUI9qfE07U--UXoK1ijxHc_XTz4l70WqKzAs')
