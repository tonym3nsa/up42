import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlocks } from "../redux/actions/blocks";
import { Button } from "../components/Button/Button";

export const BlocksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlocks());
  }, []);
  return (
    <div>
      <Button disabled onClick={() => console.log("button")}>
        Add to cart
      </Button>
    </div>
  );
};
