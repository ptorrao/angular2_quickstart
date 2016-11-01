import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { Feature1ListComponent } from './feature1-list.component';
import { Feature1DetailComponent } from './feature1-detail.component';

import { Feature1Service } from './feature1.service';

import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
    imports: [
        CommonModule,
        // FormsModule,
        Feature1RoutingModule
    ],
    declarations: [
        Feature1ListComponent,
        Feature1DetailComponent
    ],
    providers: [
        Feature1Service
    ],
})
export class Feature1Module { }
