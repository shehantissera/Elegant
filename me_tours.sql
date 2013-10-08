-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2013 at 01:42 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `me_tours`
--
CREATE DATABASE IF NOT EXISTS `me_tours` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `me_tours`;

-- --------------------------------------------------------

--
-- Table structure for table `medialibrary`
--

DROP TABLE IF EXISTS `medialibrary`;
CREATE TABLE IF NOT EXISTS `medialibrary` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(500) NOT NULL,
  `Type` varchar(500) NOT NULL,
  `Content` varchar(500) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `medialibrary`
--

INSERT INTO `medialibrary` (`ID`, `Name`, `Type`, `Content`) VALUES
(1, 'Testing Video 1', 'Video', 'A_s2vmClV2Y'),
(2, 'Anna ehema thama wada karanna one bung', 'Video', 'H7T6tls7zaw'),
(3, 'Fiel name', 'Image', '02.jpg'),
(4, 'UUlala', 'Image', '02-big.jpg'),
(5, 'Wattakka', 'Image', '01-big.jpg'),
(6, 'Xperia', 'Video', 'mSEafkFaKaM'),
(7, 'Becky', 'Video', 'xIpwzetMD2o');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=68 ;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `name`, `country`, `date`, `file`) VALUES
(1, 'Aladin Travels', 'Netherlands', '-', 'scan.jpg'),
(2, 'N/A', 'Japan', '-', 'scan0001.jpg'),
(3, 'N/A', 'Austria', '-', 'scan0002.jpg'),
(4, 'N/A', 'Netherlands', '-', 'scan0004.jpg'),
(5, 'James Birch', 'United Kingdom', '-', 'scan0005.jpg'),
(6, 'N/A', 'Nepal', '-', 'scan0006.jpg'),
(7, 'N/A', 'Haiti', '-', 'scan0007.jpg'),
(8, 'N/A', 'Netherlands', '-', 'scan0008.jpg'),
(9, 'Joola Roffeeli', 'Italy', '-', 'scan0009.jpg'),
(10, 'Joadim', 'Germany', '2001', 'scan0010.jpg'),
(11, 'Vielen Dank', 'Swaziland', '-', 'scan0011.jpg'),
(12, 'Kees and Padma van Noorden', 'Netherlands', '-', 'scan0012.jpg'),
(13, 'Sam & Jo Rafalo', 'Malta', '-', 'scan0013.jpg'),
(14, 'Sarah & Callistus Jayasuriya', 'United Kingdom', '-', 'scan0014.jpg'),
(15, 'Mark Sedman', 'United Kingdom', '-', 'scan0016.jpg'),
(16, 'Marbin', 'United Kingdom', '-', 'scan0017.jpg'),
(17, 'Fransis & Angeli', 'United Kingdom', '-', 'scan0018.jpg'),
(18, 'Samantha Nugent', 'United Kingdom', '-', 'scan0019.jpg'),
(19, 'Don Pinson', 'United States', '-', 'scan0020.jpg'),
(20, 'Ann & Luc', 'Belgium', '2010-Jan-14', 'scan0023.jpg'),
(21, 'Bernard & Rose', 'France', '2010-Jan-05', 'scan0021.jpg'),
(22, 'Josephine & Henrik', 'Germany', '2012-Feb-15', 'scan0025.jpg'),
(23, 'Mark Neels & Suranga Neels', 'Netherlands', '2010-Feb-24', 'scan0026.jpg'),
(24, 'Kees and Padma van Noorden', 'Netherlands', '2010-Mar-10', 'scan0028.jpg'),
(25, 'Anthoney & Ashley Ragno', 'United States', '2010-Aug-08', 'scan0029.jpg'),
(26, 'Brett, Diana & Abigail Kearney', 'United States', '2010-May-15', 'scan0030.jpg'),
(27, 'Gary & Friends', 'Singapore', '2010-Jun-01', 'scan0031.jpg'),
(28, 'Kevin & Cydney Wooley', 'Qatar', '2010-Aug-02', 'IMG_0010.jpg'),
(29, 'Marian, Klans & Laura', 'Germany', '2010-Aug-07', 'scan0033.jpg'),
(30, 'Mike & Naomi Chiswell', 'United Kingdom', '2010-Aug-14', 'Scan0032.jpg'),
(31, 'Mr. Robert Vanzelst', 'Netherlands', '2010-Sep-15', 'scan0034.jpg'),
(32, 'Mrs. Selles Mol', 'United Kingdom', '-', 'IMG_0001.jpg'),
(33, 'Sus & Inyian', 'Belgium', '2010-Nov-21', 'IMG_0002.jpg'),
(34, 'Family Compier', 'Netherlands', '2010-Dec-31', 'IMG_0003.jpg'),
(35, 'N/A', 'Germany', '-', 'IMG_0004.jpg'),
(36, 'John en Guus', 'Netherlands', '2011-Jan', 'IMG_0005.jpg'),
(37, 'Anna Duckerman', 'Israel', '2011', 'IMG_0006.jpg'),
(38, 'Henny Pierik', 'Netherlands', '2011-Jan', 'IMG_0007.jpg'),
(39, 'Wesley & Friends', 'Netherlands', '2010', 'IMG_0008.jpg'),
(40, 'Kees and Padma van Noorden', 'Netherlands', '2011-Mar-12', 'IMG_0009.jpg'),
(41, 'Bernie & Friends', 'United States', '2011-Jul-30', 'scan0035.jpg'),
(42, 'Rik Peeters & Family', 'Netherlands', '2011-Aug-10', 'IMG_0011.jpg'),
(43, 'Jessica & Friends', 'Dubai', '2011-Aug-31', 'IMG_0012.jpg'),
(44, 'Fernanda & Lara', 'Argentina', '2011-Oct-22', 'IMG_0013.jpg'),
(45, 'German Group', 'Germany', '2011-Nov-29', 'IMG_0014.jpg'),
(46, 'Marek', 'Czech Republic', '2011-Dec-21', 'IMG_0015.jpg'),
(47, 'Jason & Victoria', 'United Kingdom', '2012-Jan-07', 'IMG_0016.jpg'),
(48, 'Radek Machalsky & Alena', 'Czech Republic', '2011-Dec-31', 'IMG_0017.jpg'),
(49, 'N/A', 'Russian Federation', '2012-Feb-17', 'IMG_0018.jpg'),
(50, 'Irmgard Kaiser & Group [German]', 'Netherlands', '2012-Feb', 'IMG_0020.jpg'),
(51, 'Irmgard Kaiser & Group [English]', 'Netherlands', '2012-Feb', 'IMG_0019.jpg'),
(52, 'Haidi & Karl', 'Switzerland', '2012-Mar-12', 'IMG_0021.jpg'),
(53, 'Richard & Sumone', 'Netherlands', '2012-Mar-23', 'IMG_0022.jpg'),
(54, 'Massimo & Family', 'Italy', '2012-Apr-08', 'IMG_0023.jpg'),
(55, 'Kirsten & Group', 'Dubai', '2012-Apr-21', 'IMG_0024.jpg'),
(56, 'Loura & Nicolas', 'Australia', '2012-Jun-30', 'IMG_0025.jpg'),
(57, 'Karel Derks', 'Netherlands', '2012-Jul-21', 'IMG_0026.jpg'),
(58, 'Elin and Susanne', 'Sweden', '2012-Sep-15', 'Elin.jpg'),
(59, 'Charat Buu', 'France', '2012-Sep-23', 'CharatBuu.jpg'),
(60, 'Johan Larpe', 'Denmark', '2012-Nov-10', 'Johan Larpe.jpg'),
(61, 'Linda & Annika', 'Sweden', '2012-Dec-30', 'Linda&Annika.jpg'),
(62, 'Dorota Wojcik & Group', 'Poland', '2012-Dec-31', 'dorota_wojcik.jpg'),
(63, 'Oni & Roni Fuks', 'Israel', '2012-Jan-19', 'Oni and Roni.jpg'),
(64, 'Irmgard Kaiser & Group of 9', 'Netherlands', '2012-Feb-26', 'GroupTour.jpg'),
(65, 'Peter Bas & Karlin', 'Netherlands', '2013-Jul-14', 'Pieter_bas.jpg'),
(66, 'Luciana Zavatta and Boyfriend', 'Italy', '2013-Aug-10', 'Luciana_zavatta.jpg'),
(67, 'Christian & Eliane', 'Netherlands', '2013-Sep-09', 'Christian_&_Eliane.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
