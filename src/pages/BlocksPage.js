import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlocks } from "../redux/actions/blocks";
import { ListCard } from "../components/ListCard/ListCard";
import { Cart } from "../components/Cart/Cart";

export const BlocksPage = () => {
  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocksReducer);

  useEffect(() => {
    dispatch(getBlocks());
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="w-9/12">
          <div className="columns-4">
            {blocks?.map((block, index) => {
              return (
                <ListCard
                  key={`${block.id}_${index}`}
                  {...block}
                  className="mb-4"
                />
              );
            })}
          </div>
        </div>
        <div
          className="w-3/12"
          style={{
            backgroundColor: "grey",
            height: "100vh",
          }}
        >
          <Cart />
        </div>
      </div>
    </div>
  );
};
