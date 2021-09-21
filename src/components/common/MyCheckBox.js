import React, { Component } from 'react'
import styled from 'styled-components'

const CheckBox = styled.div`
  color: rgb(112, 109, 109);
  font-size: 0.98rem;
  text-transform: none;
  & > div {
    margin-bottom: 0.7rem;
  }
  & label {
    display: block;
    margin-bottom: .4rem;
  }
`

export default class MyCheckBox extends Component {

  render() {
    const { checkBoxName, checkBoxItems } = this.props
    const list = checkBoxItems.map(({ name, value }, index) => {
      return (
        <label key={index}>
          <input type="checkbox" name={name} value={value} />&nbsp;{name}
        </label>
      )
    })
    return (
      <CheckBox>
        <div>{checkBoxName}</div>
        {list}
      </CheckBox>
    )
  }
}

