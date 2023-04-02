/* Queries for populating the tables */

-- Populate CITIES table
INSERT INTO CITIES (CITY, STATE) VALUES
  ('Pune', 'Maharashtra'),
  ('Mumbai', 'Maharashtra'),
  ('Bangalore', 'Karnataka');

-- Populate WAREHOUSES table
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION) VALUES
  (1, 'Warehouse 1', 'Pune'),
  (2, 'Warehouse 2', 'Mumbai'),
  (3, 'Warehouse 3', 'Bangalore');

-- Populate STORES table
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY) VALUES
  (1, 'Store 1', 'Pune'),
  (2, 'Store 2', 'Mumbai'),
  (3, 'Store 3', 'Bangalore');

-- Populate CUSTOMER table
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY) VALUES
  (1, 'Mr. Patil', '123 Main St', 'Pune'),
  (2, 'Ms. Desai', '456 Oak Ave', 'Mumbai'),
  (3, 'Mr. Singh', '789 Elm St', 'Bangalore');

-- Populate ORDERS table
INSERT INTO ORDERS (ONO, ODATE, CNO) VALUES
  (1, '2022-01-01', 1),
  (2, '2022-01-02', 1),
  (3, '2022-01-03', 2);

-- Populate ITEMS table
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST) VALUES
  (1, 'Item 1', 1.5, 10.00),
  (2, 'Item 2', 2.0, 20.00),
  (3, 'Item 3', 3.5, 30.00);

-- Populate ORDER_ITEMS table
INSERT INTO ORDER_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY) VALUES
  (1, 1, 10),
  (1, 2, 5),
  (2, 1, 15),
  (3, 2, 8),
  (3, 3, 4);

-- Populate STORE_ITEMS table
INSERT INTO STORE_ITEMS (SID, ITEMNO, QUANTITY) VALUES
  (1, 1, 50),
  (1, 2, 20),
  (2, 2, 30),
  (2, 3, 15),
  (3, 1, 40),
  (3, 3, 10);

/* 
 * Solve the following problems using queries.
 * ○ Find the item that has minimum weight.
 * ○ Find the different warehouses in “Pune”.
 * ○ Find the details of items ordered by a customer “Mr. Patil”.
 * ○ Find a Warehouse which has maximum stores.
 * ○ Find an item which is ordered for a minimum number of times.
 * ○ Find the detailed orders given by each customer.
 */

/* 
1. Find the item that has minimum weight.
*/

SELECT *
FROM ITEMS
WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

/*
2. Find the different warehouses in “Pune”.
*/

SELECT WNAME, LOCATION
FROM WAREHOUSES
WHERE LOCATION = 'Pune';

/*
3. Find the details of items ordered by a customer “Mr. Patil”.
*/

SELECT I.ITEMNO, I.DESCRIPTION, I.WEIGHT, I.COST, OI.ORDERED_QUANTITY
FROM ITEMS I
INNER JOIN ORDER_ITEMS OI ON I.ITEMNO = OI.ITEMNO
INNER JOIN ORDERS O ON OI.ONO = O.ONO
INNER JOIN CUSTOMER C ON O.CNO = C.CNO
WHERE C.CNAME = 'Mr. Patil';

/*
4. Find a Warehouse which has maximum stores.
*/

SELECT W.WNAME, COUNT(S.SID) AS STORE_COUNT
FROM WAREHOUSES W
INNER JOIN STORES S ON W.WID = S.SID
GROUP BY W.WID
ORDER BY STORE_COUNT DESC
LIMIT 1;

/*
5. Find an item which is ordered for a minimum number of times.
*/

SELECT I.ITEMNO, I.DESCRIPTION, COUNT(OI.ITEMNO) AS ORDER_COUNT
FROM ITEMS I
LEFT JOIN ORDER_ITEMS OI ON I.ITEMNO = OI.ITEMNO
GROUP BY I.ITEMNO
ORDER BY ORDER_COUNT ASC
LIMIT 1;

/*
6. Find the detailed orders given by each customer.
*/

SELECT C.CNO, C.CNAME, O.ONO, O.ODATE, I.ITEMNO, I.DESCRIPTION, I.WEIGHT, I.COST, OI.ORDERED_QUANTITY
FROM CUSTOMER C
INNER JOIN ORDERS O ON C.CNO = O.CNO
INNER JOIN ORDER_ITEMS OI ON O.ONO = OI.ONO
INNER JOIN ITEMS I ON OI.ITEMNO = I.ITEMNO;
