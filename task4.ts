// Написать свой метод myFilter в прототипе массивов

const arr = [1, 5, -4, 3, -2, 0];
Array.prototype.myFilter = function <T>(callback: (value: T, index: number, array: T[]) => boolean): T[] {
  const newArray: T[] = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

console.log(arr.myFilter((value) => value > 0));
