import styled from "styled-components";

const StyledListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: .75rem 1.25rem;
    border-bottom: 1px solid rgba(0,0,0,.125);
    border-color: white;
    color: white;
    margin: 0 auto;
    width: ${props => props.center ? 'fit-content' : undefined};
    cursor: ${props => props.center ? 'auto' : 'pointer'};
    &:last-of-type {
      border-bottom: none;
    }
    &:hover {
      background: rgb(6,6,6);
      background: ${props => props.center ? 'none' : 
      'linear-gradient(120deg, rgba(131,58,180,1) 0%, rgba(191,42,166,1) 50%, rgba(255,24,19,1) 100%)'};
    }
`;

const StyledList = styled.ul`
  overflow-y: scroll;
&::-webkit-scrollbar {
  width: 8px;
  background: linear-gradient(180deg, rgba(255,121,0,0.5) 0%, rgba(253,45,45,0.5) 100%);
  border-left: 1px solid white;
  margin: 20px;
  border-radius: 0 3px 3px 0;
}
&::-webkit-scrollbar-thumb {
background: linear-gradient(180deg, rgba(254,0,255,0.5) 0%, rgba(0,255,190,0.5) 100%);
border-bottom: 1px solid white;
border-top: 1px solid white;
border-radius: 0 3px 3px 0;
border-left: 1px solid white;
}
  max-height: 440px;
  width: 100%;
  padding: 0;
  border-radius: 5px;
  border: 2px solid white;
`;


export {StyledList, StyledListItem};
