import { Routes, Route } from "react-router-dom";

import Layout from "./pages/common/Layout";

import About from "./pages/About";

import Assignments from "./pages/Assignments";
import List from "./pages/Assignments/List";
import Preview from "./pages/Preview";
import DoAssignment from "./pages/DoAssignment";
import Submitted from "./pages/Submitted";

import Submissions from "./pages/Submissions";
import ViewSubmission from "./pages/Submissions/ViewSubmission";
import ListSubmissions from "./pages/Submissions/ListSubmissions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="assignments" element={<Assignments />}>
          <Route path="" element={<List />} />
          <Route path="preview/:id" element={<Preview />} />
          <Route path="do/:id" element={<DoAssignment />} />
          <Route path="submitted" element={<Submitted />} />
        </Route>
        <Route path="submissions" element={<Submissions />} >
          <Route path=":id" element={<ViewSubmission />} />
          <Route path="" element={<ListSubmissions />} />
        </Route>
        <Route path="" element={<About />} />
      </Route>
    </Routes>
  );
}
