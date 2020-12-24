import {io} from 'socket.io-client';


export class ChatService {
    private url = "ws://entityproject.ddns.net";
    private socket;
  
    
    
    constructor() {
        this.socket = new WebSocket(this.url);  //io(this.url);
       // fetch(this.url, {
        //    credentials: 'include'
        //  })
    }
   
    public sendMessage(message:string) {
        this.socket.send(message);
    }
}