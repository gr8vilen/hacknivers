import React from "react";
import me from "./meonabout.jpg";
import "./header.sass";
import { urlFor, client } from "../../../../client";
import { useEffect, useState } from "react";

function Header() {
  const [aboutdata, setAboutdata] = useState([]);

  useEffect(() => {
    if (aboutdata == []) {
      console.log("going on ");
    } else {
      client.fetch('*[_type == "pabout"]{para,titel,imageurl}').then((data) => {
        setAboutdata(data[0]);
      });
    }
  }, []);

  // const test = urlFor(aboutdata.imageurl).url()
  // console.log(test)

  return (
    <div>
      <div className="container my-5 grid-about">
        {aboutdata.imageurl && (
          <img
            className="rounded-lg-3 filter"
            src={urlFor(aboutdata.imageurl).url()}
            alt=""
            width="720"
          />
        )}

        <div>
        <h1 className="display-4 fw-bold lh-1">Hello i'm Dhiraj kumar,</h1>
        <h1 className="display-4 fw-bold lh-1">Aka GR8VILEN</h1>

        <p className="lead">{aboutdata.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
