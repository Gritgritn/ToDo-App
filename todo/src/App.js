import React from 'react';
import { useState } from 'react';
import Popup from './components/Popup'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteTodo, changeCompleteTodo, updateTodo } from './store/actions';
import {v1 as uuid} from 'uuid';
import { addTodo } from './store/actions';
import EditPopup from './components/EditPopup'

function App() {
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState('');
  const [popup, SetPopup] = useState(false);
  const [editPopup, SetEditPopup] = useState(false);
  const [editToDo, SetEditToDo] = useState('');
  let todos = useSelector(state=>state);


  let dispatch = useDispatch();
  return (
    <div className="App">
      <div className="todo__container">
        <div className="header">
          <h1>Сегодня</h1>
          <button className="edit__btn" onClick={() => setEditable(!editable)}><span className='edit__text'>Править</span></button>
        </div>
        <div className="todo__list" >
          {/* Если есть задачи */}
          {todos.length >= 1 ?
            todos.map(todo =>
              // Режим править
              !editable?
            <div key={todo.id} className="todo__item">
              {/* Если задача выполнена */}
              {todo.completed?
              <button className="btn__completed" onClick={(e)=>{
                dispatch(  changeCompleteTodo({
                  ...todo,
                  completed: false,
             }));}}></button>
              :
              <button className="complete__btn" onClick={(e)=>{
                dispatch(  changeCompleteTodo({
                  ...todo,
                  completed: true,
             }));}}></button>
             }
             <span className={!todo.completed?"todo__item-text":"todo__item-text completed"}>{todo.name}</span>
            </div>
            :
            <div key={todo.id} className="todo__item delete__label">
              <button className="remove__btn" onClick={() => dispatch(deleteTodo(todo.id))}></button>
              <span className={!todo.completed?"todo__item-text":"todo__item-text completed"} onClick={() => {
                SetEditToDo(todo);
                SetEditPopup(true);
                }}>{todo.name}</span>
            </div>)
            :<p>Список задач пуст</p>}
        </div>
      </div>
      <EditPopup isVisible={editPopup} toDo={editToDo} showPopup={SetEditPopup} >
        <input
          type="text"
          className="task__input"
          value={editToDo.name}
          placeholder="Введите текст задачи"
          onChange={(e)=> {
            SetEditToDo({
              id: editToDo.id,
              name: e.target.value,
              completed: editToDo.completed})
            }}
          />

        <button className="button" onClick={() => {
            SetEditPopup(false)
            SetEditToDo('')
            }}>Закрыть</button>

        <button
            className="button action__btn"
            onClick={()=>{
              dispatch(updateTodo({
                  ...editToDo,
              }))
              SetEditToDo('');
              SetEditPopup(false)
            }}>Добавить</button>
      </EditPopup>

      <Popup visible={popup}>
        <input
            type="text"
            className="task__input"
            value={name}
            placeholder="Введите текст задачи"
            onChange={(e)=>setName(e.target.value)}/>

          <button className="button" onClick={() => {
            SetPopup(false)
            setName('')
            }}>Закрыть</button>

          <button
            className="button action__btn"
            onClick={()=>{
              dispatch(  addTodo({
               id: uuid(),
               name: name
              }));
              setName('');
              SetPopup(false)
           }}>Добавить</button>
      </Popup>
      <div className="add__button" onClick={() => SetPopup(true)}></div>
    </div>
  );
}

export default App;
