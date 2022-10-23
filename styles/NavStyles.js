import styled from "styled-components";

export const NavStyles = styled.nav`
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        font-size: 1.2rem;
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 3rem;
    }

    h3{
        color: var(--primary);
        font-size: 0.875rem;
        font-weight: 500;
        padding: 0.25rem;
    }

    svg{
        font-size: 1.25rem;
    }

    span{
        background: #ff2626;
        color: #fff;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        position: absolute;
        top: 4%;
        right: 9.5%;
        pointer-events: none;
    }
`;