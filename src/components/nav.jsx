import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const NavEl = styled.div`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 1rem;
margin: 20px;
background-color: #021E34;
height: 50px;
line-height: 50px;
padding-left: 2rem;
margin: 0;
display: flex;
justify-content: space-between;
width: 100%;
position: fixed;
z-index: 999;

@media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 6rem;
    align-items: center;
    padding: 3.5rem 0rem;
    justify-content: space-around;
    line-height: 0px;
}
`

const Logo = styled.h2`
margin: 0px;
color: #fff;
display: inline-block;

@media (max-width: 768px) {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
`

const Form = styled.form`

@media (max-width: 768px) {
    margin-top: 1.2rem;
  }


input{
    height: 30px;
    margin: 10px 2rem;
    border: none;
    border-radius: 10px;
    width: 250px;
    padding: 0px 10px;
    background-color: #ADA8A0;
    color: black;
}
`

const Nav = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const submitHandler = (e) => {
        navigate('/search/' + input)
    }

    return (
        <NavEl>
            <Link to='/'><Logo>MovieApp</Logo></Link>
            <Form onSubmit={submitHandler}>
                <input placeholder='Search Movies' type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            </Form>
        </NavEl >
    )
}

export default Nav
