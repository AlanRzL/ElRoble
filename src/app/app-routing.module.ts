import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { AuthGuard } from './guards/auth.guard';
import { ExploreContainerComponent } from './pages/explore-container/explore-container.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'start', component: StartComponent
  },{
    path: 'login', component: LoginComponent
  },
  {
    path: 'ExploreContainer', component: ExploreContainerComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
