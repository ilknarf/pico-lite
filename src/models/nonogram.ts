export enum CellState {
  Filled,
  Empty,
  Question,
  None,
}

export enum NonogramSize {
  Size5x5,
  Size10x10,
}

export interface Nonogram {
  readonly size: NonogramSize;
  readonly data: Array<CellState>;
}
