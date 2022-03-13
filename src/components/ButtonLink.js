import { Link } from "react-router-dom";

import "./ButtonLink.css"

export default function ButtonLink({ to, className = "", text, onClick }) {
  return (
    <Link to={to} className={className + " btn"} onClick={onClick}>
      <button>{text}</button>
    </Link>
  )
}
