package com.shivam.quotes.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="quotes")
public class Quote {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="quote_id")
	private int id;
	
	@Column(name="quote")
	private String quote;
	
	@Column(name="author")
	private String author;
		
	@OneToMany(cascade = CascadeType.ALL, fetch=FetchType.LAZY)
	@JoinColumn(name="quote_id")
	private List<Comment> comments;
	
	
	public Quote() {
		
	}
	
	public Quote(String quote, String author) {
		super();
		this.quote = quote;
		this.author = author;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getId() {
		return id;
	}

	public String getQuote() {
		return quote;
	}


	public void setQuote(String quote) {
		this.quote = quote;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public void add(Comment tempComment) {
		if(comments == null) comments = new ArrayList<>();
		
		comments.add(tempComment);
		
//		tempComment.setQuote(this);
	}
	
	public void addComment(Comment theComment) {
		if(comments == null) {
			comments = new ArrayList<>();
		}
		
		comments.add(theComment);
	}
	
	@Override
	public String toString() {
		return "Quote [id=" + id + ", quote=" + quote + ", author=" + author + "]";
	}
	

}
