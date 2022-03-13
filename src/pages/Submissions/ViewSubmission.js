import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getSubmission } from "../../api/database";

import CopyableField from "../../components/CopyableField";
import ReadOnlyQuestionList from "../../components/ReadOnlyQuestionList";

import "./ViewSubmission.css"

export default function ViewSubmission() {
  const { id } = useParams()
  const [submission, setSubmission] = useState({})

  useEffect(() => {
    getSubmission(id).then(setSubmission)
  }, [id])
  
  console.log('submission :', submission);
  const { userEmail, phoneNumber, title, companyName, questions, answers } = submission;

  return (
    <div>
      <h2>{title}</h2>
      <p>{companyName}</p>
      <ReadOnlyQuestionList questions={questions} answers={answers} />

      <h3>Applicant's Contact Information</h3>
      <div className="read-only-contact-info">
        <CopyableField name="Email address" value={userEmail} />
        <CopyableField name="Phone number" value={phoneNumber} />
      </div>
    </div>
  )
}
