package com.shivam.quotes.service;

import java.util.List;

import com.shivam.quotes.entity.Comment;

public interface CommentService {
	
	public Comment saveComment(Comment Comment);
	
	public List<Comment> findAll();
	
	public Comment findById(int id);

}
