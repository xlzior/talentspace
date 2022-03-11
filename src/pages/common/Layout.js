import { Link, Outlet } from "react-router-dom";

import "./Layout.css"
import Logo from "./Logo";

export default function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Logo />
        <nav>
          <Link to="assignments">Assignments</Link>
          <Link to="submissions">Submissions</Link>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
