import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm;

  constructor(private formbuilder: FormBuilder, private cd: ChangeDetectorRef) {
    this.signupForm = this.formbuilder.group({
      firstName: [null, Validators.required],
      lastname: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
      picture: [null, Validators.required],
      dob: [null, Validators.required]
    });
  }
  onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.signupForm.patchValue({
          picture: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }



  ngOnInit() {
  }

}
