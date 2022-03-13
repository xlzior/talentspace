import ButtonLink from "../common/ButtonLink"

import "./index.css"

export default function About() {
  return (
    <div>
      <p>
        TalentSpace is an online hiring platform that champions unbiased hiring and focuses on applicants' skillsets, allowing women to stand a fair chance in their job applications.
      </p>

      <div className="roadsigns">
        <div className="user">
          <div>
            <h2>👩🏻‍💼 Applicants</h2>
            <p>Browse available assignments posted by companies, complete relevant ones that match your skillsets and submit them to companies to be considered for the job.</p>
          </div>
          <ButtonLink to="/assignments" text="Assignments" />
        </div>
        <div className="user">
          <div>
            <h2>💼 Companies</h2>
            <p>Review applicants' submissions and contact them if they could potentially be a good fit for the role.</p>
          </div>
          <ButtonLink to="/submissions" text="Submissions" />
        </div>
      </div>

      <p>
        This website is a prototype developed for Hack For Good 2022. Due to time constraints, we did not implement an authentication system for applicants and companies.
      </p>
    </div>
  )
}