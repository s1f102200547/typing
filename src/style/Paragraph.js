import styled from "styled-components";

const Paragraph = styled.p`
    width:${props=>props.width};
    font-size:${props=>props.fontSize};
    font-weight:${props=>props.fontWeight};
    font-family:${props=>props.fontFamily};
    letter-spacing:${props=>props.letterSpacing};
    transform:${props=>props.transform};
    color:white;
`;

export default Paragraph;