# Coding Kata

## Was ist eine Kata?

https://youtu.be/c_vKs2O7WRQ?t=516

### 形 japanisch Kata = Form

- Festlegte Abfolge von Basis Bewegungen (Lehrer schlägt Schüler, Schüler kontert und gewinnt)
- Sich wiederholende Übungen mit Fokus auf einen kleinen Bereich
- Erfordert Disziplin zur Perfektionierung
- Das Ziel ist die Übung bzw. der Lösungsweg nicht die Lösung selbst
- Übung macht den Meister

# Sanman Kurai

Shu (習): Lernen
Ren (練): Üben / Wiederholen
Ko (工): Reflektieren / Verbessern

## Was wollen wir erreichen?

https://youtu.be/IN5H99aHd5A?t=108

- Stressmanagement durch Disziplin
- Einsatz von Techniken ohne Nachdenken in Praxis (Muscle Memory)
- Spass haben mit Code zu experimentieren
- Diskussion mit anderen, Verbesserung

## Was kann ich mit Coding Kata lernen?

- Unterschiedliche Lösungswege für das gleiche Problem
- Extreme Programming: TDD + Simple Design + Pair Programming + Refactoring
- Design Pattern & Techniken
- Code optimieren, Refactoring
- Neue Technologien, Language Features
- Unbekannte Programmiersprachen ( z.B. Golang, Rust; bekanntes Problem in neuer Sprache lösen)
- Unbekannte Paradigmen Functional Programming (z.B. Clojure)
- Alternative IDEs und deren Features, Hotkeys

## Anwendung in Software Development

- Ziel in inkrementellen Schritten zur Lösung
- Nicht das goldene Ziel versuchen direkt zu erreichen
- geleitet durch Extreme Programing / TDD
- Wichtig Tests selber schreiben
- Timeboxed ca 30-60 min
- Challenge durch eigene Handycaps (z.B. keine If statements erlaubt, nur Objekt orientiert, unbekannte IDE)

## Was wird benötigt?

- Funktionsfähige Unit Testumgebung für schnelles Feedback
- Festgelegte Zeit außerhalb der Arbeitszeit/Stresssituation
- Motivation & Bereitschaft zu lernen
- Bereitschaft Übungen zu wiederholen
- Mentor oder Referenz Material

## Klassische Beispiele

- Fizz Buzz
- Bowling Game
- Prime Factors
- Game of Life

## Live coding Prime Factors Kata in Typescript mit TDD

- Test First
- Red - Green - Refactor
- Je spezifischer die Tests desto generalisierter der Code
- Keep it simple

### Prime Factors Kata

Schreibe eine Funktion die, die Prim Faktoren einer beliebigen Zahl berechnet.

### Step 1 Null Case

```ts
it('should calculate prime factors for 1', () => {
  expect(primeFactorsOf(null)).toEqual([]);
});
```

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];
  return result;
};
```

### Step 2 Split Flow Transformation

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];
  if (n > 1) {
    result.push(2);
  }
  return result;
};
```

### Step 3 Content to Variable Transformation

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];
  if (n > 1) {
    result.push(n);
  }
  return result;
};
```

### Step 4 Split Flow

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];
  if (n > 1) {
    if (n % 2 === 0) {
      result.push(2);
      n /= 2;
    }
  }
  if (n > 1) {
    result.push(n);
  }
  return result;
};
```

### Step 5 If to While

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];
  if (n > 1) {
    while (n % 2 === 0) {
      result.push(2);
      n /= 2;
    }
  }
  if (n > 1) {
    result.push(n);
  }
  return result;
};
```

### Step 6 Refactor to For

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];
  if (n > 1) {
    for (; n % 2 === 0; n /= 2) {
      result.push(2);
    }
  }
  if (n > 1) {
    result.push(n);
  }
  return result;
};
```

### Step 7 Constant to Variable

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];
  let divisor = 2;
  while (n > 1) {
    for (; n % 2 === 0; n /= divisor) {
      result.push(divisor);
    }
    divisor++;
  }
  if (n > 1) {
    result.push(n);
  }
  return result;
};
```

### Step 8 Result Refactor to for

```ts
const primeFactorsOf = (n: number): number[] => {
  const result = [];

  for (let divisor = 2; n > 1; divisor++) {
    for (; n % 2 === 0; n /= divisor) {
      result.push(divisor);
    }
  }
  return result;
};
```

```ts
const primeFactorsOf = (input: number, result: number[] = []): number[] => {
  for (let n = 2; n < input; n++) {
    if (input % n === 0) {
      return primeFactorsOf(input / n, [...result, n]);
    }
  }
  return input === 1 ? [] : [...result, input];
};
```

### Tests

```ts
describe('Prime factors Kata', () => {
  describe.each([
    [1, []],
    [2, [2]],
    [3, [3]],
    [4, [2, 2]],
    [5, [5]],
    [6, [2, 3]],
    [7, [7]],
    [8, [2, 2, 2]],
    [9, [3, 3]],
    [78, [2, 3, 13]],
    [48, [2, 2, 2, 2, 3]],
    [1369, [37, 37]],
  ])('factors of %i', (input: number, expected: number[]) => {
    it(`returns ${expected}`, () => {
      expect(primeFactorsOf(input)).toEqual(expected);
    });
  });
});
```

### Beispiel Clojure

````clojure
(defn prime-factors-of [n]
  (factors-starting-at 2 n))

(defn factors-starting-at
  ([f n] (factors-starting-at f n []))
  ([f n result]
    (cond
      (> f (Math/sqrt n)) (if (= n 1) [] (conj result n))
      (zero? (mod n f)) (recur f (/ n f) (conj result f))
      :else (recur (inc f) n result))))
(deftest prime-factors
  (fact (prime-factors-of 1) => [])
)
```
### Beispiel Rust iterativ
```rust
pub fn prime_factors(number : int) -> ~[int] {
    let mut number = number;
    let mut prime_numbers = ~[];
    let mut candidate = 2;
    while number > 1 {
        while number % candidate == 0 {
            prime_numbers.push(candidate);
            number /= candidate;
        }
        candidate += 1;
    }
    return prime_numbers;
}
```
### Beispiel Rust Recursive
```rust
fn prime_factors(num: i64) -> Vec<i64> {
    for i in 2..num {
        if num % i == 0 {
            return vec![i] + &prime_factors(num / i)
        }
        i += 1;
    }
    vec![num]
}

#[test]
fn prime_factors_of_48() {
    assert_eq!(prime_factors(48), [2, 2, 2, 2, 3]);
}
```


## Links & Literatur

- The Software Craftsman: Professionalism, Pragmatism, Pride, Sandro Mancuso
- The Clean Coder, Robert C. Martin
- The Pragmatic Programmer, Dave Thomas
- http://codekata.com/
- http://codekata.com/kata/codekata-intro/
- codewars.com
- thecodinggame.com
````
