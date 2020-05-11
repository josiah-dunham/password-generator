import React, { useState } from "react"

import CheckboxOption from "./CheckboxOption"
import TextboxOption from "./TextboxOption"

import { generatePassword } from "../services/generate-password"

import "../lib/styles/app.min.css"

import "../lib/styles/generator.css"

const App = () => {
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [autoCopy, setAutoCopy] = useState(true)
  const [passwordStrength, setPasswordStrength] = useState(10)

  const [password, setPassword] = useState("")

  const onUppercaseChecked = () => {
    const newCheckedValue = !uppercase
    setUppercase(newCheckedValue)
  }

  const onLowercaseChecked = () => {
    const newCheckedValue = !lowercase
    setLowercase(newCheckedValue)
  }

  const onNumbersChecked = () => {
    const newCheckedValue = !numbers
    setNumbers(newCheckedValue)
  }

  const onSymbolsChecked = () => {
    const newCheckedValue = !symbols
    setSymbols(newCheckedValue)
  }

  const onAutoCopyChecked = () => {
    const newCheckedValue = !autoCopy
    setAutoCopy(newCheckedValue)
  }

  const onPasswordStrengthChange = (e: any) => {
    setPasswordStrength(e.target.value)
  }

  const getNewPassword = () => {
    const passwordOptions = {
      uppercase,
      lowercase,
      numbers,
      symbols,
      passwordStrength: parseInt(passwordStrength.toString()),
    }

    const generatedPassword = generatePassword(passwordOptions)
    if(autoCopy) {
      copyPasswordToClipboard(generatedPassword)
    }

    setPassword(generatedPassword)
  }

  const copyPasswordToClipboard = (pwValue: string) => {
    const textarea = document.createElement('textarea')
    
    textarea.value = pwValue
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  }

  return (
    <div className="App">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="column col-md-12">
            <div className="generator bg-primary">
              <div className="generator-header text-center">
                <h2>Password Generator</h2>
                <div className="results-section d-flex align-items-center">
                  <div className="generated-result">{password}</div>
                </div>
              </div>
              <div className="generator-body no-select">
                <div className="password-options">
                  <TextboxOption
                    onTextChange={(e) => onPasswordStrengthChange(e)}
                    optionId="passwordStrengthTextbox"
                    label="Password Strength"
                    value={passwordStrength.toString()}
                  />
                  <CheckboxOption
                    onCheckChange={onUppercaseChecked}
                    isChecked={uppercase}
                    label="Include Uppercase Letters"
                    optionId="uppercaseCheckbox"
                  />
                  <CheckboxOption
                    onCheckChange={onLowercaseChecked}
                    isChecked={lowercase}
                    label="Include Lowercase Letters"
                    optionId="lowercaseCheckbox"
                  />
                  <CheckboxOption
                    onCheckChange={onNumbersChecked}
                    isChecked={numbers}
                    label="Include Numbers"
                    optionId="numbersCheckbox"
                  />
                  <CheckboxOption
                    onCheckChange={onSymbolsChecked}
                    isChecked={symbols}
                    label="Include Symbols"
                    optionId="symbolsCheckbox"
                  />
                  <CheckboxOption
                    onCheckChange={onAutoCopyChecked}
                    isChecked={autoCopy}
                    label="Auto-Copy Password to Clipboard"
                    optionId="autoCopyCheckbox"
                  />
                </div>
              </div>
              <div className="generator-footer no-select d-flex justify-content-center align-items-center">
                <div className="generate-btn">
                  <button onClick={() => getNewPassword()}>Generate!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// <div className="generate-btn d-flex justify-content-center align-items-center">
//   <button>Generate!</button>
// </div>

export default App
