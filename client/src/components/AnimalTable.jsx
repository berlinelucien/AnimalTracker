import * as React from "react";
import Title from "./Title";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";

function AnimalTable() {
  // initialize data == default species
  const [species, setSpecies] = useState([]);
  console.log("species", species);
  const [common_name, setCommon_name] = useState("");
  const [scientific_name, setScientific_name] = useState("");
  const [population, setPopulation] = useState("");
  const [conservation, setConservation] = useState("");
  const [id, setId] = useState("");

  // GET LIST OF SPECIES
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

  /** ADD Species */
  const handleAddSpecies = async (e) => {
    e.preventDefault();
    const newSpecies = {
      common_name,
      scientific_name,
      population,
      conservation,
    };
    console.log(newSpecies);
    const response = await fetch("http://localhost:4000/species", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpecies),
    });
    const content = await response.json();

    setSpecies([...species, content]);
    setCommon_name("");
    setScientific_name("");
    setPopulation("");
    setConservation("");
  };

  return (
    <React.Fragment>
      <Title text="Add Species Info:" />
      <div>
        <Divider />
      </div>
      <div className="addSpeciesArea">
        <form id="add-species" onSubmit={handleAddSpecies} action="#">
          <fieldset>
            <label> Species: </label>

            <input
              type="text"
              id="add-species-common-name"
              value={common_name}
              onChange={(e) => setCommon_name(e.target.value)}
              placeholder="Common Name"
              required
            />
            <input
              type="text"
              id="add-species-scientific-name"
              value={scientific_name}
              onChange={(e) => setScientific_name(e.target.value)}
              placeholder="Scientific Name"
              required
            />
            <input
              type="text"
              id="add-species-population"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
              placeholder="Population"
              required
            />
            <input
              type="text"
              id="add-species-CE"
              value={conservation}
              onChange={(e) => setConservation(e.target.value)}
              placeholder="CE"
              required
            />
          </fieldset>
          <div className="button">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>

      <table className="table table-hover border">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Common Name:</th>
            <th scope="col">Scientific Name:</th>
            <th scope="col">Population:</th>
            <th scope="col">Conservation Status:</th>
            <th scope="col"></th>
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
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default AnimalTable;
