const officerTypes = require('../../data/officer/officerTypes');

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
      [_, officer] = officerTypes;
      break;
    default:
      [_, officer] = officerTypes;
      break;
  }

  conv.ask(officer.description);
  
};

module.exports = getPatent;
