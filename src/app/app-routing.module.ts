import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'contact/:id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
