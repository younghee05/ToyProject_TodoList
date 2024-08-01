package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.RespGetListDto;

import java.util.List;

public interface TodoService {
    int addTodo(ReqAddTodoDto reqAddTodoDto);
    List<RespGetListDto> findTodoLists(String date);
}
