import { Routes, Route } from "react-router-dom";

import Layout from "./pages/common/Layout";

import Assignments from "./pages/Assignments";
import List from "./pages/Assignments/List";
import Preview from "./pages/Preview";
import DoAssignment from "./pages/DoAssignment";

import Submissions from "./pages/Submissions";
import About from "./pages/About";
import Submitted from "./pages/Submitted";

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
        <Route path="submissions" element={<Submissions />} />
        <Route path="" element={<About />} />
      </Route>
    </Routes>
  );
}
