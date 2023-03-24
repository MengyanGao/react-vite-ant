import React from "react";
// 路由跳转
import { useHistory } from "react-router-dom";

const Index = () => {
  // 路由跳转
  const history = useHistory();
  function toDetail() {
    history.push(`/detail`);
  }

  return (
    <>
      <div>首 页</div>
      <br />
      <button onClick={toDetail} to="/detail">
        去 detail
      </button>
      <br />
    </>
  );
};

export default Index;
