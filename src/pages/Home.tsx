import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { useLatestProductQuery } from "../redux/api/productAPI"
import toast from "react-hot-toast";
import { SkeletonLoader } from "../components/Loader";
import { CartItem } from "../types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartReducer";

const Home = () => {
  const dispatch = useDispatch()

  const { data, isLoading, isError } = useLatestProductQuery("");



  const addToCarthandler = (cartItem: CartItem) => {

    if (cartItem.stock < 1) return toast.error("Out Of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  }


  if (isError) toast.error("")

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">More</Link>
      </h1>


      <main>
        {isLoading ?
          (
            <>
              <SkeletonLoader width="80vw" />
            </>
          ) : (
            data?.products.map((i) => {
              return <ProductCard
                key={i._id}
                productId={i._id}
                name={i.name}
                price={i.price}
                stock={i.stock}
                handler={addToCarthandler}
                photo={i.photo}
              />
            })
          )}
      </main>


    </div>
  )
}

export default Home