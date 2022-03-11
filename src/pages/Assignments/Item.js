import { Link } from "react-router-dom"
import "./Item.css"

export default function Item() {
  return (
    <Link to="/assignments/preview" className="item">
      <h4>Data Analyst Engineer</h4>
      <p>Company Name</p>
      <p>Skills required: Microsoft Excel, Tableau</p>
    </Link>
  )
}