import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fabrae-client';

  ngOnInit(): void {
    if(!(!!localStorage.getItem('userToken'))){
      localStorage.setItem('userToken','null');
    }
    if(!(!!localStorage.getItem('uid'))){
      localStorage.setItem('uid','null');
    }
    if(!(!!localStorage.getItem('authStatus'))){
      localStorage.setItem('authStatus','null');
    }
  }

}
