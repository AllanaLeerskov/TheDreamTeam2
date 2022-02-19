CREATE DATABASE  IF NOT EXISTS `random_shit` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `random_shit`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: random_shit
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price_id` int DEFAULT NULL,
  `photo` blob NOT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `price_id` (`price_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`price_id`) REFERENCES `price` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',1,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(2,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',2,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(3,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',3,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(4,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',4,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(5,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',5,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(6,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',6,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(7,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',7,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(8,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',8,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(9,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',9,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(10,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',10,'2022-02-15 20:49:42','2022-02-15 20:49:42'),(11,'Old Shoes','Old Nike Air Force Shoes. Well used.',NULL,'',11,'2022-02-15 20:49:42','2022-02-15 20:49:42');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-17 12:12:42
