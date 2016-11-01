import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Feature1ListComponent } from './feature1-list.component';
// import { Feature1DetailComponent } from './feature1-detail.component';

const childRoutes = [
    {
        path: 'feature1',
        component: Feature1ListComponent
    },
    // {
    //     path: 'feature1/:id',
    //     component: Feature1DetailComponent
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
export class Feature1RoutingModule { }
