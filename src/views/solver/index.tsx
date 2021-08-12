import * as React from "react";
import { useParams } from "react-router";
import { SolverBoard } from "components/solver-board";
import { getNonogramSize } from "util/nonogram";
import { stringToBoard } from "util/builder";
import { SolverLayout } from "./styles";
import { TextContainer } from "components/text-container/styles";

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
      <TextContainer>
        <p>Left-click to mark as filled, right-click to mark as empty</p>
      </TextContainer>
      <SolverBoard solution={solution} />
    </SolverLayout>
  );
};
