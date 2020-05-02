const { SimpleResponse, Suggestions } = require('actions-on-google');

const shipsTypes = require('../../data/spaceship/shipsTypes');

const getUserName = (conv, params) => {
  const {
    person: { name },
  } = params;

  conv.data.userName = name;

  conv.ask(
    new SimpleResponse({
      speech: `Olá ${name}. Para começar a sua viagem, você precisa escolher em qual nave deseja ser tripulante!`,
    }),
    new Suggestions(shipsTypes.map((ship) => ship.suggestion)),
  );
};

module.exports = getUserName;
