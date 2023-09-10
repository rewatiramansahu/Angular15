import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]'
})
export class PasswordStrengthDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput(): void {
    const password = this.el.nativeElement.value;
    const strength = this.calculateStrength(password);
    this.updateBarColor(strength);
  }

  calculateStrength(password: string): number {
    let strength = 0;

    // Password length
    if (password.length >= 8) {
      strength += 1;
    }

    // Character complexity
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      strength += 1;
    }
    if (/[0-9]/.test(password)) {
      strength += 1;
    }
    if (/[!@#$%^&*()]/.test(password)) {
      strength += 1;
    }

    return strength;
  }

  updateBarColor(strength: number): void {
    const strengthBar = this.el.nativeElement.nextElementSibling;
    if (strengthBar) {
      console.log(strengthBar);
     // strengthBar.style.height = `2px`;
      strengthBar.style.margin = `1px`;
      strengthBar.style.width = `${(strength / 4) * 100}%`;
      strengthBar.style.backgroundColor = this.getColorByStrength(strength);
    }
  }

  getColorByStrength(strength: number): string {
    if (strength >= 3) {
      return 'green';
    } else if (strength === 2) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
