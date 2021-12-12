import React from 'react';
import { useState } from 'react';
import Popup from './components/Popup'

function App() {
  const [tasks, setTasks] = useState( [
    {id: 1, description: 'Пройти стажировку в Онли', completed: true},
    {id: 2, description: 'Побриться', completed: false},
    {id: 3, description: 'Купить молоко', completed: false},
    {id: 4, description: 'Не забыть забрать сына из садика', completed: false},
    {id: 5, description: 'Купить сыр', completed: false},
  ])

  const [description, setDescription] = useState('');
  const [popup, SetPopup] = useState(false);

  const addNewTask = (e) => {
    e.preventDefault();
    const NewTask = {
      id: Date.now(),
      description,
      completed: false,
    }
    setTasks([...tasks, NewTask]);
    setDescription('');
    SetPopup(false);
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  return (
    <div className="App">
      <div className="todo__container">
        <h1>Сегодня</h1>
        <div className="todo__list" >
          {tasks.length >= 1 ?
            tasks.map(task =>
            <div key={task.id} className="todo__item">
              <button className="remove__btn" onClick={() => removeTask(task)}></button>
              <input type="checkbox" id={`todo-checkbox`+task.id} defaultChecked={task.completed}/>
              <label htmlFor={`todo-checkbox`+task.id}><span className="todo__item-text">{task.description}</span></label>
            </div>)
            :<p>Список задач пуст</p>}
        </div>
      </div>
      <Popup visible={popup}>
        <input
            type="text"
            className="task__input"
            value={description}
            placeholder="Введите текст задачи"
            onChange={ e => setDescription(e.target.value)}/>
          <button className="button" onClick={() => SetPopup(false)}>Закрыть</button>
          <button
            className="button action__btn"
            onClick={addNewTask}>Добавить</button>
      </Popup>
      <div className="add__button" onClick={() => SetPopup(true)}></div>
    </div>
  );
}

export default App;
