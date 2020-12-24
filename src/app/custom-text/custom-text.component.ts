import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';  
import { Socket } from 'socket.io-client';
//import { ChatService } from './service/chat.service';
  
@Component({  
  selector: 'app-custom-text',  
  templateUrl: './custom-text.component.html',  
  styleUrls: ['./custom-text.component.css']  
})  
export class CustomTextComponent implements OnInit {  
  
  @Input() inputModel: string = "";  
  @Input() maxLength: number = 0;  
  @Input() isNumeric: boolean = false;   

  @Input() msg: String = "";  
  @Input() snd: ()=>any = ():any=>{};  
  
  @Output() inputModelChange = new EventEmitter<string>();  
  
  totalCharLengthText: string = "";  
  
  textCount: number = 0; 
  
  constructor() {
  }


    
  ngOnInit() {  
    this.textCount = this.inputModel.length;  
    this.totalCharLengthText = (this.maxLength==0)?'Unlimited':(this.maxLength).toString();  
  }  
  
  textChange(){  
    this.snd();

    this.inputModelChange.emit(this.inputModel);  
    this.textCount = this.inputModel.length; 
  }  
  
  numberOnly(event:any): boolean {  
    if(!this.isNumeric) return true;  
    const charCode = (event.which) ? event.which : event.keyCode;  
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !=46 ) {  
      return false;  
    }  
    return true;  
  }  
}  