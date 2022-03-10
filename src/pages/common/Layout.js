import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <nav>
        <Link to="assignments">Assignments</Link> |{" "}
        <Link to="submissions">Submissions</Link>
      </nav>
      hello world
      <Outlet />
    </div>
  )
}
