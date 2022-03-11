import Item from "./Item";

import "./List.css"

export default function List() {
  return (
    <>
      <h2>Assignments</h2>
      <div className="list">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </>
  )
}
