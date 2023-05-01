import styled from 'styled-components';

const Span = styled.div`
        position:relative;
        left:${props=>props.left};
        right:${props=>props.right};
        bottom:${props=>props.bottom};
        top:${props=>props.top};
        color:${props=>props.color};
        display:${props=>props.display};
        display:inline-block;
        font-weight:${props=>props.fontWeight};
    `;

export default Span;