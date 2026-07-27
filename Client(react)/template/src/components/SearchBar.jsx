import React from 'react'
import "../css/searchbar.css"

const SearchBar = ({onSearch,onFilter}) => {
  return (
    <div className='search-bar'>
        <input type="text"  placeholder='search by title or company...' onChange={(e)=>onSearch(e.target.value)}/>
        <input type="text" placeholder='search by Role...' onChange={(e)=>onSearch(e.target.value)} />
        <select onChange={(e)=>onFilter(e.target.value)}>All Type
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Remote">Remote</option>
            
            <option value="Part-time">Part-time</option>
        </select>
        
    </div>
  )
}



export default SearchBar