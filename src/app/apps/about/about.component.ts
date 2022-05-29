import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
import { referencias } from './About-Components/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  referencias = referencias;
  

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

}
