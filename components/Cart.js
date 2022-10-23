import getStripe from "../lib/getStripe";
import { useStateContext } from "../lib/context"
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Checkout, Cards } from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

// Animation variants
const card = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.2,
        },
    },
}

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.5, // Todo: fix stagger animation
    },
  },
}

export default function Cart() {
    const { cartItems, setShowCart, onAdd, onRemove, totalPrice } = useStateContext();
    
    // // Payment
    // const handleCheckout = async () => {
    //     const stripe = await getStripe();
    //     const response = await fetch('/api/stripe', {
    //         method: "POST",
    //         headers: {'Content-Type' : 'application/json'},
    //         body: JSON.stringify(cartItems),
    //     });
    //     const data = await response.json();
    //     await stripe.redirectToCeckout({ sessionId: data.id });
    // }

    // return(
    //     <CartWrapper
    //     initial={{opacity: 0}}
    //     animate={{opacity: 1}}
    //     exit={{opacity: 0}}
    //     onClick={() => setShowCart(false)}
    //     >
    //         <CartStyle
    //         initial={{x: '50%'}}
    //         animate={{x: '0'}}
    //         exit={{x: '50%'}}
    //         transition={{type: 'tween'}}
    //         onClick={(e) => e.stopPropagation()}>
    //             {cartItems.length < 1 && (
    //             <EmptyStyle
    //             initial={{opacity: 0, scale: 0.8}}
    //             animate={{opacity: 1, scale: 1}}
    //             transition={{delay: 0.2}}
    //             >
    //                 <div class="cart-wrapper">
    //                     <FaShoppingCart />
    //                     </div>
    //                     <h1>There are no products in your cart.</h1>
    //             </EmptyStyle>
    //             )}
                
    //             <Cards
    //             variants={cards}
    //             initial="hidden"
    //             animate="show"
    //             layout
    //             >
    //                 {cartItems.length >= 1 && cartItems.map((item) => {
    //                     return(
    //                     <Card
    //                     variants={card}
    //                     layout
    //                     key={item.slug}>
    //                         <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
    //                         <CardInfo>
    //                             <h2>{item.title}</h2>
    //                             <h3>${item.price}</h3>
    //                             <Quantity>
    //                                 <span>Quantity</span>
    //                                 <button onClick={() => onRemove(item)}>
    //                                     <AiFillMinusCircle />
    //                                 </button>
    //                                 <p>{item.quantity}</p>
    //                                 <button onClick={() => onAdd(item, 1)}>
    //                                     <AiFillPlusCircle />
    //                                 </button>
    //                             </Quantity>
    //                         </CardInfo>
    //                     </Card>
    //                     )
    //                 })}
    //             </Cards>
                
    //             {cartItems.length >= 1 && (
    //             <Checkout layout>
    //                 <h3>Subtotal: ${totalPrice}</h3>
    //                 <button onClick={handleCheckout}>Proceed to checkout</button>
    //                 </Checkout>
    //                 )}
    //         </CartStyle>
    //     </CartWrapper>
    // )
}