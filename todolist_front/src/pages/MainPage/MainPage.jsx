/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import ListContainer from '../../components/ListContainer/ListContainer';


function MainPage(props) {
    return (
        <div css={s.MainPageLayout}>
            <HeaderContainer/>
            <div css={s.listContainerLayout}>
                <ListContainer/>
                <ListContainer/>
                <ListContainer/>
            </div>
        </div>
    );
}

export default MainPage;