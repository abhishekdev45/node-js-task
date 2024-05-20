-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lattice-innovation
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `psychiatrists`
--

DROP TABLE IF EXISTS `psychiatrists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psychiatrists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `HospitalId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `HospitalId` (`HospitalId`),
  CONSTRAINT `psychiatrists_ibfk_1` FOREIGN KEY (`HospitalId`) REFERENCES `hospitals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psychiatrists`
--

LOCK TABLES `psychiatrists` WRITE;
/*!40000 ALTER TABLE `psychiatrists` DISABLE KEYS */;
INSERT INTO `psychiatrists` VALUES (1,'Dr. John Doe','2024-05-20 17:02:19','2024-05-20 17:02:19',1),(2,'Dr. John Walker','2024-05-20 17:15:50','2024-05-20 17:15:50',1),(3,'John Doe 16','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(4,'Michael Doe 3','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(5,'Emily Johnson 10','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(6,'Emily Doe 35','2024-05-20 17:17:27','2024-05-20 17:17:27',4),(7,'David Smith 35','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(8,'Emily Wilson 29','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(9,'Michael Doe 6','2024-05-20 17:17:27','2024-05-20 17:17:27',4),(10,'David Johnson 49','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(11,'David Brown 7','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(12,'David Johnson 1','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(13,'Emily Wilson 50','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(14,'Jane Johnson 31','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(15,'Emily Wilson 30','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(16,'John Smith 5','2024-05-20 17:17:27','2024-05-20 17:17:27',4),(17,'John Wilson 18','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(18,'David Wilson 6','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(19,'David Wilson 37','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(20,'David Doe 14','2024-05-20 17:17:27','2024-05-20 17:17:27',1),(21,'John Brown 10','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(22,'John Wilson 16','2024-05-20 17:17:27','2024-05-20 17:17:27',1),(23,'David Doe 14','2024-05-20 17:17:27','2024-05-20 17:17:27',1),(24,'David Johnson 35','2024-05-20 17:17:27','2024-05-20 17:17:27',4),(25,'John Doe 22','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(26,'Michael Doe 42','2024-05-20 17:17:27','2024-05-20 17:17:27',1),(27,'John Smith 36','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(28,'Jane Johnson 31','2024-05-20 17:17:27','2024-05-20 17:17:27',3),(29,'John Doe 26','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(30,'Michael Brown 26','2024-05-20 17:17:27','2024-05-20 17:17:27',2),(31,'John Doe 30','2024-05-20 17:17:27','2024-05-20 17:17:27',1),(32,'Michael Brown 15','2024-05-20 17:17:28','2024-05-20 17:17:28',2),(33,'John Wilson 19','2024-05-20 17:17:28','2024-05-20 17:17:28',1),(34,'Jane Johnson 43','2024-05-20 17:17:28','2024-05-20 17:17:28',4),(35,'Michael Smith 5','2024-05-20 17:17:28','2024-05-20 17:17:28',4),(36,'Jane Smith 33','2024-05-20 17:17:28','2024-05-20 17:17:28',2),(37,'David Brown 49','2024-05-20 17:17:28','2024-05-20 17:17:28',1),(38,'David Brown 49','2024-05-20 17:17:28','2024-05-20 17:17:28',2),(39,'David Doe 5','2024-05-20 17:17:28','2024-05-20 17:17:28',2),(40,'Jane Brown 29','2024-05-20 17:17:28','2024-05-20 17:17:28',1),(41,'John Johnson 17','2024-05-20 17:17:28','2024-05-20 17:17:28',2),(42,'Michael Brown 26','2024-05-20 17:17:28','2024-05-20 17:17:28',1),(43,'Dr. Amit Walker','2024-05-20 19:52:38','2024-05-20 19:52:38',2),(44,'Dr. Ankur Walker','2024-05-20 19:52:49','2024-05-20 19:52:49',2),(45,'Dr. Amir Walker','2024-05-20 19:53:03','2024-05-20 19:53:03',4);
/*!40000 ALTER TABLE `psychiatrists` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-21  2:41:19
