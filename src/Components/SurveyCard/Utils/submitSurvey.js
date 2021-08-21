export const submitSurvey = (cards, data) => {
  // let results = [];
  console.log({ data, cards });
  //   for (let i = 0; i <= cards.length; i++) {
  //     let newResult;
  //     if (i <= cards.length - 1) {
  //       let title = data[`card-title-${i}`];
  //       let answer = data[`answer-${i}`];

  //       newResult = { title, answer: answer ? answer : null };
  //       results.push(newResult);
  //     }
  //   }

  //   // map through cards
  //   cards.map((card, index) => {
  //     let id = card.id;
  //     let currentQuestion = results[index];

  //     try {
  //       let addQuestionAnswer = createSubAnswer(id, currentQuestion);
  //       console.log(addQuestionAnswer);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   });
};
