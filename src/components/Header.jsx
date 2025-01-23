import { memo } from "react";
import "../App.css";
function Header() {
  return (
    <div className="header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

export default memo(Header);
