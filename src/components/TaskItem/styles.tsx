import styled from 'styled-components';

interface WrapperProps {
    done: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    min-height: 40px;
    margin-bottom: 10px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 0 2px #fff;
    border-radius: 4px;
    color: ${props => props.done ? '#1ff37a' : '#fff'};

    input {
        width: 20px;
        height: 20px;
        margin-left: auto;
    }
    
`
