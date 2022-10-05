package com.shivam.quoteswithsecurity.service;

import java.util.List;

import com.shivam.quoteswithsecurity.entity.Quote;

public interface QuoteService {
	
	public Quote saveQuote(Quote quote);
	
	public List<Quote> findAll();
	
	public Quote findById(int id);
	
	public String delete(int id);

}
