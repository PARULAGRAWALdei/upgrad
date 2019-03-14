import { Injectable } from '@angular/core';
import { Subscriber } from './subscriber';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
   subscribers:Subscriber[]=[];
  constructor() { }
  push_data(new_subscriber:Subscriber)
  {
   this.subscribers.push(new_subscriber);
  }
  delete_subscriber(i)
  {
    this.subscribers.splice(i, 1);
  }
}
