-- Create Database
CREATE DATABASE IF NOT EXISTS library_db;
USE library_db;

-- Members Table
CREATE TABLE members (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    join_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Books Table
CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(17) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publication_year YEAR,
    status ENUM('Available', 'Borrowed') DEFAULT 'Available'
);

-- Borrowed Books (M-M Relationship)
CREATE TABLE borrowed_books (
    borrow_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    borrow_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (member_id)
        REFERENCES members (member_id),
    FOREIGN KEY (book_id)
        REFERENCES books (book_id)
);

-- Sample Data
INSERT INTO members (first_name, last_name, email) VALUES
('Alice', 'Smith', 'alice@example.com'),
('Bob', 'Johnson', 'bob@example.com');

INSERT INTO books (isbn, title, author, publication_year) VALUES
('978-0451524935', '1984', 'George Orwell', 1949),
('978-0061120084', 'To Kill a Mockingbird', 'Harper Lee', 1960);

INSERT INTO borrowed_books (member_id, book_id, borrow_date) VALUES
(1, 1, '2023-08-01'),
(2, 2, '2023-08-02');
