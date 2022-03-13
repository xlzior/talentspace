import toast from "react-hot-toast"
import { BiCopy } from "react-icons/bi"

import "./CopyableField.css"

export default function CopyableField({ name, value }) {
  const handleClick = () => {
    navigator.clipboard.writeText(value)
    toast.success("Copied to clipboard!")
  }
  return (
    <div className="copyable-field-container" onClick={handleClick}>
      <span>{name}</span>
      <div className="copyable-field">
        <span>{value}</span>
        <BiCopy />
      </div>
    </div>
  )
}