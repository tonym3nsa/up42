import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlocks } from "../../redux/actions/blocks";
import { displayMobileCart } from "../../redux/actions/cart";
import { ListCard } from "../../components/ListCard/ListCard";
import { Cart } from "../../components/Cart/Cart";
import { Spinner } from "../../components/Icons/Spinner/Spinner";
import { ErrorState } from "../../components/ErrorState/ErrorState";
import CartButton from "../../components/CartButton/CartButton";
import "./blocksPage.scss";

export const BlocksPage = () => {
  const dispatch = useDispatch();
  const { blocks, gettingBlocks, errorGettingBlocks, errorMessage } =
    useSelector((state) => state.blocksReducer);
  const { cart, displayCart } = useSelector((state) => state.cartReducer);
  useEffect(() => {
    dispatch(getBlocks());
  }, []);

  return (
    <Fragment>
      <div className="container mx-auto">
        {gettingBlocks ? (
          <Spinner />
        ) : errorGettingBlocks ? (
          <ErrorState errorMessage={errorMessage} />
        ) : (
          <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 page blocks-page-columns gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-28 card-grid">
              {blocks?.map((block, index) => {
                return (
                  <ListCard
                    key={`${block.id}_${index}`}
                    cart={cart}
                    {...block}
                    className="mb-4 w-full"
                  />
                );
              })}
            </div>
            <Cart displayMobileCart={displayCart} />
          </div>
        )}
      </div>
      <CartButton
        displayCart={displayCart}
        onClick={() => dispatch(displayMobileCart(!displayCart))}
        cart={cart}
      />
    </Fragment>
  );
};
