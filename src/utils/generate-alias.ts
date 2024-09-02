import { uniqueNamesGenerator, Config } from 'unique-names-generator';

const palabras1 = [
  'suerte',
  'estrella',
  'luz',
  'roca',
  'mar',
  'piedra',
  'nieve',
  'lluvia',
  'trueno',
  'montaña',
];

const palabras2 = [
  'cadena',
  'llama',
  'nube',
  'río',
  'sol',
  'viento',
  'tormenta',
  'arena',
  'camino',
  'puente',
];

const palabras3 = [
  'rana',
  'bosque',
  'tierra',
  'fuego',
  'cielo',
  'hoja',
  'flor',
  'llama',
  'rayo',
  'montaña',
];
const customConfig: Config = {
  dictionaries: [palabras1, palabras2, palabras3],
  separator: '.',
  length: 3,
};

export function generateAlias(): string {
  return uniqueNamesGenerator(customConfig);
}

// Ejemplo de uso
// const alias = generateAlias();
// console.log(alias);
