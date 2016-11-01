import { Component, OnInit } from '@angular/core';

import { Feature2Model, Feature2Service } from './feature2.service';

@Component({
    // moduleId: module.id,
    templateUrl: 'feature2-list.component.html'
})
export class Feature2ListComponent implements OnInit {
    items: Feature2Model[];

    constructor(
        private service: Feature2Service
    ) { }

    ngOnInit() { 
        this.service.getItems()
            .then(items => this.items = items);
    }
}