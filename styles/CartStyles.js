import styled from "styled-components";
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
    width: 30%;
    background: #f1f1f1;
    padding: 2rem 4rem;
    overflow-y: scroll;
    position: relative;
`;

export const Card = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background: #fff;
    padding: 2rem;
    margin: 2rem 0;

    img{
        width: 8rem;
    }
`;

export const CardInfo = styled(motion.div)`
    width: 50%;

    div{
        display: flex;
        flex-direction: space-between;
    }
`;

export const EmptyStyle = styled(motion.div)`
    position: absolute;
    top: 0;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;

    .cart-wrapper{
        height: 36px;
        width: 36px;
        border-radius: 50%;
        background-color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1{
        margin-top: 1rem;
    }

    svg{
        font-size: 1.25rem;
        color: #fff;
    }
`
export const Checkout = styled(motion.div)`
    background-color: #f1f1f1;
    position: sticky;
    bottom: 0;
    margin: 0 -4rem;
    padding: 1rem 4rem 0;


    button{
        background-color: var(--primary);
        padding: 1rem 2rem;
        width: 100%;
        color: #fff;
        margin-top: 2rem;
        cursor: pointer;
        border: none;
    }
`

export const Cards = styled(motion.div)`

`