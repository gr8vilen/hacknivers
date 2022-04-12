import React from "react";
import "./exp.sass";
import Chart from "react-apexcharts";
import { useState } from "react";

function Exp() {
  // chart1
  const [options1, setoptions1] = useState(

    {
        chart: {
          height: 400,
          type: 'radar',
          toolbar: {
            show: false
          }
      
        },

        plotOptions: {
            radar: {
              size: undefined,
              offsetX: 0,
              offsetY: 0,
              polygons: {
                strokeColors: '#00ffdd',
                strokeWidth: 1,
                connectorColors: '#00ffdd',
              }
            }
          },

        xaxis: {
          categories: ['JAVASCRIPT', 'Node Js', 'MongoDb', 'Python', 'CSS', 'HTML'],
          labels:{
            style: {
                color: '#00ffdd',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-title',
                }
          },

          
        },
        tooltip: {
            enabled: false,
        }

      },
  );

  const [series1, setseries1] = useState([
    {
      name: "Series 1",
      data: [50, 50, 60, 50, 70, 90],
    },

  ]);

  // endchart1

//   chart2  
const [options2, setoptions2] = useState(

    {
        chart: {
          height: 400,
          type: 'radar',
          toolbar: {
            show: false
          }
      
        },
        plotOptions: {
            radar: {
              size: undefined,
              offsetX: 0,
              offsetY: 0,
              polygons: {
                strokeColors: '#00ffdd',
                strokeWidth: 1,
                connectorColors: '#00ffdd',
              }
            }
          },
      
        xaxis: {
          categories: ['Fundamentals', 'Network ', 'Web ', 'Privilege escalation ', 'Windows', 'Linux'],
          labels:{
            style: {
                color: '#00ffdd',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-title',
                }
          },
        },
        tooltip: {
            enabled: false,
        }

      },
  );

  const [series2, setseries2] = useState([
    {
      name: "Series 1",
      data: [84, 40, 30, 10, 20, 65],
    },

  ]);


// chart2end

  return (
    <div id="experience">
      <div className="container my-5 ">
        <h1 style={{ textAlign: "center" }}>Skills Matrix</h1>
        <div className="grid-exp">
          <div className="exp-ch">
            <h4 style={{ textAlign: "center" }}>Full-Stack</h4>

            <Chart
              type="radar"
              options={options1}
              series={series1}
              height={400}
            />
          </div>
          <div className="exp-ch">
            <h4 style={{ textAlign: "center" }}>Cyber Security</h4>
            <Chart
              type="radar"
              options={options2}
              series={series2}
              height={400}
            />
            <p style={{ textAlign: "center" , fontSize:'12px'}}>
                The following data fetch from 
                <a href="https://tryhackme.com/p/dhirajhacker90/"> tryhackme.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
