import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import api from '../../apis/instance';
import { useRecoilState } from 'recoil';
import { dateStateAtom } from '../atoms/dateAtom';
import { BsPencilSquare } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { TiPlus } from "react-icons/ti";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



function HeaderContainer({ getTodoList }) {

    // 상태
    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);

    const [ todo, setTodo ] = useState({
        content: "",
        status: 0,
        date: dateState
    });

    // 날짜를 바꾸고 입력하였을 때 추가 되도록 하게 설정
    const handleInputChange = (e) => {
        
        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value
            }
        })
    };

    // 엔터를 눌렀을 때 추가 되겠끔
    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleAddClick();
        }
    };

    // 추가버튼을 클릭하면 추가 되겠끔
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

    // 화살표를 눌렀을 때 날짜가 바뀌면서 달마다 리스트 뜨게 해주는 기능 
    const handleaddArrowOnClick = () => {
        
        setDateState(dateState => {
            const date = new Date(dateState);
            date.setMonth(date.getMonth() + 1);
            const newdate = date.getFullYear() + "-" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1));
            // console.log(newDate)
            return newdate;
        })
    }
    
    const handleDateChange = (e) => {
        setDateState(e.target.value);
        
    };

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
                {/* TODOLIST의 메인 제목 */}
                <h1 css={s.h1Title}><span>📋 </span>TODOLIST</h1>
                <div css={s.InputLayout}>

                    {/* 날짜를 바꾸면 입력 되겠끔 */}
                    <input css={s.addDateInput} 
                        type="date" 
                        name='date' 
                        onChange={handleInputChange}
                    />
                    {/* 입력창 */}
                    <div css={s.addInputLayout}>
                        <label css={s.fontColor}>Todo</label>
                            <input css={s.inputlayout} 
                                type="text" name='content' 
                                value={todo.content} 
                                onChange={handleInputChange} 
                                onKeyDown={handleInputKeyDown}
                                placeholder='입력하세요'
                            />

                            {/* 추가 버튼을 누르면 데이터 값이 추가 되겠끔 */}
                            <TiPlus css={s.ButtonLayout} onClick={handleAddClick}>추가</TiPlus>
                    </div>
                </div>
            </div>

            {/* 화살표를 누를 때 달마다 조회 되겠끔 */}
            <div css={s.InputByLayout}>
                <IoIosArrowBack size={50} css={s.ArrowLayout} onClick={handleArrowOnClick}/>
                <input css={s.dateInput} type="month" value={dateState} onChange={handleDateChange}/>
                <IoIosArrowForward size={50} css={s.ArrowLayout} onClick={handleaddArrowOnClick}/>
            </div>
        
        </div>
 
    );
}

export default HeaderContainer;