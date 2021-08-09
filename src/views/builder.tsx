import * as React from "react";
import { NonogramSize } from "models/nonogram";
import { BuilderBoard } from "components/builder-board";

export const Builder = () => (
  <div>
    <BuilderBoard size={NonogramSize.Size5x5} />
  </div>
);
