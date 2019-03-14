import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscriber } from '../subscriber';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.css']
})
export class HomeCompComponent implements OnInit {
 name:string=null;
 phone:string=null;
 subsribers:Subscriber[]=[];
  constructor(private router:Router,private route:ActivatedRoute,private shareddataserveive:SharedDataService) {
    this.subsribers=this.shareddataserveive.subscribers;
    this.name=this.route.snapshot.paramMap.get('name');
    this.phone=(this.route.snapshot.paramMap.get('phone'));
    if(this.name!=null && this.phone!=null)
    {
      this.shareddataserveive.push_data({name:this.name,phone:this.phone});
      this.subsribers=this.shareddataserveive.subscribers;
      console.log(this.subsribers);
    }  
   }

  ngOnInit() {
  }
  addSubscriber()
  {
    this.router.navigate(['/add']);
  }
  delete(i)
  {
    this.shareddataserveive.delete_subscriber(i);
  }
}
