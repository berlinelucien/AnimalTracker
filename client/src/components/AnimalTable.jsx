import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useState, useEffect } from "react";

function preventDefault(event) {
  event.preventDefault();
}

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
      <Title>Recent Animal Sighting</Title>
      <Table size="small">
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
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}

export default AnimalTable;
