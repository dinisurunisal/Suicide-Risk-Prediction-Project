-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2020 at 04:16 PM
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
-- Database: `sdgp`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `ID` int(11) DEFAULT NULL,
  `patientId` int(10) NOT NULL,
  `NIC` varchar(100) DEFAULT NULL,
  `deleted` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`ID`, `patientId`, `NIC`, `deleted`) VALUES
(1, 5, '898248227v', 'false'),
(1, 6, '989800228v', 'false'),
(1, 13, '999999228v', 'false'),
(2, 14, '999999999v', 'false'),
(2, 15, '777777777v', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `patientrecord`
--

CREATE TABLE `patientrecord` (
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
  `lifeTimePsychiatricHospitalizations` tinyint(1) NOT NULL,
  `pastSuicideAttempts` tinyint(1) NOT NULL,
  `anySuicidalThoughts` tinyint(1) NOT NULL,
  `selfInjuriousBehaviour` tinyint(1) NOT NULL,
  `psychiatricDisorders` varchar(100) NOT NULL,
  `pastIllness` tinyint(1) NOT NULL,
  `alcoholConsumption` varchar(20) NOT NULL,
  `anger` tinyint(1) NOT NULL,
  `sleepProblem` tinyint(1) NOT NULL,
  `socialIsolation` tinyint(1) NOT NULL,
  `sad` tinyint(1) NOT NULL,
  `humiliated` tinyint(1) NOT NULL,
  `deleted` varchar(10) NOT NULL,
  `patientId` int(10) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patientrecord`
--

INSERT INTO `patientrecord` (`recordID`, `NIC`, `age`, `date`, `religon`, `race`, `gender`, `occupation`, `civilStatus`, `educationalLevel`, `reason`, `lifeTimePsychiatricHospitalizations`, `pastSuicideAttempts`, `anySuicidalThoughts`, `selfInjuriousBehaviour`, `psychiatricDisorders`, `pastIllness`, `alcoholConsumption`, `anger`, `sleepProblem`, `socialIsolation`, `sad`, `humiliated`, `deleted`, `patientId`, `ID`) VALUES
(2, '898248227v', 25, '2020-04-17', 'Islam', 'Muslim', 'F', 'Engineer', 'Married', 'University', 'Sexsual Harresment', 0, 1, 1, 0, '0', 1, '1', 0, 1, 1, 1, 1, 'false', 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(255) NOT NULL,
  `NIC` varchar(100) DEFAULT NULL,
  `firstName` varchar(100) DEFAULT NULL,
  `lastName` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phoneNumber` int(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `doctorLicenseNo` varchar(100) DEFAULT NULL,
  `currentHospital` varchar(100) DEFAULT NULL,
  `checked` varchar(10) DEFAULT NULL,
  `randomNumber` int(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `NIC`, `firstName`, `lastName`, `email`, `phoneNumber`, `address`, `doctorLicenseNo`, `currentHospital`, `checked`, `randomNumber`, `password`) VALUES
(1, '995200228v', 'Malsha', 'Piumini', 'malsha98@yahoo.com', 775863426, 'Galle', '12345', 'Mahamodara', 'false', 12345, 'b'),
(2, '995201229v', 'Maneesha', 'Indrachapa', 'maneesha@gmail.com', 772207488, 'Colombo', 'ABS1234', 'Nawaloka', 'false', 5687, 'a'),
(3, '932222228v', 'Nipuna', 'Upeksha', 'nipuna@gmail.com', 775863426, 'Galle', 'AZX790', 'Apalo', 'false', 46993, 'c');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patientId`),
  ADD UNIQUE KEY `ID` (`ID`,`NIC`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD UNIQUE KEY `NIC_2` (`NIC`);

--
-- Indexes for table `patientrecord`
--
ALTER TABLE `patientrecord`
  ADD PRIMARY KEY (`recordID`),
  ADD KEY `NIC` (`NIC`),
  ADD KEY `patientId` (`patientId`),
  ADD KEY `ID` (`ID`);

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
  MODIFY `patientId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `patientrecord`
--
ALTER TABLE `patientrecord`
  MODIFY `recordID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `users` (`ID`);

--
-- Constraints for table `patientrecord`
--
ALTER TABLE `patientrecord`
  ADD CONSTRAINT `patientrecord_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patient` (`patientId`),
  ADD CONSTRAINT `patientrecord_ibfk_2` FOREIGN KEY (`ID`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
