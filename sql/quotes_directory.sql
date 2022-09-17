CREATE DATABASE  IF NOT EXISTS `quotes_directory` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `quotes_directory`;
-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: quotes_directory
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `AUTH_AUTHORITY`
--

DROP TABLE IF EXISTS `AUTH_AUTHORITY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AUTH_AUTHORITY` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ROLE_CODE` varchar(45) DEFAULT NULL,
  `ROLE_DESCRIPTION` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AUTH_AUTHORITY`
--

LOCK TABLES `AUTH_AUTHORITY` WRITE;
/*!40000 ALTER TABLE `AUTH_AUTHORITY` DISABLE KEYS */;
INSERT INTO `AUTH_AUTHORITY` VALUES (5,'USER','User role'),(6,'ADMIN','Admin role');
/*!40000 ALTER TABLE `AUTH_AUTHORITY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_authority`
--

DROP TABLE IF EXISTS `auth_user_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_authority` (
  `user_id` int NOT NULL,
  `authorities_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`authorities_id`),
  KEY `FK_USER_idx` (`authorities_id`),
  CONSTRAINT `auth_user_authority_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `AUTH_USER_DETAILS` (`id`),
  CONSTRAINT `auth_user_authority_ibfk_2` FOREIGN KEY (`authorities_id`) REFERENCES `AUTH_AUTHORITY` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_authority`
--

LOCK TABLES `auth_user_authority` WRITE;
/*!40000 ALTER TABLE `auth_user_authority` DISABLE KEYS */;
INSERT INTO `auth_user_authority` VALUES (7,5),(7,6);
/*!40000 ALTER TABLE `auth_user_authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AUTH_USER_DETAILS`
--

DROP TABLE IF EXISTS `AUTH_USER_DETAILS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AUTH_USER_DETAILS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(45) DEFAULT NULL,
  `USER_KEY` varchar(200) DEFAULT NULL,
  `CREATED_ON` date DEFAULT NULL,
  `UPDATED_ON` date DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AUTH_USER_DETAILS`
--

LOCK TABLES `AUTH_USER_DETAILS` WRITE;
/*!40000 ALTER TABLE `AUTH_USER_DETAILS` DISABLE KEYS */;
INSERT INTO `AUTH_USER_DETAILS` VALUES (7,'shivam','$2a$10$VaqpfIzKpDRt355RevjXCOfNda.NEcgKPpXPcEuvQCL91wuCyrhvy',NULL,NULL,'shivam','Gulia',NULL,NULL,1);
/*!40000 ALTER TABLE `AUTH_USER_DETAILS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `quote_id` int DEFAULT NULL,
  `comment` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `FK_QUOTE_ID_idx` (`quote_id`),
  CONSTRAINT `FK_QUOTE_ID` FOREIGN KEY (`quote_id`) REFERENCES `quotes` (`quote_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (2,2,'this quote is from spiderman movie'),(5,2,'b. h'),(6,2,'hbhkjbj'),(8,2,'asdfa'),(14,2,'this quote is from spiderman movieasfasdf'),(15,2,'this quote is from spiderman movieasfasdf');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quotes` (
  `quote_id` int NOT NULL AUTO_INCREMENT,
  `quote` varchar(300) DEFAULT NULL,
  `author` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`quote_id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotes`
--

LOCK TABLES `quotes` WRITE;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
INSERT INTO `quotes` VALUES (2,'With Great Powers Comes Great Responsibilty','Jordan Belford'),(42,'There is no Nobility in Poverty.','Jordan Belford');
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-17 16:22:51
