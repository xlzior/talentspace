import Question from "./Question"

export default function QuestionList({ questions = [] }) {
  return (
    <div className="question-list">
      {questions.map((data, index) => <Question index={index} {...data} />)}
      <Question questionText="What is the meaning of life?" />
    </div>
  )
}