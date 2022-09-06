package com.shivam.quotes.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shivam.quotes.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
