import { BoardAction, BoardActionType } from "components/builder-board";

export const createBoardAction = (location: number): BoardAction => ({
  type: BoardActionType.CellClick,
  location,
});