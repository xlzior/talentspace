import { useState, useEffect } from "react";
import { getAssignments } from "../../api/database";
import Item from "./Item";

import "./List.css"

export default function List() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    getAssignments().then(data => setAssignments(data));
  }, [])

  console.log(assignments)

  return (
    <>
      <h2>Assignments</h2>
      <div className="list">
        {assignments.map(({id, data}) => <Item key={id} id={id} data={data} />)}
      </div>
    </>
  )
}
