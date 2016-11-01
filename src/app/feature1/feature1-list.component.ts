import { Component, OnInit } from '@angular/core';

import { Feature1Model, Feature1Service } from './feature1.service';

@Component({
    // moduleId: module.id,
    templateUrl: 'feature1-list.component.html'
})
export class Feature1ListComponent implements OnInit {
    items: Feature1Model[];

    constructor(
        private service: Feature1Service
    ) { }

    ngOnInit() { 
        this.service.getItems()
            .then(items => this.items = items);
    }
}