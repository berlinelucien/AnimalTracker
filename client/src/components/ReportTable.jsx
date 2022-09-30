import * as React from "react";
import Title from "./Title";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


// tables are joined
// full list is individual, sighting, species

function ReportTable() {
  // initialize data == default species
  const [report_List, setReport_List] = useState([]);
  console.log("species", report_List);

  // Generate full list includes ,individual, species 
  const getmyReports = async () => {
    const response = await fetch("http://localhost:4000/reportTable");
    const data = await response.json();
    setReport_List(data);
  };
  useEffect(() => {
    // useEffect will run getSpecies()
    //console.log('useEffect called here')
    getmyReports();
  }, []);

  // const addAnimal = (newAnimal) => {
  //   setSpecies((species) => [...species, newAnimal]);
  // };

  return (
    <React.Fragment>
      <NavLink to='/dashboard'>
        <div>back</div>
      </NavLink> 
      <Title text="My Reports" />
   
      <table className="table table-hover border">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Common Name:</th>
                    <th scope="col">Scientific Name:</th>
                    <th scope="col">Population:</th>
            <th scope="col">Location</th>
            <th scope="col">Healthy Status</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Seen on</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Display all animals here */}
                  {report_List.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{}</th>
                        <td>{data.common_name}</td>
                        <td>{data.scientific_name}</td>
                        <td>{data.population}</td>
                        <td>{data.location}</td>
                        <td>{data.healthy === true ? "True": "False"}</td>
                        <td>{data.email}</td>
                        <td>{data.nick_name}</td>
                        <td>{data.seen_on}</td>
                        <td>

                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
     
     
    </React.Fragment>
  );
}

export default ReportTable;
