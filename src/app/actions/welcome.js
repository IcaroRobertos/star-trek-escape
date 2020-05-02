const welcome = (conv) => {
  conv.ask(
    'Espaço, a fronteira final... Seja bem vindo a mais uma aventura, audaciosamente indo onde nenhum homem jamais esteve.',
  );

  conv.ask('Vamos começar a nossa jornada? Qual o seu nome?');
};

module.exports = welcome;
