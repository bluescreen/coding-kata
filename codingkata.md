# Coding Kata

## Was ist eine Kata?

https://youtu.be/c_vKs2O7WRQ?t=516

### 形 japanisch Kata = Form

- Festlegte Abfolge von Basis Bewegungen
- Sich wiederholende Übungen
- Erfordert Disziplin zur Perfektionierung
- Das Ziel ist die Übung bzw. der Lösungsweg nicht die Lösung selbst


## Was wollen wir erreichen?

https://youtu.be/IN5H99aHd5A?t=108

- Einsatz in stressigen Situation ohne Nachdenken
- Stressmanagement durch Disziplin
- Spass mit Code zu experimentieren


## Was kann ich mit Coding Kata lernen?

- Extreme Programming: TDD + Simple Design + Pair Programming + Refactoring
- Design Pattern & Techniken
- Code optimieren, Refactoring
- Neue Technologien, Language Features
- Unbekannte Programmiersprachen (bekanntes Problem in neuer Sprache lösen)
- Unbekannte Paradigmen Functional (z.B. Clojure)
- Alternative IDEs und deren Features , Hotkeys  



## Anwendung in Software

- Ziel in inkrementellen Schritten zur Lösung
- Nicht das goldene Ziel versuchen direkt zu erreichen
- Durch Extreme Programing / TDD
- Wichtig Tests selber schreiben
- Timeboxed ca 30-60 min
- Mehr Challenge durch Handycaps (z.B. keine If statements erlaubt, nur Objekt orientiert, unbekannte IDE, funktional)

## Was wird benötigt?

- Funktionsfähige Unit Testumgebung für Schnelles Feedback
- Festgelegte Zeit (ca 30 min) außerhalb der Arbeitszeit (außerhalb der Stresssituation)
- Motivation & Bereitschaft zu lernen
- Bereitschaft Übungen zu wiederholen
- Mentor oder Referenz Material

## Klassische Beispiele

- Fizz Buzz
- Bowling Game
- Prime Factors
- Game of Life

## Live coding Prime Factors Kata

  

### Step 1 Null Case
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    return result;
}
```

### Step 2 Split Flow Transformation
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    if(n > 1){
	    result.push(2);
    }
    return result;
}
```

### Step 3 Content to Variable Transformation
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    if(n > 1){
	    result.push(n);
    }
    return result;
}
```

### Step 4 Split Flow
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    if(n > 1){
        if(n % 2 === 0){
            result.push(2);
            n /= 2;
        }     
    }
    if(n > 1){
        result.push(n);
    }
    return result;
}
```

### Step 5 If to While
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    if(n > 1){
        while(n % 2 === 0){
            result.push(2);
            n /= 2;
        }
    }
    if(n > 1){
        result.push(n);
    }
    return result;
}
```

### Step 6 Refactor to For
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    if(n > 1){
        for(; n % 2 === 0; n /= 2){
            result.push(2);   
        }
    }
    if(n > 1){
        result.push(n);
    }
    return result;
}
```

### Step 7 Constant to Variable
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    let divisor = 2
    while(n > 1){
        for(; n % 2 === 0; n /= divisor){
            result.push(divisor);   
        }
        divisor++;    
    }
    if(n > 1){
        result.push(n);
    }
    return result;
}
```

### Step 8 Result Refactor to for
```
const primeFactorsOf = (n: number): number[] => {
    const result = [];
    
    for(let divisor = 2; n > 1; divisor++){
        for(; n % 2 === 0; n /= divisor){
            result.push(divisor);   
        }
    }
    return result;
}
```


## Links & Literatur

- The Clean Craftsman Sandro Manduro
- Clean Code, Robert C. Martin
- The Pragmatic Prgrammer, Dave Thomass
- http://codekata.com/
- http://codekata.com/kata/codekata-intro/
- Codewars
- Codinggame