/**
 * 
collectStrings
Write a function called collectStrings which accepts an object and returns 
an array of all the values in the object that have a typeof string
 */

function collectStrings(obj) {
  let array = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      array.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      array = array.concat(collectStrings(obj[key]));
    }
  }
  return array;
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
