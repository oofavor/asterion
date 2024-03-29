const fs = require('fs');

const initEvents = (client) => {
  const eventFiles = fs
    .readdirSync('./events/')
    .filter((file) => file.endsWith('.js'));
  for (const file of eventFiles) {
    const event = require(`../events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.run(...args));
    } else {
      client.on(event.name, (...args) => event.run(...args));
    }
  }
};

module.exports = initEvents;
