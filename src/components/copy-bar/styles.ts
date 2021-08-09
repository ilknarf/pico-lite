import styled from "styled-components";

export const CopyBarContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  
  cursor: pointer;
  
  border: solid;
  border-radius: 1rem;
  border-color: ${(props) => props.theme.secondary}
  
  text-align: center;
  
  overflow: hidden;
  box-sizing: border-box;
`;

export const CopyButton = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  padding: 1rem;
  margin: auto;
  text-align: center;

  border-left: solid;
  border-width: 4;
  border-color: ${(props) => props.theme.secondary};

  transition: ease-in 0.15s;

  font-size: 1.25rem;
  text-wrap: false;

  ${CopyBarContainer}:hover & {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
  }

  cursor: inherit;
`;

export const CopyTextBar = styled.input.attrs({
  type: "text",
})`
  color: ${(props) => props.theme.secondary};
  padding: 1rem;
  font-size: 1rem;
  border: none;
  flex: 1;
  cursor: inherit;

  &:focus {
    outline: none;
  }
`;
