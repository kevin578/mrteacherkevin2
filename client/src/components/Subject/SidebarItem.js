import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #979797;
    overflow: auto;
`

const ItemName = styled.p`
    margin-left: 15px;
`


class SidebarItem extends React.Component {

    render() {
        return (
            <Wrapper>
                <ItemName>{this.props.children}</ItemName>
            </Wrapper>
        )
    }
}

export default SidebarItem;