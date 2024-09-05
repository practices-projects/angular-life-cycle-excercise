import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ParamsComponent } from './params/params.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParamsComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular18';
  param1 = 'param1 before 5 seconds';
  param2 = 'param2 after 5 seconds';
}
