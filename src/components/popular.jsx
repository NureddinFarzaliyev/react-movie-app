import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Link } from 'react-router-dom';

const key = "REACT_APP_API_KEY"

const Popular = () => {
    const [movies, setMovies] = useState([]); // state hook for getting movies

    useEffect(() => {
        const getPopular = async () => {
            // Fetcing data
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key={key}&language=en-US`)
            const data = await response.json();
            // assign data to movies hook
            setMovies(data.results);
        }

        getPopular();
    }, [])


    const Parent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {

      }
    `

    const Wrapper = styled.div`
    width: 60rem;
    height: 30rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-top: 6.5rem;

    @media (max-width: 768px) {
        width: 85vw;
        margin-top: 10rem;
      }
`
    const Header = styled.h1`
    position: absolute;
    z-index: 20;
    color: #fff;
    width: 60rem;
    background-color: rgba(0,0,0,.8);
    padding: .5rem 1rem; 
    box-sizing: border-box;
    margin-top: -.05rem;
    border-radius: 20px 20px 0 0;

    @media (max-width: 768px) {
        width: 85vw;
        text-align: center;
        font-size: 1.5rem;
      }
    `

    const Card = styled.div`
    height: 30rem;
    width: 60rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    `

    const Title = styled.h2`
    color: #fff;
    font-size: 1.8rem;
    position: absolute;
    bottom: 0px;
    margin: 2rem 3rem;
    width: 85vw;

    @media (max-width: 768px) {
        margin: 2rem .8rem;
        font-size: 1.2rem;
        text-align: center;
      }
    `

    const Image = styled.img`
    position: absolute;
    width: 60rem;
    margin-top: -10rem;
    overflow: hidden;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 85vw;
        margin-top: 0rem;
      }
    `

    const Gradient = styled.div`
    position: absolute;
    width: 60rem;
    height: 30rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

    @media (max-width: 768px) {
        width: 85vw;
        border-radius: 20px;
      }
    `



    return (
        <Parent>
            <Wrapper>
                <Header>Trending Now</Header>
                <Splide options={{
                    autoplay: true,
                    interval: 3000
                }}>{
                        movies.map((movie) => (
                            <SplideSlide>
                                <Link to={'/movie/' + movie.id}>
                                    <Card key={movie.id}>
                                        <Image className='popImg' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}></Image>
                                        <Gradient></Gradient>
                                        <Title>{movie.title} ({movie.vote_average})</Title>
                                    </Card></Link></SplideSlide>)
                        )}</Splide></Wrapper>
        </Parent >
    )

}

export default Popular
