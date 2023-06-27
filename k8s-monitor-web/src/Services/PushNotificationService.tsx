import socketIOClient, { Socket } from "socket.io-client";
import PushNotificationMessage from "../Models/PushNotificationMessage";

const SOCKET_SERVER_URL = "http://localhost:5555";

class PushNotificationService {
    url: string;
    socket: Socket;

    constructor(url: string) {
        this.url = url;
        this.socket = socketIOClient(SOCKET_SERVER_URL);
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }

    sendMessage(message: PushNotificationMessage) {
        if (this.socket) {
            const data = { event: 'message', data: message };
            this.socket.emit('message', JSON.stringify(data));
            console.log('Sent message:', data);
        } else {
            console.log('WebSocket is not connected');
        }
    }
}

export default PushNotificationService;