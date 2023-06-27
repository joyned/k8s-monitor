import './Button.scss';
import { BsArrowRightCircle } from 'react-icons/bs'

enum ButtonStyle {
    success = 'success',
    error = 'error',
    warn = 'warn'

}

interface ButtonProps {
    value: string;
    style?: string | ButtonStyle;
    icon?: any;
    onClick?: Function | any
}

function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={props.style}>
            <div className='buttonContent'>
                {props.value}
                {!props.style && !props.icon ? (
                    <BsArrowRightCircle></BsArrowRightCircle>
                ) : (<>{props.icon}</>)}
            </div>
        </button>
    )
}

export default Button;