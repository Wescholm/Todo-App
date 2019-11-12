import React, {Component} from 'react'
import TodoListItem from "../TodoListItem";
import {StyledListItem, StyledList} from "./TodoList.styled";

class TodoList extends Component {

    render() {
        let {data, onDoneClick, onImportantClick, onDelete} = this.props;
        if (data.length !== 0) {
            const elements = data.map((item) => {
                const {id, ...itemProps} = item;

                return (
                    <StyledListItem key={id}>
                        <TodoListItem
                            data = {itemProps}
                            {...itemProps}
                            id = {id}
                            onDelete = {onDelete}
                            onDoneClick = {onDoneClick}
                            onImportantClick = {onImportantClick}/>
                    </StyledListItem>
                );
            });

            return (
                <StyledList>
                    {elements}
                </StyledList>
            );
        } else {
            return (
                <StyledList>
                    <StyledListItem center>
                        No assignments
                    </StyledListItem>
                </StyledList>
            )
        }
    }
}

export default TodoList;