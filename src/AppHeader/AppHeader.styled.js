import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: white;
`;

const StyledSpan = styled.span`
  user-select: none;
  color: gray;
  font-size: 20px;
  color: white;
`;

const StyledLogo = styled.span`
  user-select: none;
  font-size: 40px;
  font-weight: bold;
`;

export {StyledHeader, StyledSpan, StyledLogo};