/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import ListContainer from '../../components/ListContainer/ListContainer';
import { useRecoilState } from "recoil";
import { dateStateAtom } from "../../components/atoms/dateAtom";
import api from "../../apis/instance";


function MainPage(props) {

    // 상태(useState)
    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);
    
    const [ todoList, setTodoList ] = useState([]);

    // getTodoList 
    useEffect(() => {
        getTodoList();
    }, [dateState]);

    const getTodoList = async () => {
        let responseDate = null;
        
        try {
            responseDate = await api.get(`/todolist/${dateState}`);
            setTodoList(responseDate.data);
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div css={s.MainPageLayout}>
            <HeaderContainer getTodoList={getTodoList} />
            <div css={s.listContainerLayout}>
                <ListContainer todoList={todoList} getTodoList={getTodoList} title={"전체"} />
                <ListContainer todoList={todoList.filter(todo => todo.status === 0)} getTodoList={getTodoList} title={"미완료"}/>
                <ListContainer todoList={todoList.filter(todo => todo.status === 1)} getTodoList={getTodoList} title={"완료"}/>
            </div>
        </div>
    );
}

export default MainPage;