import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: [ './reactive-form.component.css' ]
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;  // FormGroup is the type of our reactive Form 

  genders = ['male', 'female'];
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() {}

  ngOnInit() {
    /* Here we set up our reactive form, which is a FormGroup. 
    We use for every Input field 'FormControl' instead of 'ngModel'.
    The first parameter is the initial/default value. */
    this.signupForm = new FormGroup({
      // We cann also use 'formGroup' to group some controls together
      'userData': new FormGroup({
                            // if we plan to use 'this' in the custom validator, then we have to bind it...
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])  // 'FormArray' is an Array of controls 
    });

    /* listen to value changes... */  
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    /* listen to status changes... */  
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    // setValue --> set the values of the whole form 
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    // patchValue -> set the value of a specific Input field / control    
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    // If we wnat to reset only specific input fileds and not the whole form, then we can pass an object to reset()... 
    this.signupForm.reset();
  }

  onAddHobby() {
    // add controls dynamically... 
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // custom validator...  
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  // asynchronous custom validator...
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);   // resolve after 1,5 seconds 
    });
    return promise;
  }
}
