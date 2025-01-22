import "../App.css";
export default function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDelelteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelelteButton}>삭제</button>
    </div>
  );
}
