import { Component } from '@angular/core';  
import { ChatService } from './service/chat.service';


  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {
  title = 'app works!';
  message: string ;
  data1: string = 'Sarathlal Saseendran';  
  data2: string = '12345';  

  constructor(private chatService: ChatService) {
    this.message = '';
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  send( message: string) {
    this.chatService.sendMessage(message);
  }
}