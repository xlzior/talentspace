import { Link } from "react-router-dom";

import "./index.css"

export default function Preview() {
  return (
    <>
      <h2>Data Analyst Engineer</h2>
      <p>Company Name</p>
      <p>Job Description</p>
      <p>Skills required</p>
      <ul>
        <li>Excel</li>
        <li>Tableau</li>
      </ul>
      <ButtonLink to={`/assignments/do/${id}`} text="Start assignment" />
    </>
  )
}
