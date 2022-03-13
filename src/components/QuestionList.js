import ContactInfo from "./ContactInfo"
import Question from "./Question"

import "./QuestionList.css"

export default function QuestionList({ questions = [], formData = [], setFormData }) {
  return (
    <div className="question-list">
      <ContactInfo formData={formData} setFormData={setFormData} />
      {questions.map((data, index) => (
        <Question key={index} index={index} {...data} formData={formData} setFormData={setFormData} />
      ))}
    </div>
  )
}
