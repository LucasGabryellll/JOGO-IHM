interface MapType {
  pos: number;
  typePos: TypePos
}

export enum TypePos {
  'initial',
  'normal',
  'quiz',
  'bonus',
  'final'
}

export const posMap: MapType[] = [
  { pos: 0, typePos: TypePos.initial },
  { pos: 1, typePos: TypePos.normal },
  { pos: 2, typePos: TypePos.normal },
  { pos: 3, typePos: TypePos.normal },
  { pos: 4, typePos: TypePos.normal },
  { pos: 5, typePos: TypePos.quiz },
  { pos: 6, typePos: TypePos.normal },
  { pos: 7, typePos: TypePos.bonus },
  { pos: 8, typePos: TypePos.quiz },
  { pos: 9, typePos: TypePos.normal },
  { pos: 10, typePos: TypePos.bonus },
  { pos: 11, typePos: TypePos.bonus },
  { pos: 12, typePos: TypePos.normal },
  { pos: 13, typePos: TypePos.quiz },
  { pos: 14, typePos: TypePos.normal },
  { pos: 15, typePos: TypePos.normal },
  { pos: 16, typePos: TypePos.bonus },
  { pos: 17, typePos: TypePos.normal },
  { pos: 18, typePos: TypePos.quiz },
  { pos: 19, typePos: TypePos.normal },
  { pos: 20, typePos: TypePos.normal },
  { pos: 21, typePos: TypePos.quiz },
  { pos: 22, typePos: TypePos.normal },
  { pos: 23, typePos: TypePos.bonus },
  { pos: 24, typePos: TypePos.normal },
  { pos: 25, typePos: TypePos.normal },
  { pos: 26, typePos: TypePos.quiz },
  { pos: 27, typePos: TypePos.normal },
  { pos: 28, typePos: TypePos.bonus },
  { pos: 29, typePos: TypePos.quiz },
  { pos: 30, typePos: TypePos.normal },
  { pos: 31, typePos: TypePos.bonus },
  { pos: 32, typePos: TypePos.normal },
  { pos: 33, typePos: TypePos.quiz },
  { pos: 34, typePos: TypePos.normal },
  { pos: 35, typePos: TypePos.normal },
  { pos: 36, typePos: TypePos.normal },
  { pos: 37, typePos: TypePos.final },
];