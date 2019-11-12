import styled from "styled-components";

const StyledListItemSpan = styled.span`
          text-decoration: ${props => props.done ? 'line-through' : undefined};
          color: ${props => props.done ? 'gray' : undefined};
          display: flex;
          padding-right: 19px;
          width: 100%;
          word-break: break-word;
          align-items: center;
          font-weight: ${props => props.important ? 'bold' : undefined};
          color: ${props => props.important ? '#becc5a' : undefined};
          font-size: ${props => props.important ? '16px' : undefined};
`;

const StyledButton = styled.button`
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  margin-right: 7px;
  width: 30px;
  height: 30px;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 11px;
  &:first-of-type {
    margin-left: auto;
  }
  &:hover {
    transition-duration: .3s;
    background: ${props => props.trash ?
    'linear-gradient(120deg, rgba(20,218,87,0.55) 0%, rgba(42,191,188,0.55) 49%, rgba(4,226,95,0.55) 100%)' :
    'linear-gradient(120deg, rgba(247,255,0,0.55) 0%, rgba(210,135,17,0.55) 49%, rgba(255,250,3,0.55) 100%)'};
    border: ${props => props.trash ? '1px solid green;' : '1px solid yellow'};
  }
`;

export {StyledButton, StyledListItemSpan}