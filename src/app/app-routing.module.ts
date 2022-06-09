import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MetricComponent } from './metric/metric.component';
import { EnglishComponent } from './english/english.component';
const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'metric', component: MetricComponent},
  {path: 'english', component: EnglishComponent},
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









