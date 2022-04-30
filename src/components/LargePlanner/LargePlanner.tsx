import React, { useState } from 'react';
import './largePlanner.scss';
import Delete from '../Images/delete.png';
import Edit from '../Images/edit.png';

type PlannerTask ={
    title: string
    isDone: boolean
    isEdit?: boolean
    priority?: string
}

const LargePlanner = () => {
  const [inputValue, setInputValue] = useState('');
  const [works, setWorks] = useState<PlannerTask[]>([]);
  const [allWorks, setAllWorks] = useState(works);
  const [editInputValue, setEditInputValue] = useState('');
  const [priorityList, setPriorityList] = useState('Augsta');

  const completed = (index: number) => {
    const newWorks = [...works];
    newWorks[index].isDone = !newWorks[index].isDone;
    return newWorks;
  };

  const getEdit = (index:number) => {
    const newArray = [...allWorks];
    newArray[index].isEdit = true;
    setEditInputValue(newArray[index].title);
    return newArray;
  };

  const getUnedited = (index:number) => {
    const newArray = [...allWorks];
    newArray[index].isEdit = false;
    newArray[index].title = editInputValue;
    return newArray;
  };

  const getOriginal = (index:number) => {
    const newArray = [...allWorks];
    newArray[index].isEdit = false;
    newArray[index].title = allWorks[index].title;
    return newArray;
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
          required
        />
        <div className="largePlanner__select--box">
          <p className="largePlanner__select--title">Prioritāte</p>
          <select
            className="largePlanner__select"
            onChange={(event) => setPriorityList(event.target.value)}
            name="Priority"
          >
            <option value="Augsta">Augsta</option>
            <option value="Vidēja">Vidēja</option>
            <option value="Zema">Zema</option>
          </select>
        </div>
        <button
          className="button__mediumPlaner"
          onClick={() => {
            const newWork = {
              title: inputValue, isDone: false, inProgress: true, isEdit: false, priority: priorityList,
            };
            setWorks([...works, newWork]);
            setAllWorks([...works, newWork]);
            setInputValue('');
          }}
        >
          Pievienot
        </button>
      </div>
      <div className="mediumPlanner__progressBar">
        {allWorks.map((element) => (element.isDone
          ? <div style={{ order: 1 }} className="mediumPlanner__progressBar--done" />
          : <div className="mediumPlanner__progressBar--inProgress" />))}
      </div>
      {works.map(({
        title, isDone, isEdit, priority,
      }, index) => ((
        isEdit)
        ? (
          <div className={priority}>
            <div className="largePlanner__container">
              <div className="largePlanner__box--upper">
                <div className={priority}>
                  <div className="largePlanner__box--priority">
                    <p className="largePlanner__priority--title">{priority?.concat(' prioritāte')}</p>
                  </div>
                </div>
                <div className="largePlanner__box--buttons">
                  <div
                    className="largePlanner--edit"
                    onClick={() => {
                      setWorks(getEdit(index));
                    }}
                  >
                    <img src={Edit} alt="X" />
                  </div>
                  <div
                    className="largePlanner--delete"
                    onClick={() => {
                      setAllWorks(allWorks.filter((_, i) => (i !== index)));
                      setWorks(works.filter((_, i) => (i !== index)));
                    }}
                  >
                    <img src={Delete} alt="X" />
                  </div>
                </div>
              </div>
              <div className="largePlanner__box--lower">
                <div className="largePlanner__inputBox">
                  <input
                    className="checkbox__mediumPlanner"
                    type="checkbox"
                    onChange={() => setWorks(completed(index))}
                    checked={isDone}
                  />
                  <input
                    type="text"
                    className="input__largePlanner"
                    value={editInputValue}
                    placeholder="Uzdevumu labo šeit..."
                    onChange={(e) => { setEditInputValue(e.target.value); }}
                  />
                </div>
                <div className="largePlanner__buttonBox">
                  <button
                    className="largePlanner__button--save"
                    onClick={() => {
                      setWorks(getUnedited(index));
                      setEditInputValue('');
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="largePlanner__button--cancel"
                    onClick={() => {
                      setWorks(getOriginal(index));
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div className={priority}>
            <ul
              className="ul__mediumPlanner"
            >
              <div className="largePlanner__container">
                <div className="largePlanner__box--upper">
                  <div className={priority}>
                    <div className="largePlanner__box--priority">
                      <p className="largePlanner__priority--title">{priority?.concat(' prioritāte')}</p>
                    </div>
                  </div>
                  <div className="largePlanner__box--buttons">
                    <div
                      className="largePlanner--edit"
                      onClick={() => {
                        setWorks(getEdit(index));
                      }}
                    >
                      <img src={Edit} alt="X" />
                    </div>
                    <div
                      className="largePlanner--delete"
                      onClick={() => {
                        setAllWorks(allWorks.filter((_, i) => (i !== index)));
                        setWorks(works.filter((_, i) => (i !== index)));
                      }}
                    >
                      <img src={Delete} alt="X" />
                    </div>
                  </div>
                </div>
                <div className="largePlanner__box--input">
                  <input
                    className="checkbox__mediumPlanner"
                    type="checkbox"
                    onChange={() => setWorks(completed(index))}
                    checked={isDone}
                  />
                  <li
                    key={Math.random()}
                    className="li__mediumPlanner"
                  >
                    {isDone ? <s>{title}</s> : title}
                  </li>
                </div>
              </div>
            </ul>
          </div>
        )))}
      <div className="box__mediumPlanner">
        <button
          className="button__mediumPlaner"
          type="button"
          onClick={() => {
            const isHigh = allWorks.filter((item) => item.priority === 'Augsta');
            setWorks(isHigh);
          }}
        >
          Augsta prioritāte
        </button>
        <button
          className="button__mediumPlaner"
          type="button"
          onClick={() => {
            const isMedium = allWorks.filter((item) => item.priority === 'Vidēja');
            setWorks(isMedium);
          }}
        >
          Vidēja prioritāte
        </button>
        <button
          className="button__mediumPlaner"
          type="button"
          onClick={() => {
            const isLow = allWorks.filter((item) => item.priority === 'Zema');
            setWorks(isLow);
          }}
        >
          Zema prioritāte
        </button>
      </div>
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

export default LargePlanner;
