-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2025 at 06:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `menu_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `item_id` int(11) NOT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_description` text DEFAULT NULL,
  `amount` char(10) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`item_id`, `menu_id`, `item_name`, `item_description`, `amount`, `created_at`) VALUES
(1, 1, 'biriyani', 'Biryani is a delicious rice dish peppered with scrumptious spices like saffron and cumin and further layered with spiced meat or veggie protein.', '30', '2025-01-28 02:08:16'),
(2, 2, 'Beer', 'Beer is an alcoholic beverage produced by the brewing and fermentation of starches from cereal grain—most commonly malted barley, although wheat, maize, rice, and oats are also used. ', '25', '2025-01-28 02:13:11'),
(3, 2, 'Juice', 'Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. ', '10', '2025-01-28 02:14:01'),
(4, 2, 'Cocktails', 'A cocktail is a mixed drink, usually alcoholic. Most commonly, a cocktail is a combination of one or more spirits mixed with other ingredients', '13', '2025-01-28 02:14:49'),
(5, 3, 'Cinnamon rolls', 'A cinnamon roll is a sweet roll commonly served in Northern Europe and North America. In Denmark it is known as kanelsnegl, in Sweden it is called kanelbulle', '18', '2025-01-28 02:15:51'),
(6, 3, 'French toast', 'French toast is a dish of sliced bread soaked in beaten eggs and often milk or cream, then pan-fried.', '40', '2025-01-28 02:17:17'),
(7, 3, 'Quiche', 'Quiche is a French tart consisting of a pastry crust filled with savoury custard and pieces of cheese, meat, seafood or vegetables. ', '24', '2025-01-28 02:17:52'),
(8, 1, 'Fish', 'Many species of fish are caught by humans and consumed as food in virtually all regions around the world.', '12', '2025-01-28 02:19:32'),
(9, 1, 'Legume', 'Legumes are plants in the family Fabaceae, or the fruit or seeds of such plants. When used as a dry grain for human consumption, the seeds are also called pulses.', '25', '2025-01-28 02:19:32');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `menu_name` varchar(255) NOT NULL,
  `menu_description` text DEFAULT NULL,
  `time_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`menu_id`, `menu_name`, `menu_description`, `time_at`) VALUES
(1, 'food', 'Slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty.', '2025-01-28 02:03:42'),
(2, 'drinks', 'drinks is slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty.', '2025-01-28 02:09:59'),
(3, 'brunch', 'Brunch is slow-cooked for eight hours, this intensely flavored and juicy lamb shank, infused with fresh rosemary and sage, is a house specialty.', '2025-01-28 02:10:57'),
(7, 'dummy', 'dummy123', '2025-01-28 03:24:52'),
(8, 'dumy2', '122', '2025-01-28 03:25:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `menu_id` (`menu_id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
