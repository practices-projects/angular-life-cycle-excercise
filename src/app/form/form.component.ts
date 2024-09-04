import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  inputValue: string = '';

  onInputChange(event: any): void {
    this.inputValue = event.target.value;
  }
}
