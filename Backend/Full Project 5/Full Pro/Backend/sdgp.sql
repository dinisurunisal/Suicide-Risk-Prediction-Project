-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2020 at 07:07 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

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
  `doctorId` varchar(11) NOT NULL,
  `PatientId` int(10) NOT NULL,
  `NIC` varchar(100) NOT NULL,
  `deleted` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`doctorId`, `PatientId`, `NIC`, `deleted`) VALUES
('2d', 7, '586460906v', NULL),
('1d', 5, '986460906v', NULL),
('1d', 2, '986465906v', NULL),
('2d', 3, '986469906v', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `patientrecord`
--

CREATE TABLE `patientrecord` (
  `recordId` int(10) NOT NULL,
  `NIC` varchar(100) NOT NULL,
  `doctorId` varchar(11) NOT NULL,
  `age` int(11) NOT NULL,
  `date` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `religon` varchar(20) NOT NULL,
  `race` varchar(20) NOT NULL,
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
  `deleted` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patientrecord`
--

INSERT INTO `patientrecord` (`recordId`, `NIC`, `doctorId`, `age`, `date`, `gender`, `religon`, `race`, `occupation`, `civilStatus`, `educationalLevel`, `reason`, `lifeTimePsychiatricHospitalizations`, `pastSuicideAttempts`, `anySuicidalThoughts`, `selfInjuriousBehaviour`, `psychiatricDisorders`, `pastIllness`, `alcoholConsumption`, `anger`, `sleepProblem`, `socialIsolation`, `sad`, `humiliated`, `deleted`) VALUES
(2, '986465906v', '1d', 56, '2020-05-06', 'M', 'Other', 'Other', 'Police', 'Divorced', 'University Degree or above', 'Natural Death', 0, 0, 0, 0, 'None', 0, 'None', 0, 0, 0, 0, 0, ''),
(4, '986465906v', '1d', 56, '2020-05-20', 'M', 'Other', 'Other', 'Police', 'Divorced', 'University Degree or above', 'Natural Death', 0, 0, 0, 0, 'None', 0, 'None', 0, 0, 0, 0, 0, ''),
(5, '986460906v', '1d', 56, '2020-05-20', 'M', 'Other', 'Other', 'Police', 'Divorced', 'University Degree or above', 'Natural Death', 0, 0, 0, 0, 'None', 0, 'None', 0, 0, 0, 0, 0, ''),
(6, '986460906v', '1d', 56, '2020-05-10', 'M', 'Other', 'Other', 'Police', 'Divorced', 'University Degree or above', 'Natural Death', 0, 0, 0, 0, 'None', 0, 'None', 0, 0, 0, 0, 0, ''),
(7, '586460906v', '2d', 56, '2020-05-10', 'M', 'Other', 'Other', 'Police', 'Divorced', 'University Degree or above', 'Natural Death', 0, 0, 0, 0, 'None', 0, 'None', 0, 0, 0, 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `doctorId` int(11) NOT NULL,
  `doctorLicenseNo` varchar(100) NOT NULL,
  `NIC` varchar(100) DEFAULT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phoneNumber` int(10) NOT NULL,
  `address` varchar(200) NOT NULL,
  `currentHospital` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `confirmPassword` varchar(50) NOT NULL,
  `checked` varchar(10) DEFAULT NULL,
  `randomNumber` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`doctorId`, `doctorLicenseNo`, `NIC`, `firstName`, `lastName`, `email`, `phoneNumber`, `address`, `currentHospital`, `password`, `confirmPassword`, `checked`, `randomNumber`) VALUES
(2, '1d', '986465v', 'Mihiri', 'Samarawickrama', 'mihiri@gmail.com', 774707321, 'Senani,Kithulampitiya,Galle', 'Ruhunu hospital', '1234', '1234', NULL, NULL),
(3, '2d', '986405v', 'Malsha', 'Piumini', 'malsha@gmail.com', 774708321, 'Senani,Kithulampitiya,Galle', 'Ruhunu hospital', '1234', '1234', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`NIC`),
  ADD UNIQUE KEY `PatientId` (`PatientId`),
  ADD KEY `DoctorId` (`doctorId`);

--
-- Indexes for table `patientrecord`
--
ALTER TABLE `patientrecord`
  ADD PRIMARY KEY (`recordId`),
  ADD KEY `NIC` (`NIC`),
  ADD KEY `doctorId` (`doctorId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`doctorLicenseNo`),
  ADD UNIQUE KEY `DoctorId` (`doctorId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `PatientId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `patientrecord`
--
ALTER TABLE `patientrecord`
  MODIFY `recordId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `doctorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`doctorId`) REFERENCES `users` (`doctorLicenseNo`);

--
-- Constraints for table `patientrecord`
--
ALTER TABLE `patientrecord`
  ADD CONSTRAINT `patientrecord_ibfk_1` FOREIGN KEY (`NIC`) REFERENCES `patient` (`NIC`),
  ADD CONSTRAINT `patientrecord_ibfk_2` FOREIGN KEY (`doctorId`) REFERENCES `users` (`doctorLicenseNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
