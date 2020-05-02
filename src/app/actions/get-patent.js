const officerTypes = require('../../data/officer/officerTypes');

const startGame = require('../functions/startGame');

const getPatent = (conv, params) => {
  const { patent } = params;

  let officer;

  switch (patent) {
    case 'Capitain':
      [officer] = officerTypes;
      break;
    case 'Cience':
      [_, officer] = officerTypes;
      break;
    case 'Security':
      [_, _, officer] = officerTypes;
      break;
    default:
      [_, officer] = officerTypes;
      break;
  }

  conv.data.officer = officer;

  conv.ask(officer.description);

  startGame(conv);
};

module.exports = getPatent;
