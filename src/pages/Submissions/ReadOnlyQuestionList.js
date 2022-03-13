import ReadOnlyQuestion from "./ReadOnlyQuestion"

import "./ReadOnlyQuestionList.css"

export default function ReadOnlyQuestionList({ questions = [], answers = {} }) {
  return (
    <div className="question-list">
      {questions.map((data, index) => (
        <ReadOnlyQuestion key={index} index={index} {...data} answers={answers} />
      ))}
    </div>
  )
}
