-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2020 at 11:11 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nova`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `ID` int(11) DEFAULT NULL,
  `patientId` int(10) NOT NULL,
  `NIC` varchar(100) DEFAULT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`ID`, `patientId`, `NIC`, `date`) VALUES
(1, 5, '898248227v', '2020-01-20'),
(1, 6, '989800228v', '2020-02-11'),
(1, 13, '999999228v', '2020-03-12'),
(2, 14, '999999999v', '2020-04-23'),
(2, 15, '777777777v', '2020-04-25'),
(8, 17, '123456789v', '2020-04-28'),
(10, 20, '123456123v', '2020-04-29'),
(10, 27, '199952098v', '2020-04-29'),
(10, 44, '123456123C', '2020-04-30'),
(10, 45, '989876543v', '2020-04-30');

-- --------------------------------------------------------

--
-- Table structure for table `patientrecords`
--

CREATE TABLE `patientrecords` (
  `recordID` int(10) NOT NULL,
  `NIC` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `date` date NOT NULL,
  `religon` varchar(20) NOT NULL,
  `race` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `occupation` varchar(70) NOT NULL,
  `civilStatus` varchar(50) NOT NULL,
  `educationalLevel` varchar(70) NOT NULL,
  `reason` varchar(100) NOT NULL,
  `lifeTimePsychiatricHospitalizations` varchar(100) NOT NULL,
  `pastSuicideAttempts` varchar(100) NOT NULL,
  `anySuicidalThoughts` varchar(100) NOT NULL,
  `selfInjuriousBehaviour` varchar(100) NOT NULL,
  `psychiatricDisorders` varchar(100) NOT NULL,
  `pastIllness` varchar(100) NOT NULL,
  `alcoholConsumption` varchar(20) NOT NULL,
  `anger` varchar(100) NOT NULL,
  `sleepProblem` varchar(100) NOT NULL,
  `socialIsolation` varchar(100) NOT NULL,
  `sad` varchar(100) NOT NULL,
  `humiliated` varchar(100) NOT NULL,
  `deleted` varchar(10) NOT NULL,
  `patientId` int(10) NOT NULL,
  `ID` int(11) NOT NULL,
  `result` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patientrecords`
--

INSERT INTO `patientrecords` (`recordID`, `NIC`, `age`, `date`, `religon`, `race`, `gender`, `occupation`, `civilStatus`, `educationalLevel`, `reason`, `lifeTimePsychiatricHospitalizations`, `pastSuicideAttempts`, `anySuicidalThoughts`, `selfInjuriousBehaviour`, `psychiatricDisorders`, `pastIllness`, `alcoholConsumption`, `anger`, `sleepProblem`, `socialIsolation`, `sad`, `humiliated`, `deleted`, `patientId`, `ID`, `result`) VALUES
(1, '123456789v', 35, '2020-04-26', 'Other', 'Tamil', 'Female', 'Workers not classfied by Occupation ', 'Widow', 'University Degree or above', 'Problems with love affairs', 'YES', 'YES', 'YES', 'YES', 'Schizophrenia', 'None', 'None', 'YES', 'YES', 'YES', 'YES', 'YES', 'false', 17, 8, 'Negative'),
(2, '123456789v', 35, '2020-04-26', 'Other', 'Tamil', 'Female', 'Workers not classfied by Occupation ', 'Widow', 'University Degree or above', 'Problems with love affairs', 'YES', 'YES', 'YES', 'YES', 'Schizophrenia', 'None', 'None', 'YES', 'YES', 'YES', 'YES', 'YES', 'false', 17, 8, 'Negative'),
(3, '123456789v', 35, '2020-04-26', 'Other', 'Tamil', 'Female', 'Workers not classfied by Occupation ', 'Widow', 'University Degree or above', 'Problems with love affairs', 'YES', 'YES', 'YES', 'YES', 'Schizophrenia', 'None', 'None', 'YES', 'YES', 'NO', 'NO', 'YES', 'false', 17, 8, 'Negative');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(255) NOT NULL,
  `NIC` varchar(100) DEFAULT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phoneNumber` int(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `checked` varchar(10) DEFAULT NULL,
  `randomNumber` int(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `NIC`, `firstName`, `email`, `phoneNumber`, `address`, `checked`, `randomNumber`, `password`) VALUES
(1, '995200228v', 'Malsha', 'malsha98@yahoo.com', 775863426, 'Galle', 'false', 12345, 'b'),
(2, '995201229v', 'Maneesha', 'maneesha@gmail.com', 772207488, 'Colombo', 'false', 5687, 'a'),
(3, '932222228v', 'Nipuna', 'nipuna@gmail.com', 775863426, 'Galle', 'false', 46993, 'c'),
(8, '922222228v', 'Nipuna', 'nipuna_22@gmail.com', 775863426, 'Galle', 'false', 69700, 'c'),
(10, NULL, 'Piumini', 'a@gmail.com', 912245791, 'x', 'false', 73051, 'x');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patientId`),
  ADD UNIQUE KEY `ID` (`ID`,`NIC`),
  ADD UNIQUE KEY `NIC` (`NIC`);

--
-- Indexes for table `patientrecords`
--
ALTER TABLE `patientrecords`
  ADD UNIQUE KEY `recordID` (`recordID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patientId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `patientrecords`
--
ALTER TABLE `patientrecords`
  MODIFY `recordID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
