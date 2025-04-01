import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'Create',
    description: 'Create a new short url',
  },
];

const rest = new REST({ version: '10' }).setToken('MTM1NjU3ODc2ODY2NzU0NTcyMA.GRT1NM.L2mUI9qfE07U--UXoK1ijxHc_XTz4l70WqKzAs');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1356578768667545720'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}