// Написать метод myReduce в прототипе массива, который будет работать аналогично reduce

const array: number[] = [4, 2, 3, 1];
Array.prototype.myReduce = function <T, R>(
  func: (acc: R, value: T, index: number, array: T[]) => R,
  initialValue?: R,
): R {
  const startI = initialValue !== undefined ? 0 : 1;
  let acc = initialValue ?? this[0];
  for (let i = startI; i < this.length; i++) {
    acc = func(acc, this[i], i, this);
  }
  return acc;
};

console.log(array.myReduce((acc, value) => acc + value)); //10
