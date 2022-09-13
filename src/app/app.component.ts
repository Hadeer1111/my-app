import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private fb:FormBuilder){ }

    userprofileForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:[''],

      address: this.fb.group({
        address1:[''],
        address2:[''],
        state:[''],
        zip:['']
      })

    });

    onSubmit(){
      console.warn(this.userprofileForm.value)
    }

}

