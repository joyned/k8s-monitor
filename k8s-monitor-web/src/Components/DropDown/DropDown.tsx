import { ReactNode, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import './DropDown.scss';

interface DropDownProps {
    title: string;
    startToggled?: boolean;
    isToggleable?: boolean;
    children?: ReactNode;
}

function DropDown(props: DropDownProps) {
    const [toggled, isToggled] = useState<boolean>(props.startToggled || false);
    const [toggleabe] = useState<boolean>(props.isToggleable !== undefined ? props.isToggleable : true);

    function showContent() {
        if (toggleabe) {
            isToggled(!toggled);
        }
    }

    return (
        <>
            <div className='dropDown'>
                <div className='title' onClick={showContent}>
                    <span>{props.title}</span>
                    {toggleabe && (toggled ? (<AiFillCaretUp />) : (<AiFillCaretDown />))}
                </div>
                <div className='content' style={toggleabe ? { display: toggled ? 'block' : 'none' } : { display: 'block' }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default DropDown;