import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignalsExploreComponent } from '../signals/signals-explore.component';

@Component({
  imports: [SignalsExploreComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'full-stack-ops-monorepo';
}
