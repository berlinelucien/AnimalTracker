import * as React from "react";
import { useState, useEffect } from "react";
import Title from "./Title";


function IndividualTable() {
    
    const [individuals, setIndividuals] = useState([]);
    console.log("individuals", individuals);

    // generate indiviual data
    const getIndividuals = async () => {
        const response = await fetch("http://localhost:4000/individuals");
        const data = await response.json();
        setIndividuals(data);
    };
    useEffect(() => {
        getIndividuals();
    }, []);

    return (
        <React.Fragment>
      <Title text="Scientist" />
      <table className="table table-hover border">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Display all individual here */}
                  {individuals.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{}</th>
                            <td>{data.nick_name}</td>
                            <td>{data.seen_on}</td>
                            <td>{data.species_id}</td>
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

export default IndividualTable