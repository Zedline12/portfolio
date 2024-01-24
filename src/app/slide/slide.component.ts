import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {
  public innerWidth: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }
}
