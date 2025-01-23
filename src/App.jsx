import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import Exam from "./components/Exam";
import { useReducer } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import { useMemo } from "react";
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
}
// export const TodoContext = createContext();

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  // const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const onCreate = useCallback((content) => {
    // const newTodo = {
    // id: idRef.current++,
    // isDone: false,
    // content: content,
    // date: new Date().getTime(),
    // };
    // setTodos([newTodo, ...todos]);
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);
  const onDelete = useCallback((targetId) => {
    // setTodos(todos.filter((todo) => todo.id !== targetId));
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);
  return (
    <div className="App">
      <Header />
      {/* <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}> */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      {/* </TodoContext.Provider> */}
      {/* <Exam /> */}
    </div>
  );
}

export default App;
