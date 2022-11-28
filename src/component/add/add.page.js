import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddPage = () => {
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [status, setStatus] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [createBy, setCreateBy] = useState("");
  const [createOn, setCreateOn] = useState("");

  const sendDataAPI = () => {
    axios.post(`http://localhost:3000/data`, {
      productID,
      productName,
      amount,
      customerName,
      status,
      transactionDate,
      createBy,
      createOn,
    });
  };

  return (
    <div className="container">
      <h1>Add New Data</h1>
      <form>
        <div className="form-item">
          <label>Product ID: </label>
          <input type="text" onChange={(e) => setProductID(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Product Name: </label>
          <input type="text" onChange={(e) => setProductName(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Amount: </label>
          <input type="text" onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Costumer Name: </label>
          <input type="text" onChange={(e) => setCustomerName(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Status: </label>
          <input onChange={(e) => setStatus(Number(e.target.value))}></input>
        </div>
        <div className="form-item">
          <label>transaction Date: </label>
          <input type="text" onChange={(e) => setTransactionDate(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Created By: </label>
          <input type="text" onChange={(e) => setCreateBy(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Created On: </label>
          <input type="text" onChange={(e) => setCreateOn(e.target.value)}></input>
        </div>
        <button className="btn-save" type="submit" onClick={sendDataAPI}>
          Save
        </button>
        <div className="custom">
          <Link to="/">
            <button className="btn-custom">Back To List</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
