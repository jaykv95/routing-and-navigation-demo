import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { CrisisListComponent }    from './crisis-list/crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail/crisis-detail.component';

import { CrisesRoutingModule } from './crises-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisesRoutingModule
  ],
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent
  ]
})
export class CrisesCenterModule {}