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
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <CopyBarContainer onClick={onClick}>
      <CopyTextBar value={props.val} readOnly />
      <CopyButton>{copied ? "Copied!" : "Share!"}</CopyButton>
    </CopyBarContainer>
  );
};
