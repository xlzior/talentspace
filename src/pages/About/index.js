import ButtonLink from "../common/ButtonLink"
import { doc } from "firebase/firestore/lite";
import { getAssignments, getDocuments, getAssignment, getCompanies, getSubmissions, calculateScore } from "../../api/database";

export default function About() {
  return (
    <div>
      <p>
        TalentSpace is blah blah blah
      </p>
      <p>
        This website is a prototype
      </p>

      <ButtonLink to="/assignments" text="Assignments" />
      <br />
      <ButtonLink to="/submissions" text="Submissions" />
      {console.log(await calculateScore("c1a1", [20, "Saturday", true]))}
    </div>
  )
}