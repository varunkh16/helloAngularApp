import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: "root"})
export class AppService {

    private authStatusListener = new Subject<string>();

    constructor(private http: HttpClient) {}

    addUser(email: string, password: string) {
        const user: User = {id:null, email:email, password:password};

        this.http.post<{ message: string; user: User }>(
            "http://localhost:3000/signup",
            user
        ).subscribe(userdata=>{
            this.authStatusListener.next("Sign Up successful!!!");
        },
        err=>{
            this.authStatusListener.next("Please Sign In!!!");
        });
    }

    getSignUpStatus() {
        return this.authStatusListener.asObservable();
    }

}