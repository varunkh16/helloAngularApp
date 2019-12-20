import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'DockerAngular';
  form: FormGroup;
  private authSub: Subscription;
  isLogin: string = "Please Sign In!!!";

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, { validators: [Validators.required] })
    });
    this.authSub = this.appService.getSignUpStatus().subscribe(isLogin=>{
      this.isLogin = isLogin;
    });
  }

  onSaveUser() {
    this.appService.addUser(this.form.value.email,this.form.value.password);
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
