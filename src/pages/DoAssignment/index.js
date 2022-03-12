import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getAssignment } from "../../api/database";

import ButtonLink from "../common/ButtonLink"
import QuestionList from "./QuestionList";

export default function Assignment() {
  const { id } = useParams()
  const [assignmentInfo, setAssignmentInfo] = useState({})

  useEffect(() => {
    getAssignment(id).then(data => setAssignmentInfo(data));
  }, [id])

  const { title, companyName, questions } = assignmentInfo;

  return (
    <>
      <h2>{title}</h2>
      <p>{companyName}</p>
      <QuestionList questions={questions} />
      <ButtonLink to="/assignments/submitted" text="Submit assignment" />
    </>
  )
}
