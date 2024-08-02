import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../apis/instance';
import ReactModal from 'react-modal';

function ListContainer({ todoList, getTodoList, title }) {

    const [ isModalOpen, setModalOpen ] = useState(false);
    const [ content, setContent ] = useState({
        todoId: "",
        content: ""
    });

    const handleDeleteClick = async (e) => {
        const isDelete = window.confirm("삭제하시겠습니까?");
       
        if(isDelete){
            try {
                const response = await api.delete(`/todo/${e.target.name}`);
                console.log(response);
                getTodoList();
    
            } catch (e) {
                console.error(e);
            }
        }
    }

    const handleCheckChange = async (e) => {
        try {
            const response = await api.put(`/todo/${e.target.id}/status`);
            
        } catch (e) {
            console.error(e);
        }
        getTodoList();
      
    }

    const closeModal = () => {
        setModalOpen(false);
    }

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
    }

    const handleUpdateClick = async(e) => {
        await getTodo(e.target.name);
        setModalOpen(true);
        setContent (todo => {
            return {
                ...todo,
                todoId: e.target.name
            }
            
        })
    }

    const handleCompleteClick = async() => {
        console.log(content);
        try {
            const response = await api.put("/todo", content);
            closeModal();
            getTodoList();
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            handleCompleteClick();
        }
    }

    const handleCancelClick = () => {
        setModalOpen(false);
    }

    const handleInputChange = (e) => {
        setContent(todo => {
            return {
                ...todo,
                content: e.target.value
            }
            
        })
    }
    return (
        <div css={s.containerBox}>
            <ReactModal
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#b4b4b4',
                        
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                <div css={s.modalLayout}>
                    <h2 css={s.modalH2Title}>ToDo 수정</h2>
                    <input css={s.modalInput} type="text" name="content" onChange={handleInputChange} onKeyDown={handleInputKeyDown} value={content.content}/>
                    <div css={s.modalCompleteAndCancelLayout}>
                        <button css={s.modalComplete} onClick={handleCompleteClick} >완료</button>
                        <button css={s.modalCancel} onClick={handleCancelClick}>취소</button>
                    </div>
                </div>
            </ReactModal>
            <h2 css={s.h2Title}>{title}</h2>   
            
            {
                todoList.map(todo => 
                    <div key={todo.todoId} css={s.container}>
                       
                        <input id={todo.todoId} css={s.checkBox} type="checkBox" checked={todo.status === 1} onChange={handleCheckChange}/>

                        <div css={s.inputLayout}>
                            <label htmlFor={todo.todoId}>{todo.content}</label>
                        </div>

                        <div css={s.buttonLayout}>
                            <button css={s.todoUpdateButton} name={todo.todoId} onClick={handleUpdateClick}>수정</button>
                            <button css={s.todoDeleteButton} name={todo.todoId} onClick={handleDeleteClick}>삭제</button>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default ListContainer;