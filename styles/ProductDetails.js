import styled from "styled-components";

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    img{
        width: 40%;
    }
`;

export const ProductInfo = styled.div`
    width: 40%;

    button{
        font-size: 1rem;
        font-weight: 500;
        padding: 1.5rem 1rem;
        cursor: pointer;
    }
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;

    button{
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
        padding: 0 0.5rem;
        cursor: pointer;
    }

    p{
        width: 1rem;
        text-align: center;
    }

    span{
        color: var(--primary);
    }

    svg{
        color: #494949;
    }
`;

export const Buy = styled.div`
    width: 100%;
    background: var(--primary);
    border: 1px solid var(--primary);
    color: #fff;
    font-weight: 500;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover{
        background: #fff;
        color: var(--primary);
        transition: all 0.2s ease-in-out;
    }
`;