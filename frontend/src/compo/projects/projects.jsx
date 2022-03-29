import React from "react";
import  { urlFor, client } from "../../client";
import "./projects.sass";
import { useState, useEffect } from "react";

function Projects() {
  const [prodata, setProdata] = useState([]);

  useEffect(() => {
    if (prodata == []) {
      console.log("going on ");
    } else {
      client
        .fetch(
          '*[_type == "projects"]{name,about,pro_url,imagUrl}'
        )
        .then((data) => {
          setProdata(data);
        });
    }
  }, []);
  // console.log(prodata)
  // urlFor(data.imagUrl).url
  // prodata.map((data)=>(
  //   console.log( urlFor(data.imagUrl).url())
  // ))

  return (
    <div className="project" id="projects">
      <p className="cen1">Best Projects I have made</p>
      <h2 className="cen">My Projects</h2>
      <div className="container">
        <div className="row">

          {prodata.map((data) => (
            
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={data.name}>
                <div className="card cardw">
                  <img
                    className="card-img-top"
                    src={urlFor(data.imagUrl).url()}
                    alt={data.name}
                  ></img>
                  <div className="card-body  card-body-own">
                    <h5 className="card-title" >{data.name}</h5>
                    <p className="card-text">
                    {data.about}
                    </p>
                    <a href={data.pro_url} className="btn btn-outline-primary btn3">
                      visit project
                    </a>
                  </div>
                </div>
              </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
