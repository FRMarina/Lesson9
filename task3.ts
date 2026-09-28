class Cache {
  private cache: Record<string, unknown> = {};

  constructor(private readonly fn: (...args: unknown[]) => unknown) {}

  call(...args: unknown[]) {
    const key = JSON.stringify(args);

    if (!(key in this.cache)) {
      this.cache[key] = this.fn(...args);
    }

    return this.cache[key];
  }

  clear(): void {
    this.cache = {};
  }

  get size(): number {
    return Object.keys(this.cache).length;
  }
}

const func = new Cache(() => Math.random());

console.log(func.call()); // случайное число, например 0.123456789
console.log(func.call()); // то же самое число 0.123456789
console.log(func.size); // 1
