import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../apis/instance';
import ReactModal from 'react-modal';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function ListContainer({ todoList, getTodoList, title }) {

    // 상태
    const [ isModalOpen, setModalOpen ] = useState(false);
    const [ content, setContent ] = useState({
        todoId: "",
        content: ""
    });

    // 삭제 버튼을 클릭 했을 때 삭제되도록 하는 기능 
    const handleDeleteClick = async (e) => {
        const isDelete = window.confirm("삭제하시겠습니까?");
       
        if(isDelete){
            try {
                const response = await api.delete(`/todo/${e.currentTarget.getAttribute('name')}`);
                console.log(response);
                getTodoList();
    
            } catch (e) {
                console.error(e);
            }
        }
    };
 
    // 체크박스에 체크 했을 때 다른 칸으로 옮겨 갈 수 있게 해주는 기능 
    const handleCheckChange = async (e) => {
        try {
            const response = await api.put(`/todo/${e.target.id}/status`);
            
        } catch (e) {
            console.error(e);
        }
        getTodoList();
      
    };

    // 수정 버튼을 눌렀을 때 Modal창이 뜨면서 수정할 수 있게 끔 해주는 기능 
    const getTodo = async(todoId) => {
        try {
            const response = await api.get(`/todo/${todoId}`)
            setContent(content => {
                return {
                    ...content,
                    content: response.data
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    // 수정 버튼 클릭
    const handleUpdateClick = async(e) => {
        const id = e.currentTarget.getAttribute('name');
        getTodo(id);
        setModalOpen(true);
        setContent (todo => {
            return {
                ...todo,
                todoId: id
            }
            
        })
    };

    // 모달창에 완료버튼
    const handleCompleteClick = async() => {
        if (content.content.trim() === "") {
            alert("빈 값은 입력할 수 없습니다.")
            return;
        }
        console.log(content);
        try {
            const response = await api.put("/todo", content);
            closeModal();
            getTodoList();
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        setContent(todo => {
            return {
                ...todo,
                content: e.target.value
            }
            
        })
    };

    // 엔터를 치면 완료가 되겠 끔
    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleCompleteClick();
        }
    };

    // 모달 취소버튼
    const handleCancelClick = () => {
        setModalOpen(false);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        //ListContainer 공간의 큰 틀 
        <div css={s.containerBox}>
            {/* 수정 버튼을 눌렀을 때 모달창을 띄워주는 */}
            <ReactModal
                // 모달창의 디자인
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#919191',
                        
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                {/* 모달창의 큰틀 */}
                <div css={s.modalLayout}>
                    {/* 모달창 제목 */}
                    <h2 css={s.modalH2Title}>ToDo 수정</h2>

                    {/* 모달창의 입력창 */}
                    <input css={s.modalInput} type="text" name="content" 
                        onChange={handleInputChange} 
                        onKeyDown={handleInputKeyDown} 
                        value={content.content}
                        autoFocus
                    />

                    {/* 모달창의 완료 & 취소 버튼 */}
                    <div css={s.modalCompleteAndCancelLayout}>
                        <button css={s.modalComplete} onClick={handleCompleteClick} ><FaCheck size={40} /></button>
                        <button css={s.modalCancel} onClick={handleCancelClick}><IoClose size={55} /></button>
                    </div>
                      
                </div>
            </ReactModal> {/* 모달창의 끝 */}

            {/* 각 container의 제목 */}
            <h2 css={s.h2Title}>{title}</h2>   
            
            {
                // 리스트를 맵으로 돌려(반복하여) 저장된 리스트들을 보이겠끔 하기 위한
                todoList.map(todo => 
                    <div key={todo.todoId} css={s.container}>
                        {/* 체크박스를 누를 시 상태가 변화되도록 하는 */}
                        <input id={todo.todoId} css={s.checkBox} type="checkBox" checked={todo.status === 1} onChange={handleCheckChange}/>

                        {/* 리스트 목록들 */}
                        <div css={s.inputLayout}>
                            <label htmlFor={todo.todoId}>{todo.content}</label>
                        </div>

                        {/* 수정 & 삭제 버튼 */}
                        <div css={s.buttonLayout}>
                            <MdModeEdit size={20} css={s.todoUpdateButton} name={todo.todoId} onClick={handleUpdateClick}></MdModeEdit>
                            <MdDelete size={20} css={s.todoDeleteButton} name={todo.todoId} onClick={handleDeleteClick}></MdDelete>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default ListContainer;