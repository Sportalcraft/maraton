import {io} from 'socket.io-client';


export class ChatService {
    private url = 'ws://77.127.95.87:8080';
    private socket;
  
    
    
    constructor() {
        this.socket = io(this.url, { withCredentials: true});
        fetch(this.url, {
            credentials: 'include'
          })
    }
   
    public sendMessage(message:string) {
        this.socket.emit('new-message', message);
    }
}