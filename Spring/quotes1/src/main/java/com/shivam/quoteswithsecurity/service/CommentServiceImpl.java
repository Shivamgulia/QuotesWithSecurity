package com.shivam.quoteswithsecurity.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shivam.quoteswithsecurity.dao.CommentRepository;
import com.shivam.quoteswithsecurity.entity.Comment;


@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentRepository commentRepository;

	@Override
	public Comment saveComment(Comment comment) {
		
		Comment c = commentRepository.save(comment);
		return c;
		
	}

	@Override
	public List<Comment> findAll() {
		
		List<Comment> allComments = commentRepository.findAll();
		return allComments;
	}
	
	@Override
	public Comment findById(int id) {
		Optional<Comment> comment = commentRepository.findById(id);
		if(!comment.isPresent()) {
			throw new RuntimeException("Did not find Quote with id - " + id);
		}
		return comment.get();
	}

}
