import React, {Component} from 'react';
import {StyledFormInputAdd, StyledButtonForm, StyledForm} from "./AddItem.styled";


export default class AddItem extends Component {

    state = {
        label: ''
    };

    onChange = (e) => {
        this.setState({
            label: e.target.value,
        });
    };

    clearList = () => {
        this.setState({
            label: '',
        });
    };


render() {
    let {onSubmit} = this.props;
        return (
            <StyledForm onSubmit={(e, label, func) => onSubmit(e, this.state.label, this.clearList)}>
                <StyledFormInputAdd
                    type="text" placeholder='enter new task'
                    value = {this.state.label}
                    onChange = {(e) => this.onChange(e)}/>
                <StyledButtonForm>Add</StyledButtonForm>
            </StyledForm>
        )
    }
}


