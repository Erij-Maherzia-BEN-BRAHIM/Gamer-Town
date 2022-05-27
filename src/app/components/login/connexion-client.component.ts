import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion-client',
  templateUrl: './connexion-client.component.html',
  styleUrls: ['./connexion-client.component.css']
})
export class ConnexionClientComponent implements OnInit {
email: string="";
password: string="";
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
login(){
  if(this.email==''){
    alert('Please enter your email');
  return;}
  if(this.password==''){
    alert('Please enter your password');
  return;}
  this.auth.login(this.email,this.password);
  this.email='';
  this.password='';
}
}
