import { CommonModule } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('messagesContainer', { read: ElementRef }) private myScrollContainer!: ElementRef;
  
  public messages: any[] = [];
  public message: string = '';

  constructor(private chatService: ChatService) {
  }

  public ngOnInit(): void {
    this.chatService.getMessages()
      .subscribe((messages) => { 
        this.messages = messages;
        this.scrollToBottom();
      });
  }

  public sendMessage(): void {
    this.chatService.sendMessage(this.message);
    this.message = '';

    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    requestAnimationFrame(() => 
      this.myScrollContainer.nativeElement.scrollTo(0, this.myScrollContainer.nativeElement.offsetHeight)
    );
  }
}