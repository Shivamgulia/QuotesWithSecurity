package com.shivam.quoteswithsecurity.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shivam.quoteswithsecurity.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

}
