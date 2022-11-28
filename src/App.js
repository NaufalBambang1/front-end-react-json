import ListPage from "./component/list/list.page";
import { useEffect, useState } from "react";
import axios from "axios";
import AddUser from "./component/add/add.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditPage from "./component/edit/edit.page";
import DetailPage from "./component/detail/detail.page";

const App = () => {
  const [datas, setDatas] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/data`).then((res) => {
      setDatas(res.data);
    });
    axios.get(`http://localhost:3000/status`).then((res) => {
      setStatus(res.data);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ListPage data={datas} status={status} />}
        ></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/edit" element={<EditPage data={datas} />} />
        <Route
          path="/detail"
          element={<DetailPage data={datas} status={status} />}
        />
      </Routes>
    </Router>
  );
};
export default App;
