const { SimpleResponse, Suggestions } = require('actions-on-google');
const shipsTypes = require('../../data/spaceship/shipsTypes');
const officerTypes = require('../../data/officer/officerTypes');

const getSpaceship = (conv, { spaceship }) => {
  const {
    data: { userName },
  } = conv;

  let shipData;

  switch (spaceship) {
    case 'Science':
      [shipData] = shipsTypes;
      break;
    case 'Contitution':
      [_, shipData] = shipsTypes;
      break;
    case 'Cruiser':
      [_, _, shipData] = shipsTypes;
      break;
    default:
      [_, shipData] = shipsTypes;
  }

  conv.data.spaceship = shipData;

  conv.ask(
    `Ótimo, ${userName}. Você será tripulante na ${shipData.name}. ${shipData.description}`,
  );
  conv.ask(
    new SimpleResponse('Qual tipo de oficial você deseja ser?'),
    new Suggestions(officerTypes.map((officer) => officer.name)),
  );
};

module.exports = getSpaceship;
