-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 27, 2023 at 12:48 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TODOList`
--

-- --------------------------------------------------------

--
-- Table structure for table `todolist1`
--

CREATE TABLE `todolist1` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `todolist1`
--

INSERT INTO `todolist1` (`id`, `title`, `description`) VALUES
(1, 'Class at 9', ' Mandatory to Attend'),
(2, 'Do lunch', ' Lunch with a friend'),
(3, 'Meet Rahul', 'Have meting with rahul in office'),
(4, 'Finish Homework', 'Finish Maths Homework before Tommorow\'s Class '),
(6, 'hello', 'new todo'),
(7, 'Party', 'Go to Ankit\'s Birthday'),
(9, 'Annual Function', 'Prepare for performance at Annual Function');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todolist1`
--
ALTER TABLE `todolist1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todolist1`
--
ALTER TABLE `todolist1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
