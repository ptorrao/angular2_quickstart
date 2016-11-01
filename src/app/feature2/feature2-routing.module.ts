import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feature2ListComponent } from './feature2-list.component';
// import { Feature2DetailComponent } from './feature2-detail.component';

const childRoutes = [
    {
        path: 'feature2',
        component: Feature2ListComponent
    },
    // {
    //     path: 'feature2/:id',
    //     component: Feature2DetailComponent
    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(childRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class Feature2RoutingModule { }
