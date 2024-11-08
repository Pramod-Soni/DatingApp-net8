import { Component,OnInit,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  http = inject(HttpClient);
  title = 'DatingApp';
  users:any;

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/user').subscribe({
      next:response =>this.users = response,
      error:error => console.log(error),
      complete:() => console.log('Request has completed')
    })    
  }  
  
}
