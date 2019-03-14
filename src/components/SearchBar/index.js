import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Wrapper = styled.section`
  width: 80%;
  margin: 10% auto;
  padding: 20px;
  border-radius: 8px;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  font-size: 1.1em;
  color: #ccc;
  border 1px solid palevioletred;
  outline: none;
`;

class SearchBar extends Component {
    async getData() {
        const res = await axios('https://api.github.com/users/felipefialho');
        return await res.data;
    }

    async getUserData(userName) {
        const res = await axios('https://api.github.com/users/' + userName.trim());
        return await res.data;
    }
    constructor(...args) {
        super(...args);
        this.state = {
            searchValue: ' ',
            data: null
        };
    }
    componentDidMount() {
        if (!this.state.data) {
            this.getData().then(data => {
                console.log(data);
                this.setState({data});
            }).catch(err => { 
                console.log(err);
            });
        }
    }

    handleChange = event => {
        this.setState({ searchValue: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const searchValue = this.state.searchValue;

        this.getUserData(searchValue);

    
      }
    

    render() {
        return (
            <Wrapper>
               <form onSubmit={this.handleSubmit}>
               <Title>
                    Digite o nome do usuário que deseja pesquisar
                </Title>

                  <Input type="text" name="search" value={this.state.searchValue} onChange={this.handleChange} />

               </form>
              
            </Wrapper>
            
        );
    }

}

export default SearchBar;