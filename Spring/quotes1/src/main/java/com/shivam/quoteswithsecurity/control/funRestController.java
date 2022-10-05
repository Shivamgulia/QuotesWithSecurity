package com.shivam.quoteswithsecurity.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shivam.quoteswithsecurity.entity.Comment;
import com.shivam.quoteswithsecurity.entity.Quote;
import com.shivam.quoteswithsecurity.service.CommentService;
import com.shivam.quoteswithsecurity.service.QuoteService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders ="*")
public class funRestController {
	
	@Autowired
	private QuoteService quoteService;
	
	@Autowired
	private CommentService commentService;
	
	@GetMapping("/quotes")
	public List<Quote> getQuotes() {
		return quoteService.findAll(); 
	}
	
	@PostMapping("/quotes")
	public Quote saveQuote(@RequestBody Quote quote) {
//		System.out.println(quote);
		quoteService.saveQuote(quote);
		return quote;
	}
	
	@GetMapping("/quotes/{quoteId}")
	public Quote getQuote(@PathVariable String quoteId) {
		int id = Integer.parseInt(quoteId);
		return quoteService.findById(id); 
	}
	
	@DeleteMapping("/quotes/{quoteId}")
	public String delete(@PathVariable String quoteId) {
		int id = Integer.parseInt(quoteId);
		return quoteService.delete(id); 
	}
	
	@GetMapping("/comments")
	public List<Comment> getComments() {
		return commentService.findAll(); 
	}
	
	@PostMapping("/comments")
	public Comment saveComment(@RequestBody Comment comment) {
//		System.out.println(quote);
//		Quote q = quoteService.findById(comment.quote_id);
//		q.addComment(comment);
		commentService.saveComment(comment);
		
		return comment;
	}

}
