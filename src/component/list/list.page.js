import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListPage = ({ data, status }) => {
  const [api, setAPI] = useState([]);
  const setData = (id) => {
    localStorage.setItem("ID", id);
  };

  const getApi = () => {
    axios.get(`http://localhost:3000/data`).then((res) => {
      setAPI(res.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`).then(() => {
      getApi();
    });
  };
  return (
    <div className="container">
      <div className="custom">
        <Link to="/add">
          <button className="btn-custom">Add New</button>
        </Link>
        <Link to="/detail">
          <button className="btn-custom">Detail</button>
        </Link>
      </div>
      <section>
        <table border={1}>
          <tr>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Transaction Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {data.map((datas) => {
            const found = status.find((element) => {
              return element.id === datas.status;
            });

            return (
              <tr>
                <td>{datas.productName}</td>
                <td>{datas.amount}</td>
                <td>{datas.customerName}</td>
                <td>{found.name}</td>
                <td>{datas.transactionDate}</td>
                <td>
                  <Link to="/edit">
                    <button className="btn-custom" onClick={() => setData(datas.id)}>
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button className="btn-custom" onClick={() => onDelete(datas.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
};
export default ListPage;
