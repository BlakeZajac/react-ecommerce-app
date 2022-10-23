import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from '../../lib/query'
import { useRouter } from "next/router";
import { DetailsStyle, ProductInfo, Quantity, Buy } from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
    // Use state
    const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

    // Fetch the slug
    const { query } = useRouter();

    // Fetch GraphQL data
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: { slug: query.slug },
    })
    const { data, fetching, error } = results;
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    
    // Extract our data
    console.log(data);
    const { title, description, image } = data.products.data[0].attributes;

    return(
        <DetailsStyle>
            <img src={image.data.attributes.formats.medium.url} alt={title} />
            <ProductInfo>
                <h2>{title}</h2>
                <p>{description}</p>
                <Quantity>
                    <span>Quantity</span>
                    <button>
                        <AiFillMinusCircle onClick={decreaseQty} />
                    </button>
                    <p>{qty}</p>
                    <button>
                        <AiFillPlusCircle onClick={increaseQty}/>
                    </button>
                </Quantity>
                <Buy onClick={() => onAdd(data.products.data[0].attributes, qty) }>Add to cart</Buy>
            </ProductInfo>
        </DetailsStyle>
    );
}