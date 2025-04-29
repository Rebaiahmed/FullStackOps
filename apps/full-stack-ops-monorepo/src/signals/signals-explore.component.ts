import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-explore',
  imports: [CommonModule],
  templateUrl: './signals-explore.component.html',
  styleUrl: './signals-explore.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsExploreComponent {

  counter = 0;
  counterSignal = signal(0);
  derivedCounter = computed( ()=> {
    return this.counterSignal()*10;
  })

  list = signal([
    "Hello",
    "World"
]);



object = signal({
  id: 1,
  title: "Angular For Beginners"
});

title = computed(() => {

console.log(`Calling computed() function...`)

const course = this.object();

return course.title;

})



  constructor()
  {
    console.log(`counter value: ${this.counterSignal()}`)
    this.list().push("Again");
    this.object().title = "overwriting title";

    const effectRef =effect (()=>{
     const currentCount = this.counterSignal();
    const derivedCounter = this.derivedCounter();
    console.log(`current values: ${currentCount} 
      ${derivedCounter}`);
    })

    const readOnlyCounter = this.counterSignal.asReadonly();

    // this throws a compilation error
    //readOnlyCounter.set(5);

    effectRef.destroy();
  }

    increment() {
        this.counter++;
        this.counterSignal.set(this.counterSignal() +1);
    }

    updateObject() {

      // We are setting the signal with the exact same 
      // object to see if the derived title signal will 
      // be recalculated or not
      this.object.set({
        id: 1,
        title: "Angular For Beginners"
      });

    }


}
