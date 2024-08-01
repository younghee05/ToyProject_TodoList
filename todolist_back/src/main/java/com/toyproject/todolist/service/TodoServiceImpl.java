package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImpl implements TodoService{

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public int addTodo(ReqAddTodoDto reqAddTodoDto) {
        Todo todo = Todo.builder()
                .content(reqAddTodoDto.getContent())
                .status(reqAddTodoDto.getStatus())
                .date(reqAddTodoDto.getDate())
                .build();
        return todoMapper.save(todo);
    }
}
