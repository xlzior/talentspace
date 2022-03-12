import "./Question.css"

export function MultipleChoiceQuestion({ index, questionText, options }) {
  return (
    <div className="question multiple-choice">
      <h4>{questionText}</h4>
      {options.map(option => {
        return (
          <div key={option}>
            <input type="radio" id={option} name={index} value={option} />
            <label htmlFor={option}>{option}</label>
          </div>
        )
      })}
    </div>
  )
}

export function OpenEndedQuestion({ index, questionText }) {
  return (
    <div className="question open-ended">
      <label htmlFor={index}><h4>{questionText}</h4></label>
      <textarea id={index} name={index} />
    </div>
  )
}