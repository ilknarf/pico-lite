import * as React from "react";
import { CopyBarContainer, CopyButton, CopyTextBar} from "./styles";

export interface Props {
  val: string;
}

export const CopyBar = (props: Props) => {
  const onClick = () => {
    navigator.clipboard.writeText(props.val);
  };

  return (
    <CopyBarContainer>
      <CopyTextBar value={props.val} />
      <CopyButton onClick={onClick}>
        Share
      </CopyButton>
    </CopyBarContainer>
  )
};
