export interface ICheckboxOptions {
    onCheckChange: () => void
    isChecked: boolean
    label: string
    optionId: string
}

export interface ITextboxOptions {
    onTextChange: (e: any) => void
    label: string
    optionId: string
    value: string
}

export enum OPTIONS {
    UPPER,
    LOWER,
    DIGIT,
    SYMBOL
}