import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Google Search City';
  latitude = '';
  longitude = '';
  form;

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      dia: [null, Validators.required, Validators.maxLength(2)],
      mes: [null, Validators.required],
      ano: [null, Validators.required],
      hora: [null, Validators.required],
      minuto: [null, Validators.required],
      fuso: [null, Validators.required],
      latitude: [null],
      longitude: [null],
    })
  }

  initialForm() {
    
  }

  getLatitude(e) {
    e.preventDefault
    this.form.value.latitude = e;
    this.latitude = e
  }

  getLongitude(e) {
    this.form.value.longitude = e;
    this.longitude = e;
  }

  onSubmit() {
    if (this.form.invalid || !this.latitude || !this.longitude) {
      return;
    }
    console.log(this.form)
  }
  

}
