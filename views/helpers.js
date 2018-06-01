let Handlebars = require('handlebars');

module.exports.helpers = {
  breakline: (text) => new Handlebars.SafeString(text.replace(/(\r\n|\n|\r)/gm, '<br>'))
};
