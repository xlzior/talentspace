import ButtonLink from "../common/ButtonLink"

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
    </div>
  )
}