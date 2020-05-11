import React from "react"

import { ICheckboxOptions } from "../helpers/types"

const CheckboxOption = ({
  isChecked,
  onCheckChange,
  label,
  optionId,
}: ICheckboxOptions) => {
  return (
    <div className="options-section d-flex align-items-center">
      <div className="options-input-wrapper d-flex align-items-center">
        <input
          className="options-checkbox"
          id={optionId}
          type="checkbox"
          value=""
          checked={isChecked}
          onChange={() => onCheckChange()}
        />
      </div>
      <label className="" htmlFor={optionId}>
        {label}
      </label>
    </div>
  )
}

export default CheckboxOption
