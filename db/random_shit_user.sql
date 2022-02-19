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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jwilloughway1','rmebes1@sogou.com','$2b$10$Gh5IQ1yr/.L6RGiraGhXcOTyLI84Aly4ujnwHMJFiNiXTTZELHyP6'),(2,'alesmonde0','nwestnedge0@cbc.ca','$2b$10$bTl96bhbmKbE0mcfxdC9b.OspgynvsBvbizdtkwdN/FMLGL1w8rvu'),(3,'iboddam2','cstoneman2@last.fm','$2b$10$cB6mY0pQRcssuYx1k3aMIe.gy6QNtl33Tq8od2GZYDIjV5jnZCxSa'),(4,'dstanmer3','ihellier3@goo.ne.jp','$2b$10$I66aiZ35aQTbmp/bTdg0L.9p/yokfaRAEKvJOuoRMMtg8aH6IttNy'),(5,'djiri4','gmidgley4@weather.com','$2b$10$ZTuobZAE7a2.GwPMVFyg/utlIIE9PtEJovLRvzOpqTAdwdoYeo9Ka'),(6,'msprague5','larnout5@imdb.com','$2b$10$ifGi3UwVz6/010sxhMekwOIfV2bt.jMLXBJAsLADuzKv5u/rt8F16'),(7,'mpergens6','hnapleton6@feedburner.com','$2b$10$aN0dNvozdoKDiyD11UkmAOvCPKGcxK60HzxrQuNwenbxMttYG8jnO'),(8,'tpenniell7','kperigo7@china.com.cn','$2b$10$Fy8wBO2Mb43Ro9znu63EdOxW.gRcz8CR.gSgnDckGWnMREwn/hk3q'),(9,'msaasdfins8','lmonasdfin8@google.ru','$2b$10$iuTIgq.uIsluxnvO/JRZkORudDclHhVpKcKH/yb2no4NB.UEIax2i'),(10,'jmacarthur9','bsteen9@epa.gov','$2b$10$1NGBKtkIwNS9/0DOFzxiSOcxVcSr0ZlhbEtmnMFoQJ9b7QvmxenPu'),(11,'msabbins8','lmongain8@google.ru','$2b$10$3AF6W/Darmb7v8qlgZpTa.K.cWXBd5xD2p5OxRmZ.xYOIBTyrF9NS');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
