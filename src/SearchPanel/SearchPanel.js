import React, {Component} from 'react'
import styled from "styled-components";

const InputSearch = styled.input`
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

class SearchPanel extends Component {

    state = {
        visible: ''
    };

    onSearchChange = (e) => {
        const visible = e.target.value;
        this.setState({visible});
        this.props.onSearchChange(visible);
    };

    render() {

        return (
            <InputSearch
                type="text"
                placeholder='search'
                value = {this.state.visible}
                onChange = {(e) => this.onSearchChange(e)}/>
        )
    }
}

export default SearchPanel;