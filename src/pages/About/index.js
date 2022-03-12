import { doc } from "firebase/firestore/lite";
import { getAssignments, getDocuments, getAssignment, getCompanies, getSubmissions } from "../../api/database";

export default async function About() {
  return (
    <div>
      <p>
        TalentSpace is blah blah blah
      </p>
      <p>
        This website is a prototype
      </p>

      {console.log(await getAssignment("c1a1").then(doc => doc))}
    </div>
  )
}