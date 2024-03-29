const interactionCreate = async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) return;
  try {
    await command.run(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
};

module.exports = {
  name: 'interactionCreate',
  once: false,
  run: interactionCreate,
};
