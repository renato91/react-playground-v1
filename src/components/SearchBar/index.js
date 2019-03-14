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
    constructor(...args) {
        super(...args);
        this.state = {data: null};
    }
    componentDidMount() {
        if (!this.state.data) {
            this.getData().then(data => {
                console.log(data);
                this.setState(data);
            }).catch(err => { 
                console.log(err);
            });
        }
    }

    render() {
        return (
            <Wrapper>
               <form>
               <Title>
                    Digite o nome do usuário que deseja pesquisar
                </Title>

                  <Input />
                {this.state.data}
               </form>
              
            </Wrapper>
            
        );
    }

}

export default SearchBar;