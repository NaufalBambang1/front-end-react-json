import { Link } from "react-router-dom";

const ListPage = ({ data, status }) => {
  return (
    <div className="container">
      <div className="custom">
        <Link to="/">
          <button className="btn-custom">Back To List</button>
        </Link>
      </div>
      <section>
        <table border={1}>
          <tr>
            <th>id</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Transaction Date</th>
            <th>Created By</th>
            <th>Created On</th>
          </tr>

          {data.map((datas) => {
            const found = status.find((element) => {
              return element.id === datas.status;
            });

            return (
              <tr>
                <td>{datas.id}</td>
                <td>{datas.productID}</td>
                <td>{datas.productName}</td>
                <td>{datas.amount}</td>
                <td>{datas.customerName}</td>
                <td>{found.name}</td>
                <td>{datas.transactionDate}</td>
                <td>{datas.createBy}</td>
                <td>{datas.createOn}</td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
};
export default ListPage;
