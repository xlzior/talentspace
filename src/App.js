import { Routes, Route } from "react-router-dom";

import Layout from "./pages/common/Layout";

import Assignments from "./pages/Assignments";
import List from "./pages/Assignments/List";
import Preview from "./pages/Assignments/Preview";
import Assignment from "./pages/Assignments/Assignment";

import Submissions from "./pages/Submissions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="assignments" element={<Assignments />}>
          <Route path="" element={<List />} />
          <Route path="preview" element={<Preview />} />
          <Route path="do" element={<Assignment />} />
        </Route>
        <Route path="submissions" element={<Submissions />} />
      </Route>
    </Routes>
  );
}
