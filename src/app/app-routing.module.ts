import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
//import { OpportunityEditionComponent } from './opportunity/opportunity-edition.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'opportunity', component: OpportunityComponent },
  //{ path: 'opportunity-edition', component: OpportunityEditionComponent },
  //{ path: 'opportunity-edition/:id', component: OpportunityEditionComponent },
  //{ path: 'entity', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'entity/:id', component: EntityComponent },
  //{ path: 'entity-edition/:id', component: EntityEditionComponent }
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
