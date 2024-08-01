import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import api from '../../apis/instance';
import { useRecoilState } from 'recoil';
import { dateStateAtom } from '../atoms/dateAtom';

function HeaderContainer(props) {

    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);

    const [ todo, setTodo ] = useState({
        content: "",
        status: 0,
        date: ""
    });

    const handleInputChange = (e) => {
        const today = new Date();
        const year = today.getFullYear();
        const temp = today.getMonth() + 1;
        const month = temp -10 < 0 ? "0" + temp : temp;
        const date = today.getDate();
        
        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value,
                date: `${year}-${month}-${date}`
            }
        })
    };

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleAddClick();
        }
    };

    const handleAddClick = async () => {
        let responseData = null;
        try {
            const response = await api.post("/todo", todo);
            responseData = response.data;
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
        return responseData;
    };

    const handleDateChange = (e) => {
        setDateState(e.target.value);
    };

    return (
        <div css={s.HeaderContainerLayout}>

        <div css={s.TitleLayout}>
            <h1 css={s.h1Title}><span>📋 </span>TODOLIST</h1>
            <div css={s.InputLayout}>
                <input css={s.Input} type="text" name='content' value={todo.content} onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
                <button css={s.ButtonLayout} onClick={handleAddClick}>추가</button>
            </div>
        </div>

        <div css={s.InputByLayout}>
            <input css={s.dateInput} type="month" value={dateState} onChange={handleDateChange}/>
        </div>
        
    </div>
 
    );
}

export default HeaderContainer;