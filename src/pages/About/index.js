import { doc } from "firebase/firestore/lite";
import { getAssignments, getDocuments, getQuestions, getCompanies, getSubmissions } from "../../api/database";

export default async function About() {
  return (
    <div>
      <p>
        TalentSpace is blah blah blah
      </p>
      <p>
        This website is a prototype
      </p>
      {console.log(await getDocuments("assignments").then(doc=>doc[0].title))}
      {console.log(await getCompanies().then(doc=>doc[0]))}
      {console.log(await getAssignments().then(doc=>doc))}
      {console.log(await getSubmissions().then(doc=>doc[0]))}
      {console.log(await getQuestions("c1a1").then(doc => doc))}
    </div>
  )
}