import './Button.scss';
import { BsArrowRightCircle } from 'react-icons/bs'

enum ButtonStyle {
    green = 'green',
    red = 'red',
    yellow = 'yellow'

}

interface ButtonProps {
    value: string;
    buttonStyle?: string | ButtonStyle;
    icon?: any;
    onClick?: Function | any
}

function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={props.buttonStyle}>
            <div className='buttonContent'>
                {props.value}
                {!props.buttonStyle && !props.icon ? (
                    <BsArrowRightCircle></BsArrowRightCircle>
                ) : (<>{props.icon}</>)}
            </div>
        </button>
    )
}

export default Button;