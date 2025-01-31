import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import NavBar from "./AppBar";
import Particles from "react-tsparticles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainParticles: {
    position: "relative",
    backgroundColor: "transparent",
    color: theme.palette.primary,
    //marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "150%",
    width: "100%",
  },
  overlay: {
    background: "transparent",
    position: "absolute",
    width: "100%",
    overflowX: "hidden",
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" component="main" className={classes.mainParticles}>
      <div>
        <Particles
          params={{
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
            particles: {
              color: { value: "#e6e6f7" },
              links: {
                color: "#c5c5d6",
                distance: 100,
                enable: true,
                opacity: 1,
                width: 1,
              },
              number: { value: 100 },
              move: {
                enable: true,
              },
              opacity: {
                value: 1,
                random: true,
              },

              stroke: { color: "#ffffff", width: 3 },
              size: {
                value: 10,
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <div className={classes.overlay}>
        <Container>
          <NavBar />
          <Outlet />
        </Container>
      </div>
    </Container>
  );
};

export default Layout;
