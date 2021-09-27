package com.airbus.management.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.airbus.management.exception.ProductAlreadyExistsException;
import com.airbus.management.model.Product;
import com.airbus.management.repository.ProductServiceRepository;

@Repository
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductServiceRepository productServiceRepository;
	
	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		
		List<Product> result=new ArrayList<>();
		
		try {
			result= productServiceRepository.getAllProducts();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return result;
		
	}

	@Override
	public List<Product> getProductsByCategory(String categoryName) {
		// TODO Auto-generated method stub
		List<Product> result=new ArrayList<>();
		
		try {
			result= productServiceRepository.getProductsByCategory(categoryName);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public boolean addProduct(Product productDetails) throws ProductAlreadyExistsException {
		// TODO Auto-generated method stub
		boolean result;
		
		try {
			productServiceRepository.addProduct(productDetails);
			result=true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			result=false;
			throw new ProductAlreadyExistsException("Product Already Exists!");
		}
		
		return result;
	}

	@Override
	public boolean updateProduct(Product productDetails, String productId) {
		// TODO Auto-generated method stub
		
		int result;
		
		try {
			result=productServiceRepository.updateProduct(productDetails,productId);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			result=0;
		}
		
		if(result==0)
		{
			return false;
		}
		return true;
	}

	@Override
	public boolean deleteProduct(String productId) {
		// TODO Auto-generated method stub
		int result;
		
		try {
			result=productServiceRepository.deleteProduct(productId);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			result=0;
		}
		
		if(result==0)
		{
			return false;
		}
		return true;
	}
	

}
