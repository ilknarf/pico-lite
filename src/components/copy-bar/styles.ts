import styled from "styled-components";

export const CopyButton = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  padding: 1rem;
  margin: auto;
  text-align: center;
  
  border-left: solid;
  border-width: 4;
  border-color: ${(props) => props.theme.secondary};
  
  transition: ease-in 0.2s;
  
  font-size: 1.5rem;
  text-wrap: false;
  
  :hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;

export const CopyTextBar = styled.input.attrs({
  type: "text",
})`
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  flex: 1;
`;


export const CopyBarContainer = styled.div`
  margin: 1rem 0.5rem;
  display: flex;
  flex-direction: row;
  
  border: solid;
  border-radius: 1rem;
  border-color: ${(props) => props.theme.secondary}
  
  text-align: center;
  
  overflow: hidden;
  box-sizing: border-box;
`;
