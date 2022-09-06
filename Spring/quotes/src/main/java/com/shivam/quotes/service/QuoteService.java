package com.shivam.quotes.service;

import java.util.List;

import com.shivam.quotes.entity.Quote;

public interface QuoteService {
	
	public Quote saveQuote(Quote quote);
	
	public List<Quote> findAll();
	
	public Quote findById(int id);
	
	public String delete(int id);

}
