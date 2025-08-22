import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.sass'
})
export class Header {
  @ViewChild('menu') menu!: HTMLElement;
  
  isMenuVisible = false;
  
  toggleMenu(){
    this.isMenuVisible = !this.isMenuVisible;
  }

}
