package com.airbus.management.repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.airbus.management.model.Product;

@Repository
public class ProductServiceRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	public List<Product> getAllProducts() {
		
		
		List<Product> productList=new ArrayList<>();
		
		 productList=jdbcTemplate.query("SELECT *from Product", new RowMapper<Product>(){  
			   
			@Override
			public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
									
				Product product=new Product();
				product.setProductId(rs.getString("productId"));
				product.setProductName(rs.getString("productName"));
				product.setProductDescription(rs.getString("productDescription"));
				product.setProductCategory(rs.getString("productCategory"));
				product.setUnits(rs.getInt("units"));
				
				
				return product;
			}  
		    }); 
		 
		return productList;
		}
	
	public List<Product> getProductsByCategory(String categoryName) {
		
		List<Product> productList=new ArrayList<>();
		
		 productList=jdbcTemplate.query("SELECT *from Product where lower(productCategory)='"+categoryName.toLowerCase()+"'", new RowMapper<Product>(){  
			   
			@Override
			public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
									
				Product product=new Product();
				product.setProductId(rs.getString("productId"));
				product.setProductName(rs.getString("productName"));
				product.setProductDescription(rs.getString("productDescription"));
				product.setProductCategory(rs.getString("productCategory"));
				product.setUnits(rs.getInt("units"));
				
				
				return product;
			}  
		    }); 
		return productList;
		}
	
	
	public void addProduct(Product productDetails) {
		
		 String INSERT_STATEMENT = "INSERT INTO Product(productId,productName,productDescription,productCategory, units) VALUES (?,?,?,?,?)" ;

			jdbcTemplate.batchUpdate(INSERT_STATEMENT, new BatchPreparedStatementSetter() {
				
				@Override
				public void setValues(PreparedStatement ps, int i) throws SQLException {
					// TODO Auto-generated method stub
					ps.setString(1,productDetails.getProductId());
					ps.setString(2, productDetails.getProductName());
					ps.setString(3, productDetails.getProductDescription());
					ps.setString(4, productDetails.getProductCategory());
					ps.setInt(5, productDetails.getUnits());
				}
				
				@Override
				public int getBatchSize() {
					// TODO Auto-generated method stub
					return 1;
				}
			});
	}
	
	public int updateProduct(Product productDetails, String productId) {
		
		String query="UPDATE Product set productName='"+productDetails.getProductName()+"',productDescription='"+productDetails.getProductDescription()+"',productCategory='"+productDetails.getProductCategory()+"',units='"+productDetails.getUnits()+"' where productId='"+productId+"' ";  
			    return jdbcTemplate.update(query);  
	}
	
	public int deleteProduct(String productId){  
	    String query="delete from product where productId='"+productId+"' ";  
	    return jdbcTemplate.update(query);  
	}  
	
	public String fetchPasswordForUserName(String userName) {
		
		String result="";
		
		String query="SELECT password from User where username='"+ userName+"'";
		
		result= jdbcTemplate.queryForObject(query,String.class);
		
		return result;
	}
	
}
