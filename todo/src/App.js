import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="todo__container">
        <h1>Сегодня</h1>
        <p>Список задач пуст</p>
        <div className="todo__list">
          <div className="todo__item">
            <input type="checkbox" id="todo-checkbox1" />
            <label htmlFor="todo-checkbox1"><span className="todo__item-text">Пройти стажировку в Онли</span></label>
          </div>

          <div className="todo__item">
            <input type="checkbox" id="todo-checkbox2" />
            <label htmlFor="todo-checkbox2"><span className="todo__item-text">Побриться</span></label>
          </div>

          <div className="todo__item">
            <input type="checkbox" id="todo-checkbox3" />
            <label htmlFor="todo-checkbox3"><span className="todo__item-text">Купить молоко</span></label>
          </div>

          <div className="todo__item">
            <input type="checkbox" id="todo-checkbox4" />
            <label htmlFor="todo-checkbox4"><span className="todo__item-text">Не забыть забрать сына из садика</span></label>
          </div>

          <div className="todo__item">
            <input type="checkbox" id="todo-checkbox5" />
            <label htmlFor="todo-checkbox5"><span className="todo__item-text">Купить сыр</span></label>
          </div>
        </div>
      </div>
      <div className="popup">
        <div className="task__container">
          <input type="text" className="task__input"></input>
          <button className="button">Закрыть</button>
          <button className="button action__btn">Добавить</button>
        </div>
      </div>
      <div className="add__button"></div>
    </div>
  );
}

export default App;
