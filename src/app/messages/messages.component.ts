import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message: string[];
  constructor(public messageService : MessagesService) { }
  
  ngOnInit(): void {
    this.message = this.messageService.messages
  }

  onClear():void{
    this.messageService.clear();
  }

}
