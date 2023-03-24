import React from "react";
// 路由跳转
import { useHistory } from "react-router-dom";
const Detail = () => {
  const history = useHistory();

  function toDetail() {
    history.push("/");
  }

  function toRecord() {
    window.open("/");
  }

  return (
    <>
      <div>详情 页</div>
      <br />
      <button onClick={toDetail}>去 detail</button>
      <br />
      <br />
      <button onClick={toDetail}>去 record</button>
    </>
  );
};

export default Detail;
