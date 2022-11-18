import { useDispatch } from "react-redux";
import { addEmployee } from "./employeeSlice";
import { useState } from "react";
import { useGetAllDataQuery, useGetDataByIdQuery } from "../../services/employee";

const EmployeeCount = () => {
  const dispatch = useDispatch();
  const [getData, setData] = useState({
    empName: "",
    empAddress: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...getData, [name]: value });
  };
  const empResponse = useGetAllDataQuery();
  //const empByIdResponse = useGetDataByIdQuery(5);
  //console.log(empByIdResponse, "=====empByIdResponse======");

  return (
    <div className="text-center">
      <div className="card col-md-6">
        <h1>Employee Protal</h1>
        <div className="">
          <input
            type="text"
            name="empName"
            value={getData.empName}
            onChange={inputHandler}
          />
        </div>
        <br />
        <div className="">
          <textarea
            name="empAddress"
            value={getData.empAddress}
            onChange={inputHandler}
          ></textarea>
        </div>
        <div className="">
          <button
            onClick={() => {
              dispatch(addEmployee(getData));
            }}
          >
            Employee List
          </button>
        </div>
        <div>
          {empResponse.data.map((value, key) => (
            <div key={key}>
              <h3>{value.id} {value.title}</h3>
              <p>{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EmployeeCount;
