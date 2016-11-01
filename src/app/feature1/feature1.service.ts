import { Injectable } from '@angular/core';

export class Feature1Model {
    constructor(public id: number, public description: string) { }
}

let FEATURE1_ITEMS = [
    new Feature1Model(1, 'Feature 1 - Item 1'),
    new Feature1Model(2, 'Feature 1 - Item 2'),
    new Feature1Model(3, 'Feature 1 - Item 3'),
    new Feature1Model(4, 'Feature 1 - Item 4'),
    new Feature1Model(5, 'Feature 1 - Item 5'),
    new Feature1Model(6, 'Feature 1 - Item 6'),
    new Feature1Model(7, 'Feature 1 - Item 7'),
    new Feature1Model(8, 'Feature 1 - Item 8'),
    new Feature1Model(9, 'Feature 1 - Item 9'),
    new Feature1Model(10, 'Feature 1 - Item 10'),
];

let feature1ItemsPromise = Promise.resolve(FEATURE1_ITEMS);

@Injectable()
export class Feature1Service {

    constructor() { }

    getItems() {
        return feature1ItemsPromise;
    }

    getItem(id: number | string) {
        return feature1ItemsPromise
            .then(items => items.find(item => item.id === +id));
    }
}