import { Component, DoCheck, IterableDiffers, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.css']
})
export class NgDoCheckComponent implements OnInit, DoCheck {

  title = 'My Component';
  count = 0;
  prevCount = 0;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  private iterableDiffer;



  constructor(private ngZone: NgZone, private differs: IterableDiffers) {
    this.iterableDiffer = this.differs.find(this.items).create();

  }

  ngOnInit(): void {
  }


  ngDoCheck() {
           console.log('ngDoCheck() called');

            if (this.count !== this.prevCount) {
              console.log('Count has changed');
              // Perform actions based on count change
            }
            if (this.count > 5) {
              console.log('Count is greater than 5');
            }

            this.prevCount = this.count;

            this.ngZone.runOutsideAngular(() => {
              console.log('ngDoCheck() called outside Angular zone');
              // Perform actions outside Angular zone
            });

            // start for iterableDiffer
            const changes = this.iterableDiffer.diff(this.items);
            if (changes) {
              console.log('iterableDiffer Items have changed');
              // Perform actions based on item changes
            }
            // end for iterableDiffer

          

  }

  increment() {
    this.count++;
  }

  addItem() {
    this.items.push('New Item');
  }



}
