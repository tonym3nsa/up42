import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlocks } from "../../redux/actions/blocks";
import { ListCard } from "../../components/ListCard/ListCard";
import { Cart } from "../../components/Cart/Cart";
import "./blocksPage.scss";

export const BlocksPage = () => {
  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.blocksReducer);
  useEffect(() => {
    dispatch(getBlocks());
  }, []);
  return (
    <Fragment>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xs:grid-cols-1 page blocksPage-columns gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-28">
            {/*<div className="columns-4 mt-24">*/}

            {blocks?.map((block, index) => {
              return (
                <ListCard
                  key={`${block.id}_${index}`}
                  {...block}
                  className="mb-4 w-full"
                />
              );
            })}
            {/*</div>*/}
          </div>
          <Cart />
        </div>
      </div>
    </Fragment>
  );
};
