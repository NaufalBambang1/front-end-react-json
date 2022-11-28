import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditPage = () => {
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [status, setStatus] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [createBy, setCreateBy] = useState("");
  const [createOn, setCreateOn] = useState("");
  const [ID, setID] = useState(null);

  const sendDataAPI = () => {
    axios.put(`http://localhost:3000/data/${ID}`, {
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
  useEffect(() => {
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div className="container">
      <h1>Edit Data</h1>
      <form>
        <div className="form-item">
          <label>Product ID: </label>
          <input value={productID} onChange={(e) => setProductID(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Product Name: </label>
          <input value={productName} onChange={(e) => setProductName(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Amount: </label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Costumer Name: </label>
          <input value={customerName} onChange={(e) => setCustomerName(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Status: </label>
          <input onChange={(e) => setStatus(Number(e.target.value))}></input>
        </div>
        <div className="form-item">
          <label>transaction Date: </label>
          <input value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Created By: </label>
          <input value={createBy} onChange={(e) => setCreateBy(e.target.value)}></input>
        </div>
        <div className="form-item">
          <label>Created On: </label>
          <input value={createOn} onChange={(e) => setCreateOn(e.target.value)}></input>
        </div>
        <button className="btn-save" type="submit" onClick={sendDataAPI}>
          Save Edit
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
export default EditPage;
