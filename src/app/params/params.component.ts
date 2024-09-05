import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-params',
  standalone: true,
  imports: [NgIf],
  templateUrl: './params.component.html',
  styleUrl: './params.component.scss',
})
export class ParamsComponent {
  @Input() param1: string = '';
  @Input() param2: string = '';
  param2Visible: boolean = false;

  ngOnInit(): void {
    console.log(this.param1);
    setTimeout(() => {
      this.param2Visible = true;
      console.log(this.param2);
    }, 5000);
  }
}
