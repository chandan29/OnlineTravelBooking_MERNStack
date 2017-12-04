-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: kayak
-- ------------------------------------------------------
-- Server version	5.7.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `emailId` varchar(45) NOT NULL,
  `password` varchar(400) NOT NULL,
  `creditCard` bigint(16) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `middleName` varchar(30) DEFAULT NULL,
  `dateOfBirth` varchar(45) DEFAULT NULL,
  `userCountry` varchar(30) DEFAULT NULL,
  `userCity` varchar(30) DEFAULT NULL,
  `userAddress` varchar(45) DEFAULT NULL,
  `userZip` int(10) DEFAULT NULL,
  `userPhone` int(20) DEFAULT NULL,
  `userAgeCategory` varchar(20) DEFAULT NULL,
  `userState` varchar(20) DEFAULT NULL,
  `dummy` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'shripal Mod','modani','shripal@s.com','$2a$10$k7OmKUsJdnjXTF0FrrxhA.RRyQDNXN9H..6dtRQL2pYNv0SKZNaNG',12343455,'1244','Male','shripal Mod','1244-121','fnrnfjrnfj','null','jdjdj',1234,NULL,'nullee','fnknk',NULL),(6,'shashank','singh','shashank@gmail.com','$2a$10$iclI0O8DtAiUPdReOuzD6u1Y5.KClhroIR8.Bsc4Tmc4Kja86aPyC',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'c','c','c@c.com','$2a$10$zCyl5TYE70BnMs8z13Rc6.20mf3XGWQCl4qDfUKBfPTwmJFiQt4Z6',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'v','v','v@v.com','$2a$10$SvVWXKhdMGsifTiSxSUNlunXuFNz/SikH1sU2tDCGswvnxgE8FwI6',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'b','b','b@b.com','$2a$10$dOMq4Er5CwJt/wbgfl01Xe6jPIJanrOnMcc5qkznFoyhEMZ4VKmfi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'q','q','q@q.com','$2a$10$osi4tyGUdUaTQBOlIO1Q4OBxDnqqcrBuhcZDydFgQ2lUbWP0t5NvC',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-03 23:39:24
