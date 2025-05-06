import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // If you are using `loadSlim`

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // This will run only once on mount
    initParticlesEngine(async (engine) => {
      // Load the slim version of particles
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Optionally, you could return a cleanup function to reset anything if needed.
    return () => {
      // Reset any necessary cleanup
    };
  }, []); // Empty array ensures this runs only once

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    // Ensure the ternary is wrapped correctly
    init && (
      <Particles
        style={{ maxHeight: "600px" }}
        id="tsparticles"
        // className="h-full"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#fff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#6366F1", // Dot color
            },
            links: {
              enable: false, // Disabling lines between particles
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 200,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle", // The particles will be in circular shape
            },
            size: {
              value: { min: 1, max: 5 }, // Particle size range
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticleBackground;
