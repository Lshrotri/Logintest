import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
path: 'hero-create',
loadChildren: () => import('src/app/pages/hero-create/hero-create.component').then(m => m.HeroCreateComponent)


},

{
path: 'heroes-edit',
loadChildren: () => import('src/app/pages/hero-edit/hero-edit.component').then(m => m.HeroEditComponent)

},

{
path: 'heroes-detail',
loadChildren: () => import('src/app/pages/heroes-detail/heroes-detail.component').then(m => m.HeroesDetailComponent)

},

{
path: 'heroes-list',
loadChildren: () => import('src/app/pages/heroes-list/heroes-list.component').then(m => m.HeroesListComponent)

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
