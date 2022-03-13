import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { addSubmission, getAssignment } from "../../api/database";

import ButtonLink from "../../components/ButtonLink"
import QuestionList from "../../components/QuestionList";

const handleSubmit = (id, formData) => {
  const { email, phoneNo, answers } = formData;
  addSubmission(email, phoneNo, id, answers)
}

export default function Assignment() {
  const { id } = useParams()
  const [assignmentInfo, setAssignmentInfo] = useState({})
  const [formData, setFormData] = useState({ email: "", phoneNo: "", answers: [] })

  useEffect(() => {
    getAssignment(id).then(data => {
      setAssignmentInfo(data)
      setFormData(formData => {
        return { 
          ...formData,
          answers: new Array(data.questions.length).fill("")
        }
      })
    });
  }, [id])

  const { title, companyName, questions } = assignmentInfo;

  return (
    <>
      <h2>{title}</h2>
      <p>{companyName}</p>
      <QuestionList questions={questions} formData={formData} setFormData={setFormData} />
      <ButtonLink
        to="/assignments/submitted"
        text="Submit assignment"
        onClick={() => handleSubmit(id, formData)}
      />
    </>
  )
}
