import styled from "styled-components";

const StyledFormInputAdd = styled.input`
  width: 100%;
  height: 25px;
  margin-right: 10px;
  border-radius: 5px;
  padding: 6px;
  font-size: 15px;
  outline: none;
  border: 1px solid white;
  background: none;
  color: white;
  &::placeholder {
  color: white;
  }
`;

const StyledButtonForm = styled.button`
  display: inline-block;
  padding: 5px 15px;
  margin-left: 5px;
  font-family:'Segoe UI','Roboto',sans-serif;
  color: white;
  background: none;
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 15px;
 
  &:hover {
    border: 1px solid #ccc912;
    transition-duration: .3s;
  }
`;

const StyledForm = styled.form`
  display: flex;
`;

export {StyledFormInputAdd, StyledButtonForm, StyledForm};