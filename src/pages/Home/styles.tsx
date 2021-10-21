import styled from 'styled-components';

export const Body = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #282c34;
`

export const Container = styled.div`
    height: 100%;
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(max-width: 1024px) {
        width: 100%;
    }
`

export const InputContainer = styled.div`
    width: 100%;    
    display: flex;
`

export const Input = styled.input`
    height: 40px;
    margin-right: 10px;
    padding: 0px 20px;
    flex-grow: 1;
    border: none;
    border-radius: 4px;
    color: #282c34;
`

export const Button = styled.button`
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: mediumseagreen;
    color: #282c34;
    font-weight: bold;

    &:hover {
        background-color: #1ff37a;
        cursor: pointer;
        box-shadow: 0px 0px 2px 2px #1ff37a;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
`
