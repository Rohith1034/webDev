import React, { useState } from 'react';
import styles from './FormComponent.module.css'; // Import the CSS module
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    subCategory: '',
    price: '',
    quantity: '',
    colors: [],
    images: [],
    description: '',
  });

  const [secretCode, setSecretCode] = useState(''); // Separate state for secret code

  // Update the form data state when input fields change
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    // If the input is a file input (images), update the state with files
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'color' ? [value, ...formData.colors] : value,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the secret code is valid
    const secretCodes = ['abc123', 'def456', 'ghi789']; // Example secret codes
    if (!secretCodes.includes(secretCode)) {
      alert('Invalid secret code'); // Display an error message for an invalid code
      return;
    }

    // Create a FormData object
    const formDataToSend = new FormData();

    // Append form fields to FormData
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (key === 'images') {
          // Handle file inputs separately
          for (let i = 0; i < formData.images.length; i++) {
            formDataToSend.append('images', formData.images[i]);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/api/data', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Data is successfully sent');
      // You can handle the response here, e.g., display a success message
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g., display an error message
    }
  };

  // Define sub-category options based on the selected category
  const subCategoryOptions = {
    electronics: ['Sub-Category 1', 'Sub-Category 2', 'Sub-Category 3'],
    handloom: ['Butta', 'Broket', 'Jari Butta', 'Jari Broket'],
    powerloom: ['Butta', 'Broket', 'Skrit Butta', 'Skrit Broket','Jari Butta', 'Jari Broket'],
  };

  // Get the current sub-category options based on the selected category
  const currentSubCategoryOptions = subCategoryOptions[formData.category] || [];

  return (
    <div className={styles['form-container']}>
      <h1>Add Product</h1>
      <form>
        <div className={styles['form-group']}>
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            required
            onChange={handleInputChange}
            value={formData.category}
          >
            <option value="">Category</option>
            <option value="handloom">Handloom</option>
            <option value="powerloom">Powerloom</option>
          </select>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="subCategory">Sub-Category</label>
          <select
            id="subCategory"
            name="subCategory"
            required
            onChange={handleInputChange}
            value={formData.subCategory}
          >
            <option value="">Sub-Category</option>
            {currentSubCategoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            min="0.01"
            step="0.01"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="quantity">Number of Available</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="colors">Colors:</label>
          <input
            type="color"
            id="colors"
            name="colors"
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                colors: [...formData.colors, ''],
              })
            }
          >
            Add Color
          </button>
          {formData.colors.map((color, index) => (
            <div key={index}>
              <input
                type="color"
                name={`colors[${index}]`}
                value={color}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            required
            onChange={handleInputChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            required
            onChange={handleInputChange}
          />
        </div>
        {/* Add the "Secret Code" input field */}
        <div className={styles['form-group']}>
          <label htmlFor="secretCode">Secret Code</label>
          <input
            type="text"
            id="secretCode"
            name="secretCode"
            required
            onChange={(e) => setSecretCode(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
