import { useState, useId } from 'react'
import './Filters.css'

export function Filters ({ setFilters }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  function handleChangeMinPrice (event) {
    const newFilterPrice = event.target.value

    setMinPrice(newFilterPrice)
    setFilters(prevState => ({
      ...prevState,
      minPrice: newFilterPrice
    }))
  }

  function handleChangeCategory (event) {
    const newFilterCategory = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: newFilterCategory
    }))
  }

  return (
    <>
      <section className='filters'>

        <div>
          <label htmlFor={minPriceFilterId}>Prices from:</label>
          <input
            type='range'
            id={minPriceFilterId}
            min='0'
            max='1000'
            value={minPrice}
            onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId}>Category</label>
          <select
            id={categoryFilterId}
            onChange={handleChangeCategory}
          >
            <option value='all'>all</option>
            <option value='groceries'>groceries</option>
            <option value='furniture'>furniture</option>
            <option value='fragrances'>fragrances</option>
            <option value='beauty'>beauty</option>
          </select>
        </div>

      </section>
    </>
  )
}
