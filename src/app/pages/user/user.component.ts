import { Component, OnInit } from "@angular/core";
import { OnlineService } from 'src/app/services/online.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user = null;
  startValue = new Date()
  dob = new Date()
  constructor(  private ser: OnlineService) {}
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit() {
    this.ser.getUser().subscribe(profile => {
      this.user = profile;
      this.dob=new Date(this.user.dob)
    })


  }
  update(){
    console.log(this.user)
  }
  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() > this.startValue.getTime();
  };
}
