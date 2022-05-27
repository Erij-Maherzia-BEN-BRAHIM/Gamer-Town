import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-client-form',
  templateUrl: './account-client-form.component.html',
  styleUrls: ['./account-client-form.component.css']
})
export class AccountClientFormComponent implements OnInit {
email:string="";
password:string="";
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
register(){
  if(this.email==''){
    alert('Please enter your email');
  return;}
  if(this.password==''){
    alert('Please enter your password');
  return;}
  this.auth.register(this.email,this.password);
  this.email='';
  this.password='';
}
}
