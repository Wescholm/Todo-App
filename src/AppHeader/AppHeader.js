import React from 'react';
import {StyledHeader, StyledSpan, StyledLogo} from "./AppHeader.styled";

const AppHeader = ({data}) => {

    const done = data.filter((value) => value.done).length;
    const todo = data.length - done;

    return (
        <StyledHeader>
            <StyledLogo>Todo List</StyledLogo>
            <StyledSpan>{todo} more todo, {done} done</StyledSpan>
        </StyledHeader>
    )
};

export default AppHeader;