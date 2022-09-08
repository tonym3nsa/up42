import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlocks } from "../redux/actions/blocks";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";

export const BlocksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlocks());
  }, []);
  return (
    <div>
      <Card />
      <Button disabled onClick={() => console.log("button")}>
        Add to cart
      </Button>
    </div>
  );
};
