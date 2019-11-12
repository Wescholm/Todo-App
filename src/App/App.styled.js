import styled from "styled-components";

const StyledApp = styled.div`
  transition: .3s;
  width: 580px;
  margin: 0 auto;
  border-radius: 15px;
  padding: 20px;
  font-family: "Arial", serif;
  border: 3px solid  #becc5a;
  background: rgb(6,6,6);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(120deg, rgba(131,58,180,1) 0%, rgba(191,42,103,1) 50%, rgba(255,24,19,1) 100%);
  &:hover {
    transition: .3s;
    border-color: #cc384e;
  }
  
`;

const StyledSearchBar = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 10px;
`;

export {StyledApp, StyledSearchBar};