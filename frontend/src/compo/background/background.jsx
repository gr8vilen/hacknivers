import React from 'react'
import Particles from "react-tsparticles"
import "./bc.css"


function background() {
  return (
    <>
     <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          zIndex: -1
        },
        interactivity: {
          events: {
            onClick: {
              mode: "push"
            },
            onDiv: {
              selectors: "#repulse-div",
              enable: true,
              mode: "repulse"
            },
            onHover: {
              mode: "repulse"
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            grab: {
              distance: 400
            }
          }
        },
        particles: {
          color: {
            value: "#00FFDD"
          },
          links: {
            color: {
              value: "#00FFDD"
            },
            distance: 150,
            enable: true,
            opacity: 0.4
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200
              }
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out"
            }
          },
          number: {
            density: {
              enable: true
            },
            value: 80
          },
          opacity: {
            random: {
              enable: true
            },
            value: {
              min: 0.1,
              max: 0.5
            },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.1
            }
          },
          size: {
            random: {
              enable: true
            },
            value: {
              min: 0.1,
              max: 5
            },
            animation: {
              enable: true,
              speed: 20,
              minimumValue: 0.1
            }
          }
        }

      }}
    />
    </>
  )
}

export default background