import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({backgroundColor}) => backgroundColor ?? '#640564'};
    color: ${({color}) => color ?? 'white'};
    font-size: 25px;
    padding: 25px 50px 25px 50px;
    display: flex;
    justify-content: space-between;
`;