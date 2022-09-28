import * as React from "react";
import Title from "./Title";
import { useState, useEffect } from "react";

// function preventDefault(data) {
//   data.preventDefault();
// }

function AnimalTable() {
  // initialize data == default species
  const [species, setSpecies] = useState([]);
  console.log("species", species);

  // Generate Animal Data
  const getSpecies = async () => {
    const response = await fetch("http://localhost:4000/species");
    const data = await response.json();
    setSpecies(data);
  };
  useEffect(() => {
    // useEffect will run getSpecies()
    //console.log('useEffect called here')
    getSpecies();
  }, []);

  // const addAnimal = (newAnimal) => {
  //   setSpecies((species) => [...species, newAnimal]);
  // };

  return (
    <React.Fragment>
      <Title text="Animal Sighting" />
      <table className="table table-hover border">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Common Name:</th>
                    <th scope="col">Scientific Name:</th>
                    <th scope="col">Population:</th>
                    <th scope="col">Conservation Status:</th>
                    <th scope="col">Add/edit</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Display all animals here */}
                  {species.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{}</th>
                        <td>{data.common_name}</td>
                        <td>{data.scientific_name}</td>
                        <td>{data.population}</td>
                        <td>{data.conservation_status}</td>
                        <td>

                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
      {/* <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Common Name</TableCell>
            <TableCell>Scientific Name</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Conservation Status</TableCell>
            <TableCell align="right">Add/edit/like?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {species.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.common_name}</TableCell>
              <TableCell>{data.scientific_name}</TableCell>
              <TableCell>{data.population}</TableCell>
              <TableCell>{data.conservation_status}</TableCell>
              <TableCell align="right">{``}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
     
    </React.Fragment>
  );
}

export default AnimalTable;
