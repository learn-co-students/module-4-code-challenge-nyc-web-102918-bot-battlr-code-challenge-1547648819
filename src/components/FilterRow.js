import React from "react"

const FilterRow = (props) => {
  const handleChange = (e) => {
    props.filterBots(e.target.value)
  }

  return (
    <div className="filter-row">
      <h2>Bot Class Filter</h2>
      <select onChange={handleChange}>
        <option value="all">All</option>
        <option value="support">Support</option>
        <option value="assault">Assault</option>
        <option value="defender">Defender</option>
      </select>
    </div>
  )
}

export default FilterRow
