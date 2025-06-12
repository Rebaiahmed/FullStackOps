import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app';
  private unusedVar: string = 'hello';
  // This is an unused variable to demonstrate the difference in code structure
  // between the two code snippets. It serves no functional purpose.
  private anotherUnusedVar: number = 42; // Another unused variable for demonstration

  helloWorld(): string {
   let unusedVar = 'hello';
    console.log('Hello, World!');
    return 'Hello, World!';
  }

  ngOnInit() {
    // This empty method should trigger a warning
  }

  ngOnDestroy() {
    // This empty method should also trigger a warning
  }

   // This method should trigger a warning because it lacks an explicit return type
  getMessage() {
    return 'Hello, ESLint!';
  }

  // This function should trigger a warning
  calculateSum(a: number, b: number) {
    return a + b;
  }

  // This arrow function should trigger a warning
  private logValue = (value: string) => {
    console.log(value);
  }


   letMeBeConst() {
    let appName = 'My App'; // This should trigger an error because 'appName' is not reassigned
    console.log(appName);

    let counter = 0; // This should NOT trigger an error because 'counter' is reassigned
    counter++;
    console.log(counter);
  }


  /*  checkEquality() {
    const num = 5;
    const str = '5';

    if (num == str) { // This should trigger an error
      return 'Loose equality is true!';
    }

    if (num != 6) { // This should also trigger an error
      return 'Loose inequality is true!';
    }

    // Correct way (no error):
    if (num === parseInt(str)) {
        return 'Strict equality is true!';
    }

    return 'Checks complete.';
  } */
}
