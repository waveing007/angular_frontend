-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2019 at 09:24 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angular7phpcrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id_record` int(11) NOT NULL,
  `id_student` varchar(10) COLLATE utf8_thai_520_w2 NOT NULL,
  `id_subject` varchar(6) COLLATE utf8_thai_520_w2 NOT NULL,
  `grade` varchar(1) COLLATE utf8_thai_520_w2 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id_record`, `id_student`, `id_subject`, `grade`) VALUES
(1, '1', '1', 'A'),
(2, '1', '1', 'A'),
(3, '60022101', '222333', 'A'),
(4, '60022101', '222333', 'A'),
(5, '60022101', '4444', 'A'),
(6, '60022101', '082', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `sId` int(11) NOT NULL,
  `fName` varchar(255) COLLATE utf8_thai_520_w2 NOT NULL,
  `lName` varchar(255) COLLATE utf8_thai_520_w2 NOT NULL,
  `email` varchar(255) COLLATE utf8_thai_520_w2 NOT NULL,
  `address` text COLLATE utf8_thai_520_w2 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_thai_520_w2;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`sId`, `fName`, `lName`, `email`, `address`) VALUES
(0, 'awd', 'awd', 'dw', ''),
(123, 'watcharakon', 'adw', 'awd', ''),
(123456, 'manow', 'woda', 'wave@gmail.com', ''),
(692381, 'Tanapat', 'kamon', 'tana@gmail', ''),
(60022101, 'wave', 'thintawave', 'wave@gmail.com', ''),
(123456789, 'wasdas', 'hhhkhk', 'jkhljkl', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id_record`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`sId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id_record` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
