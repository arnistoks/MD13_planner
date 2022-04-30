import React, { useState } from 'react';
import './miniPlanner.scss';

type PlannerTask ={
    title: string
}

const MiniPlanner = () => {
  const [inputValue, setInputValue] = useState('');
  const [works, setWorks] = useState<PlannerTask[]>([]);

  return (
    <div className="container__miniPlanner">
      <div className="box__miniPlanner">
        <input
          className="input__miniPlanner"
          type="text"
          placeholder="Pievieno jaunu uzdevumu..."
          value={inputValue}
          onChange={(event) => (setInputValue(event.target.value))}
        />
        <button
          className="button__miniPlanner"
          onClick={() => {
            const newWork = { title: inputValue };
            setWorks([...works, newWork]);
            setInputValue('');
          }}
        >
          Pievienot
        </button>
      </div>
      {works.map((work) => (
        <ul
          className="ul__miniPlanner"
          key={Math.random()}
        >
          <li
            className="li__miniPlanner"
          >
            {work.title[0].toUpperCase() + work.title.slice(1, work.title.length)}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MiniPlanner;
