import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';

const numberCollection = new NumberCollection([5, 3, -2, 10, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
