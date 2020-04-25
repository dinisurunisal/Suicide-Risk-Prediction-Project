-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2020 at 04:55 AM
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
-- Database: `yana`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `NIC` varchar(15) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `accCreatedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patientrecord`
--

CREATE TABLE `patientrecord` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `docId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `NIC` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `religion` varchar(100) DEFAULT NULL,
  `race` varchar(100) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `civilStatus` varchar(100) DEFAULT NULL,
  `educationalLevel` varchar(100) DEFAULT NULL,
  `reason` varchar(200) DEFAULT NULL,
  `lifeTimePsychiatricHospitalizations` tinyint(1) DEFAULT NULL,
  `pastSuicideAttempts` tinyint(1) DEFAULT NULL,
  `anySuicidalThoughts` tinyint(1) DEFAULT NULL,
  `selfInjuriousBehaviour` tinyint(1) DEFAULT NULL,
  `psychiatricDisorders` tinyint(1) DEFAULT NULL,
  `pastIllness` tinyint(1) DEFAULT NULL,
  `alcoholConsumption` tinyint(1) DEFAULT NULL,
  `anger` tinyint(1) DEFAULT NULL,
  `sleepProblem` tinyint(1) DEFAULT NULL,
  `socialIsolation` tinyint(1) DEFAULT NULL,
  `sad` tinyint(1) DEFAULT NULL,
  `humiliated` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patientresult`
--

CREATE TABLE `patientresult` (
  `id` int(11) NOT NULL,
  `recordId` int(11) DEFAULT NULL,
  `patientId` int(11) DEFAULT NULL,
  `docId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `NIC` varchar(100) DEFAULT NULL,
  `result` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `NIC` varchar(15) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phoneNumber` int(20) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `randomNumber` int(11) DEFAULT NULL,
  `checked` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `NIC` (`NIC`,`userId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `patientrecord`
--
ALTER TABLE `patientrecord`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `UC_patientrecord` (`docId`,`patientId`,`id`),
  ADD KEY `patientId` (`patientId`);

--
-- Indexes for table `patientresult`
--
ALTER TABLE `patientresult`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `recordId` (`recordId`),
  ADD KEY `docId` (`docId`),
  ADD KEY `patientId` (`patientId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`NIC`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phoneNumber` (`phoneNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patientrecord`
--
ALTER TABLE `patientrecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patientresult`
--
ALTER TABLE `patientresult`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Constraints for table `patientrecord`
--
ALTER TABLE `patientrecord`
  ADD CONSTRAINT `patientrecord_ibfk_1` FOREIGN KEY (`docId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `patientrecord_ibfk_2` FOREIGN KEY (`patientId`) REFERENCES `patient` (`id`);

--
-- Constraints for table `patientresult`
--
ALTER TABLE `patientresult`
  ADD CONSTRAINT `patientresult_ibfk_1` FOREIGN KEY (`docId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `patientresult_ibfk_2` FOREIGN KEY (`patientId`) REFERENCES `patient` (`id`),
  ADD CONSTRAINT `patientresult_ibfk_3` FOREIGN KEY (`recordId`) REFERENCES `patientrecord` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
