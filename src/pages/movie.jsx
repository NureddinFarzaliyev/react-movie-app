import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
        display: flex;
        color: #B3AEA6;
        margin-top: 4rem;
        position: absolute;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            padding-top: 3.5rem;
            width: 100%;
        }
    `

const Poster = styled.img`
        height: 35rem;
        margin: 2rem 5rem;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, .5) 0px 7px 29px 0px;

        @media (max-width: 768px) {
            width: 90vw;
            height: inherit;
        }
    `

const Info = styled.div`
        padding: 1rem;
        width: 50%;
        @media (max-width: 768px) {
            width: 85%;
        }
    `

const Title = styled.h1`
    `

const Vote = styled.h3`
    `

const Detail = styled.div`
    `

const Overview = styled.div`
    margin: .5rem 0rem;

    @media (max-width: 768px) {
        margin: 0rem;
    }
    `

const ImdbLink = styled.div`
    @media (max-width: 768px) {
        margin-top: 1rem;
        color: #fff;
    }

    > *{
        color: #fff;
    }
    `

const key = "REACT_APP_API_KEY"

const Movie = () => {
    const [movie, setMovies] = useState([]);
    let id = useParams().id;

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key={key}&language=en-US`)
            const data = await response.json();
            setMovies(data);
        }

        getData();
    }, [])

    return (
        <Wrapper>
            <Poster src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}></Poster>
            <Info>
                <Title>{movie.title}</Title>
                <Vote>{movie.vote_average} ({movie.vote_count} Votes)</Vote>
                <Detail>Duration: {movie.runtime} minutes</Detail>
                <Detail>Release Date: {movie.release_date}</Detail>
                <Overview>{movie.overview}</Overview>
                <ImdbLink><Link to={"https://www.imdb.com/title/" + movie.imdb_id} target="_blank">IMDB Page</Link></ImdbLink>
            </Info>
        </Wrapper>
    )
}

export default Movie
