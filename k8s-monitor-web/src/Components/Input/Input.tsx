import { CSSProperties, ReactNode } from 'react';
import './Input.scss';

interface InputProps {
    type?: string;
    placeholder?: string;
    children?: ReactNode,
    style?: CSSProperties;
}

function Input(props: InputProps) {
    return (
        <input type={props.type || 'text'} placeholder={props.placeholder} style={props.style}></input>
    )
}

export default Input;