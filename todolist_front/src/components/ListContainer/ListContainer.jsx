import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ListContainer({ todoList, getTodoList, title }) {

    return (
        <div css={s.containerBox}>

            <h2 css={s.h2Title}>{title}</h2>   
            
            {
                todoList.map(todo => 
                    <div css={s.container}>
                       
                        <input css={s.checkBox} type="checkBox"/>

                        <div css={s.inputLayout}>
                            <label htmlFor={todo.todoId}>{todo.content}</label>
                        </div>

                        <div css={s.buttonLayout}>
                            <button css={s.todoUpdateButton}>수정</button>
                            <button css={s.todoDeleteButton}>삭제</button>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default ListContainer;