import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
const Main = () => {
    return (
        <div className="form-wrapper">
            <div className="add-me"></div>
           <ProductForm/>
        </div>
    )
}
export default Main;