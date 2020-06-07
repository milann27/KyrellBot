const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NzE4ODUwMzYxMTIwNTIyMzUy.XtvIUQ.DYaALTdMAbE1V8RgGC5vsrbCMcg";

client.login(token);

client.on("message", (message) => {
  if (message.content.toLowerCase() === "kyrell")
    message.channel.send("No Kyrells Allowed, Kyrell = HomoSexual" + "!");
  else if (message.content.toLowerCase().includes("sook")) {
    message.channel.send("Only Kyrell is s00k!");
  } else if (message.content.toLowerCase().includes("gay")) {
    message.channel.send("You used the word g@y, only Kyrell is a homosexual!");
  } else if (message.content.toLowerCase().includes("-")) {
    message.channel.send(" Kyrell got lil butts");
  }
});
