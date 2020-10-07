-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2020 at 03:20 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugas_phonebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `biodata`
--

CREATE TABLE `biodata` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phone_num` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `biodata`
--

INSERT INTO `biodata` (`id`, `fullname`, `phone_num`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'orang_1', '0810001', 'seseorang_1@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'orang_2', '0810002', 'seseorang_2@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'orang_3', '0810003', 'seseorang_3@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'orang_4', '0810004', 'seseorang_4@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'orang_5', '0810005', 'seseorang_5@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'orang_6', '0810006', 'seseorang_6@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'orang_7', '0810007', 'seseorang_7@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'orang_8', '0810008', 'seseorang_8@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'orang_9', '0810009', 'seseorang_9@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'orang_10', '0810010', 'seseorang_10@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'orang_11', '0810011', 'seseorang_11@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'orang_12', '0810012', 'seseorang_12@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'orang_13', '0810013', 'seseorang_13@gmail.com', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201006021609-create-biodata.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biodata`
--
ALTER TABLE `biodata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biodata`
--
ALTER TABLE `biodata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
