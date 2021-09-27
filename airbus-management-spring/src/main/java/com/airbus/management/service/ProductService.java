package com.airbus.management.service;

import java.util.List;

import com.airbus.management.exception.ProductAlreadyExistsException;
import com.airbus.management.model.Product;

public interface ProductService {
	
	public List<Product> getAllProducts();
	public List<Product> getProductsByCategory(String categoryName);
	public boolean addProduct(Product productDetails) throws ProductAlreadyExistsException;
	public boolean updateProduct(Product productDetails,String productId);
	public boolean deleteProduct(String productId);
}
