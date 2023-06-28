import { ReactNode } from 'react';
import './Tooltip.scss';

interface TooltipProps {
    text: string;
    children?: ReactNode;
}

function Tooltip(props: TooltipProps) {
    return (
        <div className='tooltip'>
            {props.children}
            <span className='tooltiptext'>{props.text}</span>
        </div>
    )
}

export default Tooltip;