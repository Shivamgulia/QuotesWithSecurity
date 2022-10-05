package com.shivam.quoteswithsecurity.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shivam.quoteswithsecurity.entity.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Integer> {

}
