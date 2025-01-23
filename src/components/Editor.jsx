import { useState, useRef, useContext } from "react";
import "../App.css";
import { TodoDispatchContext } from "../App";

export default function Editor() {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div>
      <div className="Editor">
        <input
          ref={contentRef}
          value={content}
          onKeyDown={onKeyDown}
          onChange={onChangeContent}
          placeholder="새로운 todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}
