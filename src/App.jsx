import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Graph from "./pages/Graph";
import Layout from "./components/Layout";
import Formula from "./pages/Formula";
import Quiz from "./pages/Quiz";
import IntroToTrig from "./pages/IntroToTrig";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/formula" element={<Formula />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/intro" element={<IntroToTrig />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
