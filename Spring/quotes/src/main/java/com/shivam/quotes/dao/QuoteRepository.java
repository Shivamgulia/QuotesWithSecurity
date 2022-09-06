package com.shivam.quotes.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shivam.quotes.entity.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Integer> {

}
