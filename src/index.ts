class Sorter {
  // collection: number[];

  // constructor(collection: number[]){
  //   this.collection = collection;
  // }

  constructor(public collection: number[] | string) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Adding Type guard to get features of arrays or string
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }
  }
}

const sorter = new Sorter([5, 3, -1, 10, 2]);
sorter.sort();
console.log(sorter.collection);
