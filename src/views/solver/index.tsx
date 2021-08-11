import * as React from "react";
import { useParams } from "react-router";
import { SolverBoard } from "components/solver-board";
import { getNonogramSize } from "util/nonogram";
import { stringToBoard } from "util/builder";
import { SolverLayout } from "./styles";

interface PathParams {
  size: string;
  data: string;
}

export const Solver = () => {
  const { size, data } = useParams<PathParams>();
  const nonogramSize = getNonogramSize(size);
  const solution = stringToBoard(data, nonogramSize);

  return (
    <SolverLayout>
      <SolverBoard solution={solution} />
    </SolverLayout>
  );
};
