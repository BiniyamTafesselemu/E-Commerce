import { useEffect, useState } from 'react';  
import './ListProduct.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faRemove } from '@fortawesome/free-solid-svg-icons';  

const ListProduct = () => {  
  const [allproducts, setAllProducts] = useState([]);  

  const fetchInfo = async () => {  
    await fetch('http://localhost:4000/allproducts')  
      .then((res) => res.json())  
      .then((data) => { setAllProducts(data); });  
  }  

  useEffect(() => {  
    fetchInfo();  
  }, []);  

  const remove_product = async (id) => {  
    await fetch('http://localhost:4000/removeproduct', {  
      method: 'POST',  
      headers: {  
        Accept: 'application/json',  
        'Content-Type': 'application/json',  
      },  
      body: JSON.stringify({ id: id })  
    })  
    .then((res) => res.json())  
    .then(() => {  
      fetchInfo();  
    })  
    .catch((error) => console.error('Error:', error));  
  }  

  return (  
    <div className='list-product'>  
      <h1>All Products List</h1>  
      <div className="table-container" style={{ overflowY: 'auto', maxHeight: '500px', width: '100%' }}>  
        <table className="listproduct-table">  
          <thead>  
            <tr>  
              <th>Products</th>  
              <th>Title</th>  
              <th>Old Price</th>  
              <th>New Price</th>  
              <th>Category</th>  
              <th>Remove</th>  
            </tr>  
          </thead>  
          <tbody>  
            {allproducts.map((product, index) => (  
              <tr key={index}>  
                <td>  
                  <img src={product.image} alt="" className="listproduct-product-icon" />  
                </td>  
                <td>{product.name}</td>  
                <td>{product.old_price}</td>  
                <td>{product.new_price}</td>  
                <td>{product.category}</td>  
                <td className='listproduct-remove-icon'>  
                  <FontAwesomeIcon onClick={() => { remove_product(product.id) }} icon={faRemove} />  
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  
    </div>  
  );  
}  

export default ListProduct;