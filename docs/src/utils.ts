export function omap<T extends unknown, U extends unknown>(object: Record<string, T>, callback: (value: T) => U) {
  const entries = Object.entries(object).map(([key, value]) => {
    return [key, callback(value)];
  });
  return Object.fromEntries(entries);
}

// ref: https://rosettacode.org/wiki/Knuth_shuffle#JavaScript
export function shuffle<T>(arr: T[]) {
  let rand: number, temp: T;

    for (let i = arr.length - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random());//get random between zero and i (inclusive)
        temp = arr[rand];
        arr[rand] = arr[i]; //swap i (last element) with random element.
        arr[i] = temp;
    }
    return arr;
}

export function randomize<T>(array: T[]) {
  let index = 0;
  const random = [...array];
  shuffle(random);
  return () => random[index++ % random.length];
}

export type TColor = {
  red: number;
  green: number;
  blue: number;
};

export function hex(color: TColor) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}