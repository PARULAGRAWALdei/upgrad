import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddSubscriberComponent } from './add-subscriber/add-subscriber.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
const appRoutes:Routes=
[
  {
    path:'',component:HomeCompComponent
  },{
  path:':name/:phone',component:HomeCompComponent
},
{
  path:'add',component:AddSubscriberComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AddSubscriberComponent,
    HomeCompComponent,
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
