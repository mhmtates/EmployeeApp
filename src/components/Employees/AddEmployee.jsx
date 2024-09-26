import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddEmployee = (props) => {

  const [employeeFullName, setEmployeeFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [company,setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [position,setPosition] = useState("");
  const [salary, setSalary] = useState("");
 

  const minSalary = 17002;

  const employeeFullNameChangeHandler = (e) => {
    setEmployeeFullName(e.target.value);
  }
  const birthDateChangeHandler = (e) => {
    setBirthDate(e.target.value);
  }
  const companyChangeHandler = (e) => {
    setCompany(e.target.value);
  }
  const departmentChangeHandler = (e) => {
    setDepartment(e.target.value);
  }
  const positionChangeHandler = (e) => {
    setPosition(e.target.value);
  }
  const salaryChangeHandler = (e) => {
    setSalary(e.target.value);
  }
 
  const addEmployeeHandler = (e) => {
    e.preventDefault();
    if (employeeFullName.trim().length === 0 || salary.trim().length === 0) {
      return;
    }

    if (+salary <= minSalary) {
      return;
    }
    setEmployeeFullName("");
    setSalary("");
    props.setEmployees((prevState) => [
      {
        id: Math.floor(Math.random() * 100000),
        fullName: employeeFullName,
        birthDate: birthDate,
        company: company,
        department: department,
        position:position,
        salary: salary
      },

      ...prevState,
    ])

  }

  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addEmployeeHandler}>
        <label htmlFor="fullName" className="font-medium">
          Çalışan ismi soyismi
        </label>
        <input
          className="max-w-[45rem] w-full mx-auto border p-2"
          type="text"
          placeholder="Çalışanın ismini ve soyismini yazınız."
          id="fullName"
          onChange={employeeFullNameChangeHandler}
          value={employeeFullName}
        />
        <label htmlFor="birthDate" className="font-medium">
          Doğum Tarihi
        </label>
        <input
          type="text"
          className="max-w-[45rem] w-full mx-auto border p-2"
          id="birthDate"
          onChange={birthDateChangeHandler}
          value={birthDate}
        />
        <label htmlFor="company" className="font-medium">
          Çalıştığı Şirket
        </label>
        <input
          type="text"
          className="max-w-[45rem] w-full mx-auto border p-2"
          placeholder="Çalıştığı şirketin ismini yazınız."
          id="company"
          onChange={companyChangeHandler}
          value={company}
        />
        <label htmlFor="department" className="font-medium">
          Departman
        </label>
        <input
          type="text"
          className="max-w-[45rem] w-full mx-auto border p-2"
          placeholder="Departmanı yazınız."
          id="department"
          onChange={departmentChangeHandler}
          value={department}
        />
         <label htmlFor="position" className="font-medium">
           Pozisyon
        </label>
        <input
          type="text"
          className="max-w-[45rem] w-full mx-auto border p-2"
          placeholder="Pozisyonu yazınız."
          id="position"
          onChange={positionChangeHandler}
          value={position}
        />
        <label htmlFor="salary" className="font-medium">
          Maaş miktarı
        </label>
        <input
          type="number"
          className="max-w-[45rem] w-full mx-auto border p-2"
          placeholder="Maaş miktarı yazınız."
          id="salary"
          onChange={salaryChangeHandler}
          value={salary}
        />

        <Button className="mt-2">Ekle</Button>
      </form>
    </Card>
  );
};

export default AddEmployee;
