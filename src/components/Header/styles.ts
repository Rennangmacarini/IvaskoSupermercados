import styled from 'styled-components';
export const MenuContainer = styled.div`
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    display: none;
    justify-content: center;
    margin-top: 4.8rem;
    transition: 0.2s ease-in-out;
    &.open{
      display: flex;
    }
`