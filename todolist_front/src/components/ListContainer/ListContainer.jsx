import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ListContainer({ todoList, getTodoList, title }) {

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
    return (
        <div css={s.containerBox}>

            <h2 css={s.h2Title}>{title}</h2>   
            
            {
                todoList.map(todo => 
                    <div key={todo.todoId} css={s.container}>
                       
                        <input id={todo.todoId} css={s.checkBox} type="checkBox" checked={todo.status === 1} onChange={handleCheckChange}/>

                        <div css={s.inputLayout}>
                            <label htmlFor={todo.todoId}>{todo.content}</label>
                        </div>

                        <div css={s.buttonLayout}>
                            <button css={s.todoUpdateButton}>수정</button>
                            <button css={s.todoDeleteButton} name={todo.todoId} onClick={handleDeleteClick}>삭제</button>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default ListContainer;