import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AddProduct.css';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const AddProduct = () => {
  const [imageUrl, setImageUrl] = useState(''); // Store the URL for the selected image
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', product.image); // Append the file with the correct key

    let responseData; // Define responseData
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData && responseData.success) {
      product.image = responseData.image_url;
      console.log(product)
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product Added") : alert("Failed");
      });
    }
  };

  const imageHandler = (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file

    // Create a URL for the selected image and store it in state
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
      setProductDetails({ ...productDetails, image: selectedFile }); // Store the selected file
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          {imageUrl ? (
            <img src={imageUrl} alt="Selected" className='addproduct-thumbnail-img' /> // Use resized class for image
          ) : (
            <FontAwesomeIcon icon={faCloudUpload} className='addproduct-thumbnail-img' /> // Use same class for icon
          )}
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;
