import React from "react";
// 路由跳转
const Detail = () => {
  function toDetail() {
    window.push("/");
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
