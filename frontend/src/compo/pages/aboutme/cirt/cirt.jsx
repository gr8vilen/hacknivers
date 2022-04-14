import React from "react";
import "./cirt.sass";
import { urlFor, client } from "../../../../client";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom" 

function Cirt() {
  const [cirtdata, setCirtdata] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "cirts"]{from,titel, imageurl}').then((data) => {
      setCirtdata(data);
    });
  }, []);

  return (
    <div id="projects">
      <h1 style={{ textAlign: "center" }}>Certificates</h1>
      <div className="container">
        <div className="row">
          {cirtdata.slice(0, 3).map((data) => (
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
        <Link to="/p/aboutme/cirt">
        <button type="button" className="btn btn-outline-primary btn1">
          see more..
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Cirt;
