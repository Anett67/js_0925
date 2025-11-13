let size
let pattern
let pair
let motif

size = 7
pattern = 2

// --- Détermination de pair et motif ---
if (size % 2 === 0) {
  pair = 0
  if (pattern === 1) {
    motif = 0
  }
  if (pattern === 2) {
    motif = 1
  }
} else {
  pair = 1
  if (pattern === 1) {
    motif = 1
  }
  if (pattern === 2) {
    motif = 0
  }
}

// --- Génération du motif ---
for (let j = 1; j <= size; j++) {
  let line = ""

  for (let i = 1; i <= size; i++) {
    if (i > j && i + j < size + 1) {
      if (j % 2 === 1) {
        line += "⬛️"
      } else {
        line += "⬜️"
      }
    }
    else if (i < j && i + j > size + 1) {
      if (j % 2 === motif) {
        line += "⬛️"
      } else {
        line += "⬜️"
      }
    }
    else if (i < j + 1 && i + j < size + 2) {
      if (i % 2 === 1) {
        line += "⬛️"
      } else {
        line += "⬜️"
      }
    }
    else if (i > j - 1 && i + j > size && i > size / 2 + pair) {
      if (i % 2 === motif) {
        line += "⬛️"
      } else {
        line += "⬜️"
      }
    }
    else {
      line += "  "
    }
  }

  console.log(line)
}
