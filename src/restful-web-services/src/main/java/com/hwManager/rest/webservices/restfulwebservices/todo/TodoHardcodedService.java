package com.hwManager.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import java.util.Date;
@Service
public class TodoHardcodedService {
	private static List<todo> todos = new ArrayList<>();
	private static long idCounter=0;
	static {
		todos.add(new todo(++idCounter,"hwManager","Learn to Dance",new Date(),false));
		todos.add(new todo(++idCounter,"hwManager","Learn about Microservices",new Date(),false));
		todos.add(new todo(++idCounter,"hwManager","Learn about Angular",new Date(),false));
	}
	public List<todo> findAll(){
		return todos;
	}
	public todo save(todo todoi) {
		if(todoi.getId()==-1 || todoi.getId()==0) {
			todoi.setId(++idCounter);
			todos.add(todoi);
		}else {
			deleteById(todoi.getId());
			todos.add(todoi);
		}
		return todoi;
	}
	public todo deleteById(long id) {
		todo todoi =findById(id);
		if(todoi==null) return null;
		if(todos.remove(todoi)) {
			return todoi;
		}
		return null;
	}

	public todo findById(long id) {
		for(todo todoi:todos) {
			if(todoi.getId()==id) {
				return todoi;
			}
		}
		// TODO Auto-generated method stub
		return null;
	}

}
