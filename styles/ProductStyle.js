import styled from "styled-components";

export const ProductStyle = styled.div`
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    img{
        cursor: pointer;
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    h2{
        padding: 0.5rem 0;
    }
`