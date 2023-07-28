import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaultsPageRoutingModule } from './faults-routing.module';

import { FaultsPage } from './faults.page';
import { CollectedDirectivesModule } from 'src/app/collected-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaultsPageRoutingModule,
    CollectedDirectivesModule
  ],
  declarations: [FaultsPage]
})
export class FaultsPageModule {}
