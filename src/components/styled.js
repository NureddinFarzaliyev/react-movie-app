import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;

    @media (max-width: 768px) {
        width: 85vw;
    }
`

export const Card = styled.div`
    height: 18rem;
    width: 12rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    margin-left: 1.5rem;

    @media (max-width: 768px) {
        width: 85vw;
        margin-left: 0rem;
    }

    img{
        @media (max-width: 768px) {
            width: 85vw;
            margin-top: -2rem;
        }
    }
    `

export const Title = styled.h2`
    color: #fff;
    font-size: 1rem;
    position: absolute;
    bottom: 0px;
    margin: 2rem 1rem;
    text-align: center;
    `

export const Image = styled.img`
    position: absolute;
    width: 12rem;
    overflow: hidden;
    border-radius: 20px;
    `

export const Gradient = styled.div`
    position: absolute;
    width: 12rem;
    height: 18rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    @media (max-width: 768px) {
        width: 85vw;
    }
    `

export const Parent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    `

export const Header = styled.h1`
    margin: 4.5rem 3.5rem 0rem 3.5rem;
    color: #fff;

    @media (max-width: 768px) {
        text-align: center;
        font-size: 1.5rem;
        margin-top: 3rem;
    }
    `