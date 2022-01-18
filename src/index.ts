import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([5, 3, -2, 10, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const charCollections = new CharacterCollection('Xaayb');
const sortCharacters = new Sorter(charCollections);
sortCharacters.sort();
console.log(charCollections.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sortList = new Sorter(linkedList);
sortList.sort();
linkedList.print();
