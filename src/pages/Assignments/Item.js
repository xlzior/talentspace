import { Link } from "react-router-dom"
import "./Item.css"

export default function Item({ id, data }) {
  const { title, companyName, skills } = data;
  return (
    <Link to={`/assignments/preview/${id}`} className="item">
      <h4>{title}</h4>
      <p>{companyName}</p>
      <p>Skills required: {skills.join(", ")}</p>
    </Link>
  )
}