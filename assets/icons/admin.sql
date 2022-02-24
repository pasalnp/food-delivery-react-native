-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 24, 2022 at 11:16 AM
-- Server version: 10.1.48-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pasal_365`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `ID` int(11) NOT NULL,
  `pp` varchar(9999) NOT NULL,
  `fullname` varchar(999) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `upass` varchar(100) NOT NULL,
  `notes` varchar(999) NOT NULL,
  `sessions` int(11) NOT NULL DEFAULT '0',
  `active` int(11) NOT NULL DEFAULT '1',
  `Attr` varchar(100) NOT NULL,
  `signaturetxt` varchar(255) NOT NULL,
  `did` varchar(999) NOT NULL,
  `staffid` varchar(11) NOT NULL,
  `state` varchar(999) NOT NULL DEFAULT '0',
  `lastlogin` varchar(999) NOT NULL,
  `permission` varchar(999) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `pp`, `fullname`, `uname`, `upass`, `notes`, `sessions`, `active`, `Attr`, `signaturetxt`, `did`, `staffid`, `state`, `lastlogin`, `permission`) VALUES
(3, 'sabin5d1cc83947c710.11004939.jpg', 'Sabin Shrestha', 'sabin', 'c0e8517b1fe0b5270f3f41d4b56d6118', '', 963, 1, 'admin', 'this is signed by sabin<br>', '9843762294', '0', '0', '2020/12/14 17:48:17', '100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126'),
(83, 'Ram Gurung60854009a23776.46126094.jpg', 'Ram Gurung', 'Ram', '2b3a6958efc3f9e0279ad794541170be', '', 53, 1, 'admin', '', '', '', '0', '', '100,101,102,103,104,105,106,107,108,109,110,111,11...'),
(84, 'Binod Shrestha608540578ef188.23440113.jpg', 'Binod Shrestha', 'binod', '0bbfa789f7565b1fc9842b2f011a2c9a', '', 2, 1, 'admin', '', '', '', '0', '', '100,101,102,103,104,105,106,107,108,109,110,111,11...');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=85;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
