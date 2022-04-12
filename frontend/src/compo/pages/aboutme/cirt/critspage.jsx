import React from "react";
import "./cirt.sass";
import  { urlFor, client } from "../../../../client";
import { useState, useEffect } from "react";



function Critspage() {
    const [cirtdata, setCirtdata] = useState([]);

    useEffect(() => {
      client.fetch('*[_type == "cirts"]{from,titel, imageurl}').then((data) => {
        setCirtdata(data);
      });
    }, []);
  
    console.log(cirtdata);
  
    return (
      <div className="critspage" >
        <h1 style={{ textAlign: "center" }}>Certificates</h1>
        <div className="container ">
          <div className="row">
            {cirtdata.map((data) => (
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="card cardw">
                  <img
                    className="card-img-top"
                    src={urlFor(data.imageurl).url()}
                    alt={data.from}
                  ></img>
  
                  <div className="card-body  card-body-own">
                    <h4 className="card-text">{data.titel} </h4>
                    <p className="card-text">
                      From:- <span>{data.from}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Critspage