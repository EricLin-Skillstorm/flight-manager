import styled from "styled-components";

export const NavItem = styled.div`
    margin: ${({margin}) => margin ?? '0em 1em'};
    padding: ${({padding}) => padding ?? '0px'};
`;
