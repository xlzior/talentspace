import "./Question.css"

export default function Question({ options, ...props }) {
  if (options) {
    return <MultipleChoiceQuestion options={options} {...props} />
  } else {
    return <OpenEndedQuestion  {...props} />
  }
}

function MultipleChoiceQuestion({ index, questionText, options }) {
  return (
    <div className="question multiple-choice">
      <h4>{questionText}</h4>
      {options.map(option => {
        return (
          <div key={String(option)}>
            <input type="radio" id={String(option)} name={index} value={option} />
            <label htmlFor={String(option)}>{String(option)}</label>
          </div>
        )
      })}
    </div>
  )
}

function OpenEndedQuestion({ index, questionText }) {
  return (
    <div className="question open-ended">
      <label htmlFor={index}><h4>{questionText}</h4></label>
      <textarea id={index} name={index} />
    </div>
  )
}