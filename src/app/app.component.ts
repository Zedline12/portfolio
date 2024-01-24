import { Component,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AllComponent } from './all/all.component';
import { HeroComponent } from './hero/hero.component';
import { WorkComponent } from './work/work.component';
import { SlideComponent } from './slide/slide.component';
import { UirowComponent } from './uirow/uirow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,AllComponent,HeroComponent,WorkComponent,SlideComponent,UirowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'portfollio';
}
