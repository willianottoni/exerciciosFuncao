function tipoTriangulo(a, b, c) {
  let tipo = ''
  if (a == b && b == c) {
    tipo = 'Triangulo Equilátero'
  } else {
    if (a == b || b == c) {
      tipo = 'Triangulo Isósceles'
    } else {
      if (a != b && b != c) {
        tipo = 'Triangulo Escaleno'
      }
    }
  }
  return console.log(tipo)
}

tipoTriangulo(4, 4, 4)
