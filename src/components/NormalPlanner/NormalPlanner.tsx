import React, { useState } from 'react';
import './nomalPlanner.scss';
import Delete from '../Images/delete.png';

type PlannerTask = {
    title: string
    isDone: boolean
    inProgress?: boolean
}

const MediumPlanner = () => {
  const [inputValue, setInputValue] = useState('');
  const [works, setWorks] = useState<PlannerTask[]>([]);
  const [allWorks, setAllWorks] = useState(works);

  const completed = (index: number) => {
    const newWorks = [...works];
    newWorks[index].isDone = !newWorks[index].isDone;
    return newWorks;
  };

  const removeItem = (index: number) => {
    const newArray = [...works];
    newArray.splice(index, 1);
    return setWorks(newArray);
  };

  return (
    <div className="container__normalPlaner">
      <div className="box__normalPlanner">
        <input
          className="input__normalPlanner"
          type="text"
          placeholder="Pievieno jaunu uzdevumu..."
          value={inputValue}
          onChange={(event) => (setInputValue(event.target.value))}
        />
        <button
          className="button__normalPlanner"
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
          className="ul__normalPlanner"
          key={Math.random()}
        >
          <div className="li__normalPlanner--box">
            <div className="li__normalPlanner--boxInside">
              <input
                className="checkbox__normalPlanner"
                type="checkbox"
                onChange={() => setWorks(completed(index))}
                checked={work.isDone}
              />
              <li
                className="li__normalPlanner"
              >
                {work.isDone ? <s>{work.title}</s> : work.title}
              </li>
            </div>
            <div className="li__normalPlanner--button" onClick={() => removeItem(index)}>
              <img src={Delete} alt="X" />
            </div>
          </div>
        </ul>
      ))}
      <div className="box__normalPlanner">
        <button
          className="button__normalPlanner"
          type="button"
          onClick={() => setWorks(allWorks)}
        >
          Visi
        </button>
        <button
          className="button__normalPlanner"
          type="button"
          onClick={() => {
            const notDone = allWorks.filter((item) => !item.isDone);
            setWorks(notDone);
          }}
        >
          Neizpildīti
        </button>
        <button
          className="button__normalPlanner"
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

export default MediumPlanner;
