const recursiveRemap = require("..")

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

