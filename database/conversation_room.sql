-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 20, 2018 at 10:57 AM
-- Server version: 5.5.56-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `talklikethat_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `conversation_room`
--

CREATE TABLE IF NOT EXISTS `conversation_room` (
  `id` int(11) NOT NULL,
  `requester` int(11) DEFAULT NULL,
  `requestee` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `conversation_room`
--

INSERT INTO `conversation_room` (`id`, `requester`, `requestee`, `status_id`) VALUES
(0, 5, 15, 1),
(1, 5, 15, 0),
(4, 5, 15, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conversation_room`
--
ALTER TABLE `conversation_room`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conversation_room`
--
ALTER TABLE `conversation_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;