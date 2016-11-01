import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
// import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminFeature1Component } from './admin-feature1.component';
import { AdminFeature2Component } from './admin-feature2.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule,
	],
	declarations: [
		AdminComponent,
		// AdminDashboardComponent,
		AdminFeature1Component,
		AdminFeature2Component
	]
})
export class AdminModule { }
