import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    margin: 3rem 1.5rem;
    color: #B3AEA6;
    @media (max-width: 768px) {
        margin: 3rem 0px;   
    }
`

const Results = styled.div`
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin: 0px;
}
`

const Card = styled.div`
    height: 15rem;
    width: 10rem;
    display: inline-block;
    position: relative;
    margin: 10px;

    @media (max-width: 768px) {
        width: 85vw;
        overflow: hidden;
    }
    
    img{
        position: absolute:
        height: 15rem;
        width: 10rem;
        border: none;
        border-radius: 10px;

        @media (max-width: 768px) {
            width: 85vw;
            margin-top: -5rem;
        }
    }

    p{
        position: absolute;
        bottom: 0;
        color: #fff;
        padding-left: 10px;
        height: 3rem;
        text-align: bottom;
        overflow: hidden;
    }
`

const Gradient = styled.div`
    position: absolute;
    width: 10rem;
    height: 15rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    bottom: 0;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 85vw;
        border-radius: 0px;
    }
    `



const Search = () => {
    const query = useParams().query;
    const [movies, setMovies] = useState([]); // state hook for getting movies

    useEffect(() => {
        const getResults = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=23700a5b8cec4946243797a562c1bf8f&language=en-US&query=${query}&page=1`)
            const data = await response.json();
            setMovies(data.results);
        }

        getResults();
    }, [])

    return (
        <Wrapper>
            <h2>Search results for: "{query}"</h2>
            <Results>
                {movies.map((movie) => (
                    <Card>
                        <Link to={'/movie/' + movie.id} >
                            <img src={movie.poster_path === null ? "https://picsum.photos/160/240" : "https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                            <Gradient></Gradient>
                            <p><b>{movie.title}</b></p>
                        </Link>
                    </Card>
                ))}
            </Results>
        </Wrapper>
    )
}

export default Search