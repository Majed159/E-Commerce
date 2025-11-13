import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layouts/Layout";
import ProductImg from "../../assets/images/Mens/seven.jpg";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('cod');
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className=" py-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <h3 className="border-bottom pb-3">
              <strong>Billing Details</strong>
            </h3>
            <form action="">
              <div className="row pt-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows={3}
                    name=""
                    id=""
                    placeholder="Address"
                  ></textarea>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5">
            <h3 className="border-bottom pb-3">
              <strong>Items</strong>
            </h3>
            <table className="table">
              <tbody>
                <tr>
                  <td width={100}>
                    <img src={ProductImg} width={100} alt="" />
                  </td>

                  <td>
                    <h4>Product Titles</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span className="">$10</span>
                      <div className="mx-3">
                        <button className="btn btn-size ">s</button>
                      </div>
                      <div className="ps-5"> X 1</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width={100}>
                    <img src={ProductImg} width={100} alt="" />
                  </td>

                  <td>
                    <h4>Product Titles</h4>
                    <div className="d-flex align-items-center pt-3">
                      <span className="">$10</span>
                      <div className="mx-3">
                        <button className="btn btn-size ">m</button>
                      </div>
                      <div className="ps-5"> X 1</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="row ">
              <div className="col-md-3">
                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <div>Subtotal</div>
                  <div className="ms-auto">$30</div>
                </div>

                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <div>Shipping</div>
                  <div className="ms-auto">$5</div>
                </div>

                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <div>Tax</div>
                  <div className="ms-auto">$2</div>
                </div>

                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div className="ms-auto">$37</div>
                </div>
              </div>
            </div>
            <h3 className="border-bottom pt-4"><strong>Payment Method</strong></h3>
            <div className="mt-3">
              <input type="radio" onChange={handlePaymentMethod} id="stripe" checked={paymentMethod === 'stripe'} name="payment-method" value="stripe" />
              <label htmlFor="stripe" className="ps-2">Stripe</label>

              <input type="radio" onChange={handlePaymentMethod} id="cod" checked={paymentMethod === 'cod'} name="payment-method" value="cod" className="ms-3" />
              <label htmlFor="cod" className="ps-2">COD</label>
            </div>
            
            <div className="d-flex py-3">
              <button className="btn btn-primary  ">
                <Link
                  to="/checkout"
                  className="text-white text-decoration-none"
                >
                  Pay Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
