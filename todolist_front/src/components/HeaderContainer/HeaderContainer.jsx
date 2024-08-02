import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import api from '../../apis/instance';
import { useRecoilState } from 'recoil';
import { dateStateAtom } from '../atoms/dateAtom';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function HeaderContainer({ getTodoList }) {

    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);

    const [ todo, setTodo ] = useState({
        content: "",
        status: 0,
        date: dateState
    });

    const handleInputChange = (e) => {
        
        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value
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
            getTodoList();
            setTodo({
                content: "",
                status: 0,
                date: ""
            });
        } catch (error) {
            console.error(error);
        }
        return responseData;
    };

    const handleDateChange = (e) => {
        setDateState(e.target.value);
        
    };

    const handleaddArrowOnClick = () => {
        
        setDateState(dateState => {
            const date = new Date(dateState);
            date.setMonth(date.getMonth() + 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return newdate;
        })
    }

    const handleArrowOnClick = () => {
        setDateState(dateState => {
            const date = new Date(dateState);
            date.setMonth(date.getMonth() - 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return newdate;
        })
    }

    return (
        <div css={s.HeaderContainerLayout}>

        <div css={s.TitleLayout}>
            <h1 css={s.h1Title}><span>📋 </span>TODOLIST</h1>
            <div css={s.InputLayout}>
              
                <input css={s.addDateInput} 
                    type="date" 
                    name='date' 
                    onChange={handleInputChange}
                />
               
               <label css={s.fontColor}>Todo</label>
                <input css={s.Input} 
                    type="text" name='content' 
                    value={todo.content} 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    placeholder='입력하세요'
                />

                <BsPencilSquare css={s.ButtonLayout} onClick={handleAddClick}>추가</BsPencilSquare>
            </div>
        </div>

        <div css={s.InputByLayout}>
            <FaArrowAltCircleLeft onClick={handleArrowOnClick}/>
            <input css={s.dateInput} type="month" value={dateState} onChange={handleDateChange}/>
            <FaArrowAltCircleRight onClick={handleaddArrowOnClick}/>
        </div>
        
    </div>
 
    );
}

export default HeaderContainer;