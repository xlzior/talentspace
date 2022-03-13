import "./ReadOnlyQuestion.css"

export default function ReadOnlyQuestion({ options, ...props }) {
  if (options) {
    return <ReadOnlyMultipleChoiceQuestion options={options} {...props} />
  } else {
    return <ReadOnlyOpenEndedQuestion  {...props} />
  }
}

function ReadOnlyMultipleChoiceQuestion({ index, questionText, options, answers }) {
  return (
    <div className="question multiple-choice">
      <h4>{questionText}</h4>
      {options.map(option => {
        return (
          <div key={String(option)}>
            <input
              type="radio"
              id={String(option)}
              name={index}
              value={option}
              disabled
              checked={answers[index] === String(option)}
            />
            <label htmlFor={String(option)}>{String(option)}</label>
          </div>
        )
      })}
    </div>
  )
}

function ReadOnlyOpenEndedQuestion({ index, questionText, answers }) {
  return (
    <div className="question open-ended">
      <label htmlFor={index}><h4>{questionText}</h4></label>
      <textarea id={index} name={index} disabled>
        {answers[index]}
      </textarea>
    </div>
  )
}