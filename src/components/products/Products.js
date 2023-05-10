import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import {
  addCartProduct,
  getCartCount,
  getSubTotal,
  calculateTax,
  getTotalAmount,
} from "../../features/api/useCartSlice";
import { useDispatch } from "react-redux";
import { Link} from 'react-router-dom';
import "./Products.css";
function Products() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  let productObj = {
    id: "",
    title: "",
    price: "",
    image: "",
  };
  const addToCart = (item) => {
    productObj = {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
    };
    dispatch(addCartProduct(productObj));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(calculateTax());
    dispatch(getTotalAmount());
  };
  const {
    data: products,
    isLoading: isProductLoading,
    isSuccess: isProductSuccess,
    isError: isProductError,
    error: prouctError,
  } = useGetProductsQuery({ refetchOnMountOrArgChange: true });
  useEffect(() => {}, [dispatch]);
  let getData;
  if (isProductLoading) {
    getData = (
      <div className="d-flex justify-content-center w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (isProductSuccess) {
    getData = products.map((item) => {
      return (
        <div className="col" key={item.id}>
          <div className="container">
            <div className="d-flex justify-content-center w-100">
              <div class="card-category-4">
                <div class="sp-card-2">
                  <div class="overlap">
                  <Link to={`/details/${item.id}`}>View Details</Link>
                     
                      
                  </div>
                  <div class="card-image">
                    <img src={item.image} alt="product" />
                  </div>

                  <div class="card-content">
                    <span class="card-title">
                      {item.title.substring(0, 15)}
                    </span>
                    <span class="price-start">${item.price}</span>
                    <div class="card-caption">
                      {item.description.substring(0, 50)}...
                    </div>

                    <button
                      onClick={() => {
                        addToCart(item);
                      }}
                      className="btn btn-outline-primary"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else if (isProductError) {
    getData = (
      <div className="alert alert-danger w-100 text-center" role="alert">
        {prouctError.status} {JSON.stringify(prouctError)}
      </div>
    );
  }
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
        {getData}
      </div>
    </div>
  );
}
export default Products;
