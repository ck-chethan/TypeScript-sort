import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

const numberCollection = new NumberCollection([5, 3, -2, 10, 2]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const charCollections = new CharacterCollection('Xaayb');
const sortCharacters = new Sorter(charCollections);
sortCharacters.sort();
console.log(charCollections);
