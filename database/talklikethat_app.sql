-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Host: rdsinstance.c0rbj0dyxkze.ap-southeast-1.rds.amazonaws.com:3306
-- Generation Time: Feb 14, 2018 at 03:02 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `talklikethat_app`
--
CREATE DATABASE IF NOT EXISTS `talklikethat_app` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `talklikethat_app`;

-- --------------------------------------------------------

--
-- Table structure for table `hello`
--

DROP TABLE IF EXISTS `hello`;
CREATE TABLE `hello` (
  `id` bigint(20) NOT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hello`
--

INSERT INTO `hello` (`id`, `content`) VALUES
(1, 'Helloworld'),
(2, '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hello`
--
ALTER TABLE `hello`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hello`
--
ALTER TABLE `hello`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
