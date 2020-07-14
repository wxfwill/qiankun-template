import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import actions from "@/shared/actions";

const Status = () => {
  const history = useHistory();

  const [token, setToken] = useState();
  useEffect(() => {
    actions.onGlobalStateChange((state) => {
      const { token } = state;
      console.log(token);
      // 未登录
      if (!token) {
        message.error("未获取到信息");
        return;
      }
      setToken(token);
    }, true);
  }, [history]);

  return (
    <section>
        <p>收到来自父组件的值：{token}</p>
    </section>
  );
};

export default Status;
