import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { getAssignment } from "../../api/database";

import ButtonLink from "../common/ButtonLink";
import "./index.css"

export default function Preview() {
  const { id } = useParams()
  const [assignmentInfo, setAssignmentInfo] = useState({})

  useEffect(() => {
    getAssignment(id).then(data => setAssignmentInfo(data));
  }, [id])

  const { title, companyName, description, skills = [] } = assignmentInfo;

  return (
    <>
      <h2>{title}</h2>
      <p>{companyName}</p>
      <p>{description}</p>
      <p>Skills required</p>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
      <ButtonLink to={`/assignments/do/${id}`} text="Start assignment" />
    </>
  )
}
