import React, { useState } from 'react'

export default function DropDown(props) {
  const dropDownRef = React.createRef()
  const [sortByitem, setSortByItem] = useState('Sort By')
  const showDropDowns = () => {
    dropDownRef.current.classList.toggle('sort-by-items-show')
  }
  const itemClick = (item) => {
    setSortByItem(item)
    props.onChange(item)
  }
  // useEffect(() => {
  //   document.addEventListener('click', ()=>handleDocumentClick())
  //   return () => {
  //     document.removeEventListener('click', ()=>handleDocumentClick())
  //   }
  // }, [])
  // const handleDocumentClick = (e) => {
  //   if (!dropDownRef.current) {
  //     console.log("111111");
  //     return
  //   }
  //   if(!dropDownRef.current.contains(e.target) && dropDownRef.current!==e.target){
  //     console.log('2222');
  //   }
  // }

  return (
    <div onClick={() => showDropDowns()} className="drop-down-list">
      <p>{sortByitem}</p>
      <ul className="sort-by-items" ref={dropDownRef}>
        {props.dropDownList.map((item, index) => {
          return <li key={index} onClick={() => itemClick(item)}>
            {item}
          </li>
        })}
      </ul>
    </div>
  )
}
