import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DropDownList = styled.ul`
  right: ${props => props.isShow ? '0' : '-100%'};
  opacity: ${props => props.isShow ? '1' : '0'};
  visibility: ${props => props.isShow ? 'visible' : 'hidden'};
`
export default function MyDropDown(props) {
  const dropDownRef = React.createRef()
  const [state, setState] = useState({
    sortByitem: 'Sort By',
    isShow: false
  })
  const itemClick = (item) => {
    setState({
      sortByitem: item,
      isShow: false
    })
    props.onChange(item)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef && !dropDownRef.current.contains(event.target)) {
        setState({ ...state, isShow: false })
      }
    }
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [dropDownRef, state])
  return (
    <div className="drop-down-list">
      <p onClick={() => setState({ ...state, isShow: !state.isShow })}>{state.sortByitem}</p>
      <DropDownList className="sort-by-items" ref={dropDownRef} isShow={state.isShow}>
        {props.dropDownList.map((item, index) => {
          return <li key={index} onClick={() => itemClick(item)}>
            {item}
          </li>
        })}
      </DropDownList>
    </div>
  )
}