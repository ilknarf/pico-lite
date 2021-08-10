import styled from "styled-components";

export const BuilderLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

interface SelectButtonProps {
  selected: boolean;
}

export const BoardContainer = styled.div`
  margin: 1rem;
`;

export const SelectButton = styled.div<SelectButtonProps>`
  color: ${(props) =>
    props.selected ? props.theme.primary : props.theme.secondary};
  background-color: ${(props) =>
    props.selected ? props.theme.secondary : props.theme.primary};
  padding: 1rem 0rem;
  transition: ease-in 0.2s;
  font-size: 1rem;
  text-align: center;
  width: 4rem;
  user-select: none;
  cursor: ${(props) => (props.selected ? "default" : "pointer")};
`;

export const SelectButtonContainer = styled.div`
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-color: ${(props) => props.theme.tertiary};
  border: solid;
`;
