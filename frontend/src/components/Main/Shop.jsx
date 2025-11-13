import React from "react";
import Layout from "../Layouts/Layout";
import Hero from "./Hero";
import ProductImg from "../../assets/images/eight.jpg";
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <Layout>
        <div className="container py-5">
          <nav aria-label="breadcrumb" className="breadcrumb-nav py-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/shop">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Product
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow border-0 mb-4">
                <div className="card-body p-4">
                  <h3 className="mb-4">Category</h3>
                  <ul className="ps-0">
                    <li className="mb-2">
                      <input type="checkbox" id="kids" />
                      <label htmlFor="kids" className="ps-2">
                        Kids
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="Woman" />
                      <label htmlFor="Woman" className="ps-2">
                        Woman
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="Men" />
                      <label htmlFor="Mens" className="ps-2">
                        Mens
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card shadow border-0 mb-4">
                <div className="card-body p-4">
                  <h3 className="mb-4">Brands</h3>
                  <ul className="ps-0">
                    <li className="mb-2">
                      <input type="checkbox" id="kids" />
                      <label htmlFor="kids" className="ps-2">
                        Puma
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="Woman" />
                      <label htmlFor="Woman" className="ps-2">
                        Adidas
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="Men" />
                      <label htmlFor="Mens" className="ps-2">
                        Nike
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="Men" />
                      <label htmlFor="Mens" className="ps-2">
                        Flaying Machine
                      </label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" id="Men" />
                      <label htmlFor="Mens" className="ps-2">
                        Flaying Eagle
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row pb-5">
                <div className="col-md-4 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <Link to="/product" >
                        Red Check Shirt For Men
                      </Link>
                      <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                    </div>
                    
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <a href=" " className="text-decoration-none">
                        Red Check Shirt For Men
                      </a>
                    </div>
                    <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <a href=" " className="text-decoration-none">
                        Red Check Shirt For Men
                      </a>
                    </div>
                    <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6 ">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <a href=" " className="text-decoration-none">
                        Red Check Shirt For Men
                      </a>
                    </div>
                    <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <a href=" " className="text-decoration-none">
                        Red Check Shirt For Men
                      </a>
                    </div>
                    <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <a href=" " className="text-decoration-none">
                        Red Check Shirt For Men
                      </a>
                    </div>
                    <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <a href=" " className="text-decoration-none">
                        Red Check Shirt For Men
                      </a>
                    </div>
                    <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="product card border-0">
                    <div className="card-img">
                      <Link to="/product">
                      <img src={ProductImg} alt="" className="w-100" />
                      </Link>
                    </div>
                    <div className="card-body pt-3">
                      <a href=" " className="text-decoration-none">
                        Red Check Shirt For Men
                      </a>
                    </div>
                    <div className="price">
                      $50.00{" "}
                      <span className="text-decoration-line-through text-line-through-custom">
                        $69.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Shop;
