const { default: DateAnswer } = require("../DateAnswer/DateAnswer");
const {
  default: MultipleChoice,
} = require("../MultipleOptions/multipleChoice");
const { default: TextAnswer } = require("../TextAnswer/textAnswer");

const cardQuestionType = (questionType, index) => {
  switch (questionType) {
    case "multipleChoice":
      return <MultipleChoice />;
    case "date":
      return <DateAnswer />;
    case "shortAnswer":
      return (
        // register={register(`answer-${index}`)}
        <TextAnswer id={index} answerType="short" />
      );
    case "paragraph":
      return <TextAnswer id={index} answerType="long" />;
  }
};

export default cardQuestionType;
