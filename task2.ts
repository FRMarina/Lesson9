// Написать класс Stack

class Stack<T> {
  stack: T[] = [];
  constructor(...items: T[]) {
    this.stack = items;
  }
  /** Добавляет элемент в стек */
  push(item: T) {
    this.stack.push(item);
  }

  /** Удаляет и возвращает верхний элемент */
  pop() {
    return this.stack.pop();
  }

  /** Проверяет, пуст ли стек */
  isEmpty() {
    return this.size === 0;
  }

  /** Количество элементов в стеке */
  get size() {
    return this.stack.length;
  }

  /** Очищает стек */
  clear() {
    this.stack.length = 0;
  }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.size); // 2
console.log(stack.isEmpty()); // false
