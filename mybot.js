const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member}, bienvenido al curso de C!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?");
  }
  if (message.content.startsWith(prefix + "Facu")){
      message.channel.send("Facu me creo bro, un capo. Tipo conocedor");
  }
  if (message.content.startsWith(prefix + "chistesito")){
    message.channel.send({embed: {
        color: 3447003,
        description: "¿Que le dice un bit al otro? Nos vemos en el bus.xdxdxdxd",
        setUrl: "https://i.redd.it/zltt1qa5r3y31.jpg"
      }});
  if (message.content.startsWith(prefix + "bardeoscooter")){
      message.channel.send("Scooter que te pasa la recajetirijilla");
  }
}
});
client.login(config.token);

