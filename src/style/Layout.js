import styled from 'styled-components';

const Layout = styled.div`
        background:${props=>props.background};
        position:relative;
        left:${props=>props.left};
        right:${props=>props.right};
        bottom:${props=>props.bottom};
        top:${props=>props.top};
        display:${props=>props.display};
        justify-content:${props=>props.justifyContent};
        flex-flow:${props=>props.flexFlow};
        align-items:${props=>props.alignItems};
        width:${props=>props.width};
    `;

export default Layout;