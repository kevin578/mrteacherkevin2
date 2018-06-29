import React, { Component } from 'react'
import styled from 'styled-components';


const Box = styled.input`

`

const Label = styled.p`
    display: inline-block;
    margin-left: 15px;
`


export default class Checkbox extends Component {

constructor(props) {
    super(props)
    
    this.state = {
         completed: false
    }
    }

handleInputChange = (event) => {
    const {checked} = event.target;
    this.setState({
        completed: checked
    })

}
    
  render() {
    return (
      <div>
        <Box type = 'checkbox' checked = {this.state.completed} onChange = {this.handleInputChange}/>
        <Label>{this.props.children}</Label>
      </div>
    )
  }
}
