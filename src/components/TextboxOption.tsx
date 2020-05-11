import React from "react"

import { ITextboxOptions } from "../helpers/types"

const TextboxOption = ({
  onTextChange,
  value,
  label,
  optionId,
}: ITextboxOptions) => {
  return (
    <div className="options-section d-flex align-items-center">
      <div className="options-input-wrapper d-flex align-items-center">
        <input
          className="options-textbox"
          id={optionId}
          type="number"
          min="0"
          value={value}
          onChange={(e) => onTextChange(e)}
        />
      </div>
      <label className="" htmlFor={optionId}>
        {label}
      </label>
    </div>
  )
}

export default TextboxOption
