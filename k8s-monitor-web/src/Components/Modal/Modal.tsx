import { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Modal.scss';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose?: any;
    children: ReactNode;
}

function Modal(props: ModalProps) {

    return (
        <div id='modal' className='modal' style={{ display: props.isOpen ? 'flex' : 'none' }}>
            <div className='modalContainer'>
                <div className='modalTitle' onClick={props.onClose}>
                    <h2>{props.title}</h2>
                    <AiOutlineClose />
                </div>
                <div className='modalContent'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;