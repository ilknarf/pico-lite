import { NonogramSize } from "models/nonogram";

export const getNonogramSideLength = (size: NonogramSize): number => {
  switch(size) {
    case NonogramSize.Size5x5:
      return 5;
    case NonogramSize.Size10x10:
      return 10;
  }
}

export const getNonogramArrayLength = (size: NonogramSize): number => {
  const sideLength = getNonogramSideLength(size);

  return sideLength * sideLength;
}
