import { Fragment , useState } from 'react';
import './TodoList.css';
import TodoItem from '../../components/TodoItem';

// サンプルオブジェクト
const sampleTodoList = [
  {
    id: 0,
    title: 'これはサンプル1です',
    description: 'これはサンプル1です',
  },
  {
    id: 1,
    title: 'これはサンプル2です',
    description: 'これはサンプル2です',
  },
  {
    id: 2,
    title: 'これはサンプル3です',
    description: 'これはサンプル3です',
  }
]

const TodoList = () => {

  // fook の ステート保持
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState(sampleTodoList);

  // タイトルチェンジ
  const changedTitle = (e) => {
    setTitle(e.target.value)
  }

  // テキストエリアチェンジ
  const changedDescription = (e) => {
    setDescription(e.target.value)
  }

  const clickedButton = () => {
    const newId = Math.max(...todoList.map((todo)=>todo.id)) + 1;
    const newTodoList = todoList.slice();
    const newTodo ={
      id: newId,
      title: title,
      description: description,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTitle('');
    setDescription('');
  }

  // 画面レンダリング
  return (
    <Fragment>
      <h1>Hello!! React!!</h1>
      <div>
        <input className="todo-title-input" type="text" value={title} onChange={changedTitle} />
        <textarea className="todo-description-input" value={description} onChange={changedDescription} />
      </div>
      <div>
        <button className="todo-add-button" onClick={clickedButton}>Click Me!!!</button>
      </div>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id}/>
      })}
    </Fragment>
  );
}

export default TodoList;
