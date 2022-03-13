import "./Question.css"

export default function Question({ options, ...props }) {
  if (options) {
    return <MultipleChoiceQuestion options={options} {...props} />
  } else {
    return <OpenEndedQuestion  {...props} />
  }
}

function MultipleChoiceQuestion({ index, questionText, options, formData, setFormData }) {
  const handleChange = event => {
    const newFormData = {
      ...formData,
      answers: [...formData.answers]
    }
    newFormData.answers[index] = String(event.target.value)
    setFormData(newFormData)
  }

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
              checked={formData.answers[index] === String(option)}
              onChange={handleChange}
            />
            <label htmlFor={String(option)}>{String(option)}</label>
          </div>
        )
      })}
    </div>
  )
}

function OpenEndedQuestion({ index, questionText, formData, setFormData }) {
  const handleChange = event => {
    const newFormData = {
      ...formData,
      answers: [...formData.answers]
    }
    newFormData.answers[index] = String(event.target.value)
    setFormData(newFormData)
  }

  return (
    <div className="question open-ended">
      <label htmlFor={index}><h4>{questionText}</h4></label>
      <textarea id={index} name={index} onChange={handleChange}>
        {formData.answers[index]}
      </textarea>
    </div>
  )
}