import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Navigation/Nav.jsx';
import Products from './Products/Products.jsx';
import Recommended from './Recommended/Recommended.jsx';
import Category from './Sidebar/Category/Category.jsx';
import Colors from './Sidebar/Colors/Colors.jsx';
import Price from './Sidebar/Price/Price.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import './index.css'

//Database
import products from './db/data.jsx'
import Card from './components/Card.jsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("")

  //------------ Input Filter ------------

  const handleInputChange = event => setQuery(event.target.value)

  const filteredItems = products.filter(product =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  //------------ Radio Filter ------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //------------ Buttons Filter ------------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // Filtering Input Items 
    if (query) {
      filteredProducts = filteredItems
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company,
        newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }
    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query)


  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  )
}

export default App
