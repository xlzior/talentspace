import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import OpenEndedQuestion from "./OpenEndedQuestion";

export default function QuestionList() {
  return (
    <div className="question-list">
      <MultipleChoiceQuestion />
      <OpenEndedQuestion />
    </div>
  )
}