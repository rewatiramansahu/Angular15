import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css'],
  inputs : ['users']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges {
  internalState: any;
  constructor() {
    console.log("constructor() is called.");
  }

  ngOnInit(): void {
    console.log("ngOnInit() is called");
  }

  ngOnChanges(changes : SimpleChanges): void {
    console.log("ngOnChanges() is called.");

    this.internalState = this.calculateInternalState(changes['users'].currentValue);

  }

  calculateInternalState(user: any) {
    const internalState = {
      fullName: '',
      initials: '',
      emailDomain: ''
      // ... additional properties
    };

    if (user && user.firstName && user.lastName) {
      internalState.fullName = `${user.firstName} ${user.lastName}`;
      internalState.initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
    }

    if (user && user.email) {
      internalState.emailDomain = user.email.split('@')[1];
    }

    return internalState;
  }



}
