import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { SolverBoard } from "components/solver-board";
import { getNonogramSize } from "util/nonogram";
import { stringToBoard } from "util/builder";

interface PathParams {
  size: string;
  data: string;
}

export const Solver = () => {
  const { size, data } = useParams<PathParams>();
  const [solved, setSolved] = useState(false);
  const nonogramSize = getNonogramSize(size);
  const solution = stringToBoard(data, nonogramSize);

  return (
    <>
      <SolverBoard solution={solution} onSolve={() => setSolved(true)}/>
      {solved && "SOLVED!"}
    </>
  );
};
