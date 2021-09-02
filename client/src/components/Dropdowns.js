import React from 'react'

export default function Dropdowns(props) {
  const up = './images/triangle-up.png'
  const down = './images/triangle-down.png'
  let triangle1 = down
  let triangle2 = down
  const catOnClick = (e) => {
    props.changeCategory(e.target.innerText)
  }

  function CatDropdown() {
    return (
      <ul onClick={catOnClick}>
        <li>Posts</li>
        <li>Comments</li>
        <li>Users</li>
      </ul>
    )
  }
  return (
    <section className="dropdowns">
      <div className="dd1">
        <span>
          Search:
          {` ${props.category}`}
          <img src={`${triangle1}`} width="8px" style={{ marginLeft: '7px' }} />
        </span>
        {/* <span>
          <CatDropdown />
        </span> */}
      </div>

      <div className="dd2">
        <span>
          By: {` ${props.keyword}`}
          <img src={`${triangle2}`} width="8px" style={{ marginLeft: '7px' }} />
        </span>
      </div>
    </section>
  )
}
