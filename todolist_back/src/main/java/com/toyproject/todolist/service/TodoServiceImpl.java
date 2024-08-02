package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.RespGetListDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    @Override
    public List<RespGetListDto> findTodoLists(String date) {
        List<RespGetListDto> dtos = new ArrayList<>();
        List<Todo> todos = todoMapper.findTodoList(date);

        for (Todo todo : todos) {
            RespGetListDto dto = RespGetListDto.builder()
                    .todoId(todo.getTodoId())
                    .content(todo.getContent())
                    .status(todo.getStatus())
                    .build();

            dtos.add(dto);
        }

        return dtos;
    }
    @Override
    public int deleteTodo(int todoId) {
        return todoMapper.delete(todoId);
    }

    @Override
    public int updateTodoStatus(int todoId) {
        return todoMapper.updateStatus(todoId);
    }
}
