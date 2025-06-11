import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // necesario para HttpClient en standalone

// Angular Material Modules
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';


interface ChatMessage {
  text: string;
  timestamp: Date;
  mine: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
    imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatFormFieldModule,
    MatSelectModule,
    MatRippleModule,
    MatRadioModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTableModule
  ],

})
export class AppChatComponent implements AfterViewChecked {
   @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  contacts = [
    {
      name: 'James Johnson',
      avatar: 'assets/avatars/james.png',
      messagePreview: 'Hey, how are you?'
    },
    // Agrega más contactos aquí
  ];

  selectedContact = this.contacts[0];

  messages = [
    { text: 'Hi Luke.', mine: false, timestamp: new Date('2025-01-04') },
    { text: 'How are you my friend?', mine: false, timestamp: new Date('2025-01-05') },
    { text: 'I am good and what about you?', mine: true, timestamp: new Date('2025-01-06') },
    { text: 'I would love to join the team.', mine: true, timestamp: new Date('2025-01-07') }
  ];

  newMsg = '';

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  sendMessage() {
    if (!this.newMsg.trim()) return;
    this.messages.push({ text: this.newMsg, mine: true, timestamp: new Date() });
    this.newMsg = '';
  }

  selectContact(contact: any) {
    this.selectedContact = contact;
    // Podrías cargar mensajes distintos por contacto si quieres
  }
}