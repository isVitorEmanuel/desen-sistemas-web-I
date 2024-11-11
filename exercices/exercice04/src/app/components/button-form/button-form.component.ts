import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-form',
  standalone: true,
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.css']
})
export class ButtonFormComponent {
  @Input() submitFunction!: () => void;  // Função a ser chamada no clique
  @Input() form!: FormGroup; // FormGroup recebido do pai

  send() {
    if (this.form.valid) {
      this.submitFunction();
    }
  }
}
