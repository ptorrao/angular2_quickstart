import { Injectable } from '@angular/core';

export class Feature2Model {
    constructor(public id: number, public description: string) { }
}

let FEATURE2_ITEMS = [
    new Feature2Model(1, 'Feature 2 - Item 1'),
    new Feature2Model(2, 'Feature 2 - Item 2'),
    new Feature2Model(3, 'Feature 2 - Item 3'),
    new Feature2Model(4, 'Feature 2 - Item 4'),
    new Feature2Model(5, 'Feature 2 - Item 5'),
    new Feature2Model(6, 'Feature 2 - Item 6'),
    new Feature2Model(7, 'Feature 2 - Item 7'),
    new Feature2Model(8, 'Feature 2 - Item 8'),
    new Feature2Model(9, 'Feature 2 - Item 9'),
    new Feature2Model(10, 'Feature 2 - Item 10'),
];

let feature2ItemsPromise = Promise.resolve(FEATURE2_ITEMS);

@Injectable()
export class Feature2Service {

    constructor() { }

    getItems() {
        return feature2ItemsPromise;
    }

    getItem(id: number | string) {
        return feature2ItemsPromise
            .then(items => items.find(item => item.id === +id));
    }
}