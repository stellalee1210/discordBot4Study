const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");

function getRandomQuote() {
  const quotes = fs.readFileSync("quotes.txt", "utf-8").split("\n");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("오늘의_명언")
    .setDescription("하루의 힘이 되어 줄 좋은 명언!"),
  async execute(interaction) {
    await interaction.reply(getRandomQuote());
  },
};
