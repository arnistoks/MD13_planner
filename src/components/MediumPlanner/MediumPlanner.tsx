import React, { useState } from 'react';
import './mediumPlanner.scss';
import Delete from '../Images/delete.png';
import Edit from '../Images/edit.png';

type PlannerTask ={
    title: string
    isDone: boolean
    isEditing?: boolean
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
    <div className="container__mediumPlaner">
      <div className="box__mediumPlanner">
        <input
          className="input__mediumPlanner"
          type="text"
          placeholder="Pievieno jaunu uzdevumu..."
          value={inputValue}
          onChange={(event) => (setInputValue(event.target.value))}

        />
        <button
          className="button__mediumPlaner"
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
      <div className="mediumPlanner__progressbar">
        {allWorks.map((element) => (element.isDone
          ? <div style={{ order: 1 }} className="mediumPlanner__progressBar--done" />
          : <div className="mediumPlanner__progressBar--inProgress" />))}
      </div>
      {works.map((work, index) => (
        <ul
          className="ul__mediumPlanner"
          key={Math.random()}
        >
          <div className="li__mediumPlanner--box">
            <div className="li__mediumPlanner--boxInside">
              <input
                className="checkbox__mediumPlanner"
                type="checkbox"
                onChange={() => setWorks(completed(index))}
                checked={work.isDone}
              />
              <li
                className="li__mediumPlanner"
              >
                {work.isDone ? <s>{work.title}</s> : work.title}
              </li>
            </div>
            <div className="li__mediumPlanner--boxInside">
              <div className="li__mediumPlanner--button" onClick={() => removeItem(index)}>
                <img src={Edit} alt="X" />
              </div>
              <div className="li__mediumPlanner--button" onClick={() => removeItem(index)}>
                <img src={Delete} alt="X" />
              </div>
            </div>
          </div>
        </ul>
      ))}
      <div className="box__mediumPlanner">
        <button
          className="button__mediumPlaner"
          type="button"
          onClick={() => setWorks(allWorks)}
        >
          Visi
        </button>
        <button
          className="button__mediumPlaner"
          type="button"
          onClick={() => {
            const notDone = allWorks.filter((item) => !item.isDone);
            setWorks(notDone);
          }}
        >
          Neizpildīti
        </button>
        <button
          className="button__mediumPlaner"
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
