-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 20, 2018 at 10:59 AM
-- Server version: 5.5.56-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `talklikethat_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `conversation_room_status`
--

CREATE TABLE IF NOT EXISTS `conversation_room_status` (
  `id` int(11) NOT NULL DEFAULT '0',
  `status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `conversation_room_status`
--

INSERT INTO `conversation_room_status` (`id`, `status`) VALUES
(0, 'conversation'),
(1, 'noConversation');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conversation_room_status`
--
ALTER TABLE `conversation_room_status`
  ADD PRIMARY KEY (`id`);
