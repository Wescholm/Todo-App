import React, {Component} from 'react';
import {StyledButton, StyledListItemSpan} from "./TodoListItem.styled";


export default class TodoListItem extends Component {


    render() {

        const {important, done, label, id, onDelete, onImportantClick, onDoneClick} = this.props;
            return (
                <React.Fragment>
                    <StyledListItemSpan
                        onClick={() => onDoneClick(id)}
                        important = {important}
                        done = {done}>
                        {label}
                    </StyledListItemSpan>

                    <StyledButton trash onClick = {() => onDelete(id)}>
                        <i className="far fa-trash-alt"> </i>
                    </StyledButton>

                    <StyledButton onClick = {() => onImportantClick(id)}>
                        <i className="fas fa-exclamation"> </i>
                    </StyledButton>
                </React.Fragment>
            );

        }
}

