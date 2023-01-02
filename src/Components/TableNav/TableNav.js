 import Calendar from "./images/calender.png"
 import downArrow from "./images/down-arrow.png"
 import filter from "./images/filter.png"
 import verticleLine from "./images/vertical-line.png"
import "./TableNav.css"

const TableNav = () => {
  return (
    <>
      <div className='table-nav-container'>
        <div className='left-nav'>
          <div className='nav-items'>
            <img id="icon" src={Calendar} alt="" style={{"height":"15px"}} />
            <span>Select Date</span>
            <img src={downArrow} alt="" style={{"height":"15px"}} />
          </div>
          <div className='nav-items'>
            <img src={filter} alt="" style={{"height":"15px"}} />
            <span>Filter</span>
            <img src={verticleLine} alt="" style={{"height":"15px"}}/>
            <img src={downArrow} alt="" style={{"height":"15px"}} />
          </div>
        </div>
        </div>
    </>
  )
}

export default TableNav