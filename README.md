 <h1 align="center"> Airbus Inventory Management System</h1>
 
 ---
 
  [Objective:](https://github.com/Akash-goyal-github/Inventory-Management-System/blob/main/Problem%20Statement.PNG) 

      1. Design and implement the REST APIs to integrate with Sql database
          1. GET all products of a given category
          2. GET all products
          3. POST to add new product
          4. PUT to update a existing product
          5. Delete a product
      2. Implement APIs with the best REST Practices.
      3. Implement custom error handling in APIs to gracefully handle all exceptions.
      4. Use JWT Tokens and validate all endpoints for security.
      5. Develop a UI:
          1. Use REST APIs to display all the product names, description and units in a table, 
          2. Filters for data.
          3. Add / Update the product.
          4. Search Product based on Category


  RoadMap:
  
      1. Login to the Angular Application.
          
          Default Login Credentials:
            username: airbus02@gmail.com
            password:1234
            
      2. Perform Any CRUD Operations.

  Actions:

        1. Fork this repository.
        2. Clone the repository and cd into spring boot files.
        3. Install dependencies through npm install in Angular AirbusInventory.
        5. Create database and tables in your Local System:-
              1. Create a Database in your system: create database Product;
              2. Create Product, User Tables
              (commands given below in Road Map Test and also in Spring -> src/main/resources-> schema.sql)
        6. Run the airbus-management-spring as Spring boot App on the server port 8080 and configure the datasource with your mysql user credentials(in Application Properties).
        7. Run the frontend -ng serve which shall run on port:4200.
        
---

RoadMap to test Inventory Management System project:
-----------------------------------------------------------------------------------------------

This project was generated with Angular CLI: 12.2.3.

Create Tables : Go to  
-----------------------------------------------------------------------------------------------
	
Credentials to login to my sql:- (change in application.properties file in Spring Project)

1. Creating Product Database-

        create database Product;
	
2. Creating Product Table-
	
	    use Product;
        drop table Product;
        create table Product(
        productId varchar(256) Unique not null,
        productName varchar(256),
        productDescription varchar(3500),
        productCategory varchar(256),
        units int
        );

3. Creating User Table-

	
        drop table User;
        create table User(
        username varchar(256),
        password varchar(256)
        );

4. Inserting Manual Data in user Table-

		use Product;
		insert into User(username,password) Values("airbus01@gmail.com","$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6");
		insert into User(username,password) Values("airbus02","$2a$10$ZnnAdfh3cc7a/b1aODLeoOjifNPbHL6Vo8kpRJj.muPsVp1697hJO");
		
		//These are encrypted password using Bcrypt.( We have used Bcrypt so that no one can access our password from database.
		
		1st one means:- username - airbus01@gmail.com, password- password
		2nd one means:- username - airbus02@gmail.com, password- 1234


Note:- The same SQL Statements are also present in schema.sql file (Under src/main/resources)
-----------------------------------------------------------------------------------------------


# Know your server:

1. Login to the application -

Post Request - http://localhost:8080/airbusManagement/JWT/authenticateUser

    Expecting Json data-{username, password}

Assumptions:-

    1. username should be of Email Id format.
    2. username and password can not be Null.

        Default Login Credentials:
                    username: airbus02@gmail.com
                    password:1234

2. GET all products -

Get Request - http://localhost:8080/airbusManagement/getAllProducts 
 
      expecting header - { 'Authorization', Bearer ${token} }.


3. GET all products of a given category -

Get Request - http://localhost:8080/airbusManagement/getProductsByCategory/{categoryName} 

    expecting header - { 'Authorization', Bearer ${token} }.

4. Add all products -

Post Request - http://localhost:8080/airbusManagement/addProduct 

      Expecting Json data - {productId,productName,productDescription,productCategory,units} 
      expecting header - { 'Authorization', Bearer ${token} }.


5. Update product -

Post Request - http://localhost:8080/airbusManagement/updateProduct/{ProductId} 

      Expecting Json data - {productId,productName,productDescription,productCategory,units} 
      expecting header - { 'Authorization', Bearer ${token} }.
    

6. Delete product-

Delete Request - http://localhost:8080/airbusManagement/deleteProduct/{ProductId}

    expecting header - { 'Authorization', Bearer ${token} }.


Stack:

    -Spring Boot Application
    -Spring MVC
    -Spring Jdbc
    -Maven
    -sql database
    -Angular


Steps to be followed in running Angular:

      1.npm install, npm run build, npm serve.

features used for UI display:

      1. Angular Material
      2. Responsive Design, Bootstrap, HTML 5.1, CSS

For further help:

To get more help on the Angular CLI use ng help or go check out the Angular CLI README.

-----------------------------------------------------------------------------------------------

