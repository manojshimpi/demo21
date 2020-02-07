import { Component , OnInit } from '@angular/core';
import { LoginsService } from './master/logins.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'demo21';
  
  constructor(private logservice:LoginsService){

  }
  ngOnInit()
  { 
  }
}
