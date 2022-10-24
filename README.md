## Description
Rename object's keys from specified map.

## Installation
```shell
npm install recursive-remap 
```

## Usage #1

```javascript
const recursiveRemap  = require("recursive-remap");

const object = {
  a: {
    b: {
      c: 1,
      d: {
        e: 2
      }
    }
  }
}

const MAP = {
  a: "A",
  A: {
    b: "B",
    B: [
      { c: "C" },
      {
        d: {
          e: "E"
        }
      }
    ]
  }
}

const remappedObject = recursiveRemap(object, MAP)

console.dir(remappedObject, { depth: null })
```

Output:
```javascript
{
  A: { B: { d: { E: 2 }, C: 1 } }
}
```

## Usage #2

```javascript
const recursiveRemap  = require("recursive-remap");

const object = {
  a: {
    b: {
      c: 1,
      d: {
        e: 3,
        f: {
          g: 4
        }
      }
    },
    h: [
      {
        i: { m: 5 },
        j: { n: 6 },
        k: 7,
        l: 8
      },
    ]
  }
}

const MAP_1 = {
  a: "A",
  A: {
    b: "B",
    B: [
      { c: "C" },
      { d: "D" },
      {
        D: {
          e: "E",
          f: "F",
          F: {
            g: "G"
          }
        }
      },
    ],
    h: "H"
  },
}

const MAP_2 = {
  i: "I",
  j: "J",
  l: "L",
  I: { m: "M" },
  J: { n: "N" }
}

console.dir(object, { depth: null })

const remappedObject = recursiveRemap(object, MAP_1)
remappedObject.A.H = remappedObject.A.H.map((t) => recursiveRemap(t, MAP_2))

console.dir(remappedObject, { depth: null })
```

Output:
```javascript
{
  a: {
    b: { c: 1, d: { e: 3, f: { g: 4 } } },
    h: [ { i: { m: 5 }, j: { n: 6 }, k: 7, l: 8 } ]
  }
}
{
  A: {
    B: { C: 1, D: { E: 3, F: { G: 4 } } },
    H: [ { k: 7, I: { M: 5 }, J: { N: 6 }, L: 8 } ]
  }
}
```

