import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAssignments, getSubmissions } from "../../api/database";

import "./ListSubmissions.css"

function SubmissionItem({ assignmentInfo, submission }) {
  const navigate = useNavigate()
  const { companyName, title } = assignmentInfo?.data || {}
  const { userEmail, phoneNumber } = submission.data
  return (
    <tr onClick={() => navigate(`/submissions/${submission.id}`)}>
      <td>{companyName}</td>
      <td>{title}</td>
      <td>{userEmail}</td>
      <td>{phoneNumber}</td>
    </tr>
  )
}

export default function ListSubmissions() {
  const [submissions, setSubmissions] = useState([])
  const [assignments, setAssignments] = useState([])

  useEffect(() => {
    getSubmissions().then(setSubmissions)
    getAssignments().then(setAssignments)
  }, [])

  return (
    <>
      <h2>Submissions</h2>
      <table className="submissions-list">
        <thead>
          <tr>
            <th>Company</th>
            <th>Assignment</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <SubmissionItem
              key={submission.id}
              assignmentInfo={assignments.find(({ id }) => submission.data.assignmentID === id)}
              submission={submission}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
