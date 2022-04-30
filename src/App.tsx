import React from 'react';
import './App.scss';
import MiniPlanner from './components/MiniPlaner/MiniPlanner';
import SmallPlanner from './components/SmallPlanner/SmallPlanner';
import NormalPlanner from './components/NormalPlanner/NormalPlanner';
import MediumPlanner from './components/MediumPlanner/MediumPlanner';
import LargePlanner from './components/LargePlanner/LargePlanner';

const App = () => (
  <div className="App">
    <section className="section">
      <div className="container">
        <MiniPlanner />
        <SmallPlanner />
        <NormalPlanner />
        <MediumPlanner />
        <LargePlanner />
      </div>
    </section>
  </div>
);

export default App;
