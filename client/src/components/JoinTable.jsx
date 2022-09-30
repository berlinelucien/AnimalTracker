import * as React from "react";
import Title from "./Title";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


// tables are joined
// full list is individual, sighting, species

function JoinTable() {
  // initialize data == default species
  const [full_List, setfull_List] = useState([]);
  console.log("species", full_List);

  // Generate full list includes ,individual, species 
  const getJoinList = async () => {
    const response = await fetch("http://localhost:4000/joinTable");
    const data = await response.json();
    setfull_List(data);
  };
  useEffect(() => {
    // useEffect will run getSpecies()
    //console.log('useEffect called here')
    getJoinList();
  }, []);

  // const addAnimal = (newAnimal) => {
  //   setSpecies((species) => [...species, newAnimal]);
  // };

  return (
    <React.Fragment>
       <NavLink to='/dashboard'>
        <div>back</div>
      </NavLink> 
      <Title text="Database" />
     
      <table className="table table-hover border">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Common Name:</th>
                    <th scope="col">Scientific Name:</th>
                    <th scope="col">Population:</th>
                    <th scope="col">Conservation Status:</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Location</th>
            <th scope="col">Healthy Status</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Seen on</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Display all animals here */}
                  {full_List.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{}</th>
                        <td>{data.common_name}</td>
                        <td>{data.scientific_name}</td>
                        <td>{data.population}</td>
                        <td>{data.conservation_status}</td>
                        <td>{data.date_time}</td>
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

export default JoinTable;
