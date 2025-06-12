import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SignalsExploreComponent } from '../signals/signals-explore.component';

@Component({
  imports: [NxWelcomeComponent,SignalsExploreComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'full-stack-ops-monorepo';
  private unusedVar: string = 'hello';
}
