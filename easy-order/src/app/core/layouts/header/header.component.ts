import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ChatMessage } from '../../models/chat-message';
import { SidebarStateService } from '../../services/sidebar-state.service';

@Component({
  selector: 'eo-header',
  standalone: true,
  imports: [
    ButtonModule,
    BreadcrumbModule,
    TooltipModule,
    InputTextModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  protected readonly SIDEBAR_STATE_SERVICE = inject(SidebarStateService);

  protected items: MenuItem[] | undefined;

  protected isOpenChat: boolean = false;

  protected home: MenuItem | undefined;

  protected readonly CHAT_MESSAGES: ChatMessage[] = [];

  protected message: string = '';

  ngOnInit() {
    this.home = { icon: 'pi pi-home' };
  }

  protected addChatMessage(): void {
    this.CHAT_MESSAGES.push({ message: this.message, isMyMessage: true });
    this.message = '';

    this.addChatMessageSupport();
  }

  private addChatMessageSupport(): void {
    this.CHAT_MESSAGES.push({ message: generateLoremParagraphs(), isMyMessage: false });
  }

}

function generateLoremParagraphs(): string {
  const base = [
    "Lorem ipsum dolor sit amet.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam.",
    "Duis aute irure dolor in reprehenderit."
  ];
  const paragraphs = [];
  const sentences = [];
  const sentencesCount = 2 + Math.floor(Math.random() * 3);
  for (let j = 0; j < sentencesCount; j++) {
    sentences.push(base[(1 + j) % base.length]);
  }
  paragraphs.push(sentences.join(" "));
  return paragraphs.join("\n\n");
}
