import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private db: AngularFireDatabase) {}

  public sendMessage(text: string): void {
    this.db.list('/messages')
      .push({
        text,
        createdAt: new Date().toString()
      });
  }

  public getMessages(): Observable<any> {
    return this.db.list('/messages').valueChanges();
  }
}