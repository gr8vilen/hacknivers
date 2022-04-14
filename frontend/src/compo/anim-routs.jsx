import React , {useEffect,useState} from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./header/header";
import About from "./about/about";
import Achievement from "./achievement/achievement";
import Contacts from "./contacts/contacts";
import Navbar from "./nav/navbar";
import Projects from "./projects/projects";
import Aboutme from "./pages/aboutme/aboutme";
import Critspage from "./pages/aboutme/cirt/critspage";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";




function Animrouts() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Header />
              <About />
              <Achievement />
              <Projects />
              <Contacts />
              <Navbar />
            </motion.div>
          }
        />
        <Route
          path="/p/aboutme"
          element={
            <>
              <Aboutme />
            </>
          }
        />
        <Route
          path="/p/aboutme/cirt"
          element={
            <>
              <Critspage />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default Animrouts;
