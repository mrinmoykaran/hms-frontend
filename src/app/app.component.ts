import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'Hospital-Management-System';

  constructor(private titleService:Title) {
    this.titleService.setTitle("Hospital-Management-System");
  }
}
