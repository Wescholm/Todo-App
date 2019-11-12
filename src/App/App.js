import React, {Component} from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoFilter from "../TodoFilter";
import TodoList from "../TodoList";
import {StyledApp, StyledSearchBar} from "./App.styled";
import AddItem from "../AddItem";

class App extends Component {

    state = {

        todoData: [
            {label: 'Learn React', important: false, done: false, id: 1},
            {label: 'Drink Coffee', important: false, done: false, id: 2},
            {label: 'Feed Cat', important: false, done: false, id: 3},
        ],

        visible: '',
        filter: 'all'
    };

    onDelete = (id) => {
        this.setState((state) => {
            let shallowCopy = [...state.todoData];
            let result = shallowCopy.filter(el => el.id !==id);
            return {
                todoData: result,
            }
        })
    };

    onImportantClick = (id) => {
        this.setState(({todoData}) => {
            let shallowCopy = [...todoData];
            const index = todoData.findIndex(el => el.id === id);
            shallowCopy[index] = {
                ...todoData[index],
                important: !todoData[index].important
            };
            return {
                todoData: shallowCopy
            }
        })
    };

    onDoneClick = (id) => {
        this.setState(({todoData}) => {
            let shallowCopy = [...todoData];
            const index = todoData.findIndex(el => el.id === id);
            shallowCopy[index] = {
                ...todoData[index],
                done: !todoData[index].done
            };
            return {
                todoData: shallowCopy
            }
        })
    };

    onSubmit = (e, label, func) => {
        e.preventDefault();
        let check = label;
        check = check.replace(/\s/g, '');
        func();
        if (check.length !== 0) {
            const newLabel = this.newTodoItem(label);
            this.setState(({todoData}) => {

                const newData = [
                    ...todoData,
                    newLabel,
                ];

                return {
                    todoData: newData,
                }
            });
        }
    };

    newTodoItem (label) {
        return {
            label: label,
            important: false,
            id: Math.trunc(Math.random()*10000),
        }
    }

    search (todoData, visible) {
        if (visible.length === 0) {
            return todoData;
        }
        return todoData.filter((item) => {
            return item.label.indexOf(visible) > -1
        });
    }

    onSearchChange = (visible) => {
        this.setState({visible});
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    filter (todoData, filter) {
        switch (filter) {
            case 'all':
                return todoData;
            case 'active':
                return todoData.filter((item) => !item.done);
            case 'done':
                return todoData.filter((item) => item.done);
            default:
                return todoData;
        }
    }


    render() {
        const {todoData, visible, filter} = this.state;
        const visibleItems  = this.filter(this.search(todoData, visible), filter);
        return (
            <StyledApp>
                <AppHeader
                data = {this.state.todoData}/>
                <StyledSearchBar>
                    <SearchPanel onSearchChange = {this.onSearchChange}/>
                    <TodoFilter
                        onFilterChange = {this.onFilterChange}
                        filter = {filter}/>
                </StyledSearchBar>
                <TodoList
                    data = {visibleItems}
                    onDoneClick = {(id) => this.onDoneClick(id)}
                    onImportantClick = {(id) => this.onImportantClick(id)}
                    onDelete = {(id) => this.onDelete(id)}/>
                    <AddItem onSubmit = {this.onSubmit}/>
            </StyledApp>
        )
    }
}

export default App;

