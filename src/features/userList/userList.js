import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserList,
  selectUserStatus,
  selectUserCount,
  incrementAsync
} from "./userListSlice";

import Button from "./Component/Button";
import Card from "./Component/Card";

export const UserList = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserList);
  const userDataStatus = useSelector(selectUserStatus);
  const userDataCount = useSelector(selectUserCount);

  useEffect(() => {
    dispatch(incrementAsync());
    console.log(userData); // From the redux store
  }, []);

  return (
    <>
      {userDataStatus ? (
        <div className="App">
          <h2 style={{ fontSize: "4rem" }}>User Data</h2>
          {[...Array(userDataCount)].map((e, i) => (
            <Button key={i} title={i} />
          ))}
          <p>
            Choose one of the given buttons{" "}
          </p>
          <div className="card">
            <Card name={""} imgAddr={""} email={""} />
          </div>
        </div>
      ) : (
        <p className="loader">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/09258718484593.562ca3f9ec8f0.gif"
            alt="loader"
          />
        </p>
      )}
    </>
  );
};
