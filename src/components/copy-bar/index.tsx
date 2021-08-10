import * as React from "react";
import { useState } from "react";
import { CopyBarContainer, CopyButton, CopyTextBar } from "./styles";

export interface Props {
  val: string;
}

export const CopyBar = (props: Props) => {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(props.val);
  };

  const onMouseLeave = () => {
    setCopied(false);
  };

  return (
    <CopyBarContainer onClick={onClick} onMouseLeave={onMouseLeave}>
      <CopyTextBar value={props.val} readOnly />
      <CopyButton>{copied ? "Copied!" : "Share!"}</CopyButton>
    </CopyBarContainer>
  );
};
