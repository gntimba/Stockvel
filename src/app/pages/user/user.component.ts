import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from "@angular/core";
import { OnlineService } from 'src/app/services/online.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user = null;
  maxDate = new Date();
  dob = new Date()
  load = true;
  feedback: any;

  constructor(private ser: OnlineService, private fb: FormBuilder, private toast: ToastrService) { }

  profileForm: FormGroup;
  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      suburb: new FormControl('', [Validators.required]),
      postal: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])
    });
    this.ser.getUser().subscribe(profile => {
      this.user = profile;
      this.dob = new Date(this.user.dob)
      this.profileForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        dob: this.dob,
        city: this.user.city,
        suburb: this.user.suburb,
        postal: this.user.postal,
        address: this.user.address,
        phoneNumber: this.user.phoneNumber
      });
      this.load = false;

    })


  }
  update() {
    this.ser.update(this.profileForm.value).subscribe(data => {
      this.feedback = data;
      this.toast.success(this.feedback.message);
    }

    );
  }

}
