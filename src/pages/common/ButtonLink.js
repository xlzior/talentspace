import { Link } from "react-router-dom";

import "./ButtonLink.css"

export default function ButtonLink({ to, className = "", text }) {
  return (
    <Link to={to} className={className + " btn"}>
      <button>{text}</button>
    </Link>
  )
}
