import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  constructor(private route:Router) { }
  name:string;
  phone:string;
  ngOnInit() {
  }
  addSubscriber()
  {
    this.route.navigate(['',this.name,this.phone]);
  }
  goBack()
  {
    this.route.navigate(['']);
  }
}
