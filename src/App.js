import React from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';

function Add() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x')) || 0;
  const y = parseFloat(searchParams.get('y')) || 0;
  return <div>{x} + {y} = {x + y}</div>;
}

function Sub() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x')) || 0;
  const y = parseFloat(searchParams.get('y')) || 0;
  return <div>{x} - {y} = {x - y}</div>;
}

function Mul() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x')) || 0;
  const y = parseFloat(searchParams.get('y')) || 0;
  return <div>{x} * {y} = {x * y}</div>;
}

function Div() {
  const [searchParams] = useSearchParams();
  const x = parseFloat(searchParams.get('x')) || 0;
  const y = parseFloat(searchParams.get('y')) || 0;
  return y !== 0 ? <div>{x} / {y} = {x / y}</div> : <div>Dzielenie przez zero!</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/mul" element={<Mul />} />
        <Route path="/div" element={<Div />} />
      </Routes>
    </Router>
  );
}

export default App;
