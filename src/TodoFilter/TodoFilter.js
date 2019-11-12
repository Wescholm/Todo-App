import React, {Component} from 'react'
import styled from "styled-components";

const StyledButtonFilters = styled.button`
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
  
  &:first-of-type {
    background: ${props => props.filter === 'all' ?
    'linear-gradient(180deg, rgba(255,0,0,0.3) 0%, rgba(116,2,2,0.3) 100%)' : undefined}
  }
  
  &:nth-child(odd) {
    background: ${props => props.filter === 'active' ?  
    'linear-gradient(180deg, rgba(255,0,0,0.3) 0%, rgba(116,2,2,0.3) 100%)' : undefined}
  }
  
  &:last-of-type {
     background: ${props => props.filter === 'done' ?
    'linear-gradient(180deg, rgba(255,0,0,0.3) 0%, rgba(116,2,2,0.3) 100%)' : undefined}
  }
  
  &:hover {
    border: 1px solid #ccc912;
    transition-duration: .3s;
  }
`;

class TodoFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            return (
                <StyledButtonFilters
                    filter = {filter}
                    key = {name}
                    onClick = {() => onFilterChange(name)}>
                    {label}
                </StyledButtonFilters>
            )
        });

        return (
            <React.Fragment>
                {buttons}
            </React.Fragment>
        )
    }
}

export default TodoFilter;