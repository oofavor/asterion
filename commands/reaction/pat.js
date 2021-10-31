const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'pat',
  commandDescription: 'Pats desired user',
  requiredUserMention: true,
  embededDescription: (user1, user2) => (`${user1} pats ${user2}! Nya~nya cute`),
}

module.exports = reactionTemplate(options);
