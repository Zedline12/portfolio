import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-uirow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uirow.component.html',
  styleUrl: './uirow.component.scss'
})
export class UirowComponent {
  public innerWidth: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }
}
