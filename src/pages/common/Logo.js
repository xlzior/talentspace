import { Link } from "react-router-dom"
import "./Logo.css"

export default function Logo() {
  return (
    <Link to="/" className="logo-wrapper">
      <h1 className="logo">
        TalentSpace
        <p className="subtitle">Connecting the dots</p>
      </h1>
    </Link>
  )
}