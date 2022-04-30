import React, { useState } from 'react';
import './smallPlanner.scss';

type PlannerTask ={
    title: string
    isDone: boolean
}

const SmallPlanner = () => {
  const [inputValue, setInputValue] = useState('');
  const [works, setWorks] = useState<PlannerTask[]>([]);
  const [allWorks, setAllWorks] = useState(works);

  const completed = (index: number) => {
    const newWorks = [...works];
    newWorks[index].isDone = !newWorks[index].isDone;
    return newWorks;
  };

  return (
    <div className="container__smallPlaner">
      <div className="box__smallPlanner">
        <input
          className="input__smallPlanner"
          type="text"
          placeholder="Pievieno jaunu uzdevumu..."
          value={inputValue}
          onChange={(event) => (setInputValue(event.target.value))}
        />
        <button
          className="button__smallPlanner"
          onClick={() => {
            const newWork = { title: inputValue, isDone: false };
            setWorks([...works, newWork]);
            setAllWorks([...works, newWork]);
            setInputValue('');
          }}
        >
          Pievienot
        </button>
      </div>
      {works.map((work, index) => (
        <ul
          className="ul__smallPlanner"
          key={Math.random()}
        >
          <div className="li__smallPlanner--box">
            <input
              className="checkbox__smallPlanner"
              type="checkbox"
              onChange={() => setWorks(completed(index))}
              checked={work.isDone}
            />
            <li
              className="li__smallPlanner"
            >
              {work.isDone ? <s>{work.title}</s> : work.title}
            </li>
          </div>
        </ul>
      ))}
      <div className="box__smallPlanner">
        <button
          className="button__smallPlanner"
          type="button"
          onClick={() => setWorks(allWorks)}
        >
          Visi
        </button>
        <button
          className="button__smallPlanner"
          type="button"
          onClick={() => {
            const notDone = allWorks.filter((item) => !item.isDone);
            setWorks(notDone);
          }}
        >
          Neizpildīti
        </button>
        <button
          className="button__smallPlanner"
          type="button"
          onClick={() => {
            const notDone = allWorks.filter((item) => item.isDone);
            setWorks(notDone);
          }}
        >
          Izpildīti
        </button>
      </div>
    </div>
  );
};

export default SmallPlanner;
