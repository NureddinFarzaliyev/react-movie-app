import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Link } from 'react-router-dom';
import { Header, Parent, Wrapper, Card, Image, Gradient, Title } from './styled'

const key = "REACT_APP_API_KEY"

const Latest = () => {
    const [movies, setMovies] = useState([]); // state hook for getting movies

    useEffect(() => {
        const getData = async () => {
            // Fetching data
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key={key}&language=en-US`)
            const data = await response.json();
            // assign data to movies hook
            setMovies(data.results);
            console.log(movies)
        }

        getData();
    }, [])

    const pageCount = window.innerWidth < 768 ? 1 : 6;
    const options = {
        autoplay: false,
        interval: 5000,
        perPage: pageCount,
        pagination: false
    }
    return (
        <>
            <Header>Upcoming Movies</Header>
            <Parent>
                <Wrapper>
                    <Splide options={options}>{
                        movies.map((movie) => (
                            <SplideSlide>
                                <Link to={'/movie/' + movie.id}>
                                    <Card key={movie.id}>
                                        <Image src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}></Image>
                                        <Gradient></Gradient>
                                        <Title>{movie.title}</Title>
                                    </Card></Link></SplideSlide>)
                        )}</Splide></Wrapper>
            </Parent >
        </>
    )
}

export default Latest
