import { NgModule }              from '@angular/core';
import { RouterModule, Routes,PreloadAllModules }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard }                          from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
const appRoutes: Routes = [
  {
    path :'crisis-center',
    loadChildren:()=>import('./crisis-center/crises-center.module').then(mod=>mod.CrisesCenterModule),
    data:{preload:true}
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,{
      enableTracing: true,// <-- debugging purposes only  // to show router  event log during  navigation lifecycle
        useHash: true ,// <-- HashLocationStrategy ex.  // .../#/crisis-center/
       preloadingStrategy:SelectivePreloadingStrategyService } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers:[SelectivePreloadingStrategyService]
})
export class AppRoutingModule {}