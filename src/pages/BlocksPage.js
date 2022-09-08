import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlocks } from "../redux/actions/blocks";

export const BlocksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlocks());
  }, []);
  return <div>Blocks page</div>;
};
