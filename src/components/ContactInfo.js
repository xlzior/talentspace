export default function ContactInfo({ formData, setFormData }) {
  const handleChange = event => {
    const newFormData = {
      ...formData,
      answers: [...formData.answers]
    }
    newFormData[event.target.name] = String(event.target.value)
    setFormData(newFormData)
  }

  return (
    <div className="contact-info">
      The company will use this information to contact you if you are suitable for the role.
      <div className="question">
        <label htmlFor="email"><h4>Email</h4></label>
        <input
          type="email" id="email" name="email"
          value={formData.email} onChange={handleChange}
        />
      </div>
      
      <div className="question">
        <label htmlFor="phoneNo"><h4>Phone number</h4></label>
        <input
          type="text" id="phoneNo" name="phoneNo"
          value={formData.phoneNo} onChange={handleChange}
        />
      </div>
    </div>
  )
}