import styled from "styled-components";
import { Link } from "react-router-dom";

export const Icon = styled(Link)`
margin-left: 32px;

text-decoration: none;
color: #101010;
font-weight: 600;
font-size: 25px;

@media screen and (max-width: 400px){
    margin-left: 16px;
    margin-top: 8px;
}
`;