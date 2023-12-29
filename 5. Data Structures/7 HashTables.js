/**
 *            ---------------------------
 *                  HASH TABLES
 *            ---------------------------
 * -A hash table is a data structure that is used to store data in key-value pairs in an array.
 *  It uses a hash function to map keys to indices in an array.
 * -It is designed to efficiently support the insertion, deletion, and retrieval of key-value pairs.
 *        --------    -----------             ---------  --------      ---------
 * - The key is used to compute the hash node and the value is stored in the corresponding
 *   index in the array.
 * - In the hash function, collisions occcur when two different keys hash to the same index
 *   in the hash table. Separate chaining and linear probing are the techniques used to handle
 *   collisions. Moreover, a rolling hash is implemented in the hashing function to manipulate
 *   a value to affect the hash results by optimizing the hash computations.
 *
 *              --------------------
 *                BIG O HASH TABLES
 *              --------------------
 * (1) Insertion - O(1)
 * (2) Deletion  - O(1)
 * (3) Searching - o(1)
 *
 * - Hash tables are commonly used for their efficiency in searching, insertion and deletion.
 * - Hash tables are implemented natively in programming laguages
 *
 *          -------------------------------------
 *             LANGUAGE    |     IMPLEMENTATION
 *          -------------------------------------
 *             JS          |    Objects and Maps
 *             Python      |    Dictionaries
 *             Java        |    Maps
 *             Ruby        |    Hashes
 *          -------------------------------------
 */

//Hash table implementation
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  //hashing function
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  //add a key-value pair to the hash HashTable
  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  //retrive a value from the hash hash_table
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  //get all the values in the hash_table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return new Set(valuesArr); //removes duplicates in the valuesArr
  }

  //get all the keys in the HashTable
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return new Set(keysArr);
  }
}

let hash_table = new HashTable(17);
hash_table.set('maroon', '#800000');
hash_table.set('yellow', '#ffff00');
hash_table.set('olive', '#808000');
hash_table.set('salmon', '#fa8072');
hash_table.set('lightcoral', '#f08080');
hash_table.set('mediumvioletred', '#c71585');
hash_table.set('plum', '#dda0dd');
hash_table.set('violet', '#dda0dd');
hash_table.set('indigo', '#dda0dd');
