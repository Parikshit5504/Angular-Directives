import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo8';

  constructor(){ }

// show = true;
// hide = false;
// name = 'PARIKSHIT';
// course = 'html';
// lang = ['html', 'php', 'java', 'python', 'kotlin']
user = [
  {name:'Parikshit', email:'parikshit@gmail.com'},
  {name:'revati', email:'revati@gmail.com'},
  {name:'pawan', email:'pawan@gmail.com'},
  {name:'ram', email:'ram@gmail.com'}
  ]
}

