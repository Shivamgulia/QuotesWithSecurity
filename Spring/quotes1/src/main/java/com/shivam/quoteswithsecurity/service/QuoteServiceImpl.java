package com.shivam.quoteswithsecurity.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shivam.quoteswithsecurity.dao.QuoteRepository;
import com.shivam.quoteswithsecurity.entity.Quote;


@Service
public class QuoteServiceImpl implements QuoteService {
	
	@Autowired
	private QuoteRepository quoteRepository;

	@Override
	public Quote saveQuote(Quote quote) {
//		System.out.println(quote);
		Quote q = quoteRepository.save(quote);
		return q;
	}
	
	@Override
	public List<Quote> findAll() {
		List<Quote> allQuotes = quoteRepository.findAll();
		return allQuotes;
	}
	
	
	@Override
	public Quote findById(int id) {
		Optional<Quote> quote = quoteRepository.findById(id);
		if(!quote.isPresent()) {
			throw new RuntimeException("Did not find Quote with id - " + id);
		}
		return quote.get();
	}
	
	@Override
	public String delete(int id) {
		quoteRepository.deleteById(id);
		return "Quote Deleted Sucessfully";
	}
}
