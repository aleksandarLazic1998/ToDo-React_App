import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/ducks/user";

const TestData = () => {
  const dataReceived = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Data that we fetched</h2>
    </div>
  );
};

export default TestData;
