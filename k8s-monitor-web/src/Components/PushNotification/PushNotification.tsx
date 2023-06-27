import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import socketIOClient from "socket.io-client";
import PushNotificationMessage from '../../Models/PushNotificationMessage';
import './PushNotification.scss';

const SOCKET_SERVER_URL = "http://localhost:5555";

function PushNotification() {
    const [props, setProps] = useState<PushNotificationMessage | undefined>();

    useEffect(() => {
        const socket = socketIOClient(SOCKET_SERVER_URL);

        function onPushNotification(value: PushNotificationMessage) {
            setProps(value);
        }

        socket.on('pushNotification', onPushNotification);
    }, [props])

    function toggleOfNotification() {
        setProps(undefined);
    }

    return (
        <>
            {props && (
                <div className={props?.style === 'info' ? 'pushNotification' : props?.style === 'success' ? 'pushNotification success' : props?.style === 'error' ? 'pushNotification error' : 'pushNotification info   '}
                    onClick={toggleOfNotification}>
                    <div className='container'>
                        <div className='icon'>
                            {props?.style === 'info' ? <AiOutlineInfoCircle /> : props?.style === 'success' ? <AiOutlineCheckCircle /> : props?.style === 'error' ? <AiOutlineWarning /> : <AiOutlineInfoCircle />}
                        </div>
                        <div className='message'>
                            {props?.message}
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default PushNotification;