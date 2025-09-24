const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("인사")
    .setDescription("조교의 인사를 받아봅시다!"),
  async execute(interaction) {
    await interaction.reply("아아아아아아앙?!?!!!");
  },
};
