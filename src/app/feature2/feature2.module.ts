import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { Feature2ListComponent } from './feature2-list.component';
import { Feature2DetailComponent } from './feature2-detail.component';

import { Feature2Service } from './feature2.service';

import { Feature2RoutingModule } from './feature2-routing.module';

@NgModule({
    imports: [
        CommonModule,
        // FormsModule,
        Feature2RoutingModule
    ],
    declarations: [
        Feature2ListComponent,
        Feature2DetailComponent
    ],
    providers: [
        Feature2Service
    ],
})
export class Feature2Module { }
