import { ReactNode } from "react";
import './SelectOption.scss'

interface Props {
    children?: ReactNode
}

function SelectOption({ children }: Props) {
    return (
        <select>
            {children}
        </select>
    )
}


export default SelectOption;