import React from "react";
import Card from "./Card";

const tasks = [
    { title: "遊戲基本介面", date: "06/20" },
    { title: "連接 firebase 讀取資料", date: "06/22" },
    { title: "選取音樂頁面 - 同時載入音樂播放", date: "06/24" },
    { title: "遊戲基本介面", date: "06/20" },
    { title: "連接 firebase 讀取資料", date: "06/22" },
    { title: "遊戲基本介面", date: "06/20" },
    { title: "連接 firebase 讀取資料", date: "06/22" },
    { title: "遊戲基本介面", date: "06/20" },
    { title: "連接 firebase 讀取資料", date: "06/22" }
  ];

class Backlog extends React.Component {
  render() {
    return (
      <div className="backlog-wrapper">
        <div className="backlog-title">
          <div className="backlog-title-text">Backlog</div>
        </div>
        <div className="backlog-content">
          <Card tasks={tasks} />
        </div>
      </div>
    );
  }
}

export default Backlog;
