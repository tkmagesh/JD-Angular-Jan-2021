import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms-demo';

  signUpUser = {
    username : '',
    email : ''
  };

  onSubmit(){
    console.log(this.signUpUser);
  }
}
