-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 194.233.68.188    Database: codewith_project
-- ------------------------------------------------------
-- Server version	5.7.37-cll-lve

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
-- Table structure for table `Advance`
--

DROP TABLE IF EXISTS `Advance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Advance` (
  `adID` int(11) NOT NULL AUTO_INCREMENT,
  `Date` date NOT NULL,
  `amount` float DEFAULT NULL,
  `EID` int(11) NOT NULL,
  `UID` int(11) DEFAULT NULL,
  PRIMARY KEY (`adID`),
  KEY `UID` (`UID`),
  KEY `Advance_ibfk_1` (`EID`),
  CONSTRAINT `Advance_ibfk_1` FOREIGN KEY (`EID`) REFERENCES `Employee` (`EID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Advance`
--

LOCK TABLES `Advance` WRITE;
/*!40000 ALTER TABLE `Advance` DISABLE KEYS */;
INSERT INTO `Advance` VALUES (9,'2022-03-16',3000,3,31),(10,'2022-03-16',1000,4,31);
/*!40000 ALTER TABLE `Advance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Attendance`
--

DROP TABLE IF EXISTS `Attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Attendance` (
  `AID` int(11) NOT NULL AUTO_INCREMENT,
  `EID` int(11) NOT NULL,
  `date` date NOT NULL,
  `inTime` time NOT NULL,
  `outTime` time NOT NULL,
  PRIMARY KEY (`AID`),
  KEY `EID` (`EID`),
  CONSTRAINT `Attendance_ibfk_1` FOREIGN KEY (`EID`) REFERENCES `Employee` (`EID`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendance`
--

LOCK TABLES `Attendance` WRITE;
/*!40000 ALTER TABLE `Attendance` DISABLE KEYS */;
INSERT INTO `Attendance` VALUES (111,4,'2022-01-01','08:00:00','15:00:00'),(112,3,'2022-01-02','08:00:00','15:00:00'),(113,4,'2022-01-03','08:00:00','15:00:00'),(114,4,'2022-02-04','08:00:00','15:00:00');
/*!40000 ALTER TABLE `Attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customer` (
  `CID` int(11) NOT NULL AUTO_INCREMENT,
  `customerName` varchar(50) NOT NULL,
  `paymentTerm` varchar(50) DEFAULT NULL,
  `returnTerm` varchar(50) DEFAULT NULL,
  `deliveryTerm` varchar(50) DEFAULT NULL,
  `no` varchar(20) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `town` varchar(50) DEFAULT NULL,
  `branchCode` varchar(50) DEFAULT NULL,
  `accountNo` varchar(50) DEFAULT NULL,
  `bankName` varchar(50) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`CID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES (1,'Rashmi p','weekly123','once a week','123','1','galle road','matara','1','12345','BOC','rashmipaboda2@gmail.com'),(2,'abc1','weekly','once a week','123','1','galle road','galle','123','12345','BOC','ubhanuka@gmail.com'),(3,'abc1','weekly','once a week','123','1','galle road','galle','123','12345','BOC','ubha1nuka@gmail.com'),(4,'abc1','weekly','once a week','123','1','galle road','galle','123','12345','BOC','ubha1nuka@gmail.com'),(5,'abc1','weekly','once a week','123','1','galle road','galle','123','12345','BOC','ubha1nuka@gmail.com'),(6,'abc1','weekly','once a week','123','1','galle road','galle','123',NULL,NULL,'ubha1nuka@gmail.com'),(7,'abc1','weekly','once a week','123','1','galle road','galle','123','12345','BOC','ubha1nuka@gmail.com'),(8,'abc1','weekly','once a week','123','1','galle road','galle','123','12345','BOC','ubha1nuka@gmail.com'),(9,'abc1','weekly','once a week','123','1','galle road','galle','123','12345','BOC','ubha1nuka@gmail.com'),(10,'xyz1','monthly','once a week','563','1','galle road','matara','123','12345','BOC','ubha1nuka@gmail.com'),(11,'abc1','monthly','once a week','574','1','galle road','matara','123','12345','BOC','rashmipaboda2@gmail.com'),(12,'pqr1','monthly','once a year','574','1','galle road','matara','123','12345','NSB','rashmipaboda2@gmail.com');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Employee`
--

DROP TABLE IF EXISTS `Employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Employee` (
  `EID` int(11) NOT NULL AUTO_INCREMENT,
  `DOB` date DEFAULT NULL,
  `fName` varchar(50) DEFAULT NULL,
  `lName` varchar(50) DEFAULT NULL,
  `bankName` varchar(50) DEFAULT NULL,
  `accountNo` varchar(10) DEFAULT NULL,
  `branchCode` varchar(10) DEFAULT NULL,
  `branchName` varchar(50) DEFAULT NULL,
  `NIC` varchar(10) DEFAULT NULL,
  `passportNo` varchar(10) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `designation` varchar(20) DEFAULT NULL,
  `department` varchar(20) DEFAULT NULL,
  `basicSalary` float DEFAULT NULL,
  `dailyWage` float DEFAULT NULL,
  PRIMARY KEY (`EID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Employee`
--

LOCK TABLES `Employee` WRITE;
/*!40000 ALTER TABLE `Employee` DISABLE KEYS */;
INSERT INTO `Employee` VALUES (3,'1999-03-13','Bhanuka','Uyanage','BOC Bank','123456789','123','Koggala','11234',NULL,'Male','Manager','HR',20000,NULL),(4,'1999-03-13','Bhanuka','Uyanage','BOC Bank','123456789','123','Koggala','11234',NULL,'Male','Manager','HR',NULL,2000),(5,'1999-03-13','Bhanuka','Uyanage','BOC Bank','123456789','123','Koggala','11234',NULL,'Male','Manager','HR',250000,NULL),(6,'1999-03-13','Bhanuka','Uyanage','BOC Bank','123456789','123','Koggala','11234',NULL,'Male','Manager','HR',200000,NULL);
/*!40000 ALTER TABLE `Employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OT`
--

DROP TABLE IF EXISTS `OT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OT` (
  `OID` int(11) NOT NULL AUTO_INCREMENT,
  `EID` int(11) NOT NULL,
  `hours` float NOT NULL,
  `otID` int(11) NOT NULL,
  `payPerHour` float NOT NULL,
  `total` float NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`OID`),
  KEY `EID` (`EID`),
  KEY `otfk2_idx` (`otID`),
  CONSTRAINT `OT_ibfk_1` FOREIGN KEY (`EID`) REFERENCES `Employee` (`EID`),
  CONSTRAINT `otfk2` FOREIGN KEY (`otID`) REFERENCES `otData` (`otID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OT`
--

LOCK TABLES `OT` WRITE;
/*!40000 ALTER TABLE `OT` DISABLE KEYS */;
INSERT INTO `OT` VALUES (4,3,2,2,300,600,'2022-03-03'),(5,3,2,1,400,800,'2022-03-03'),(6,4,2,1,400,800,'2022-03-03'),(7,4,2,2,300,600,'2022-03-03'),(9,4,2,2,300,600,'2022-03-16');
/*!40000 ALTER TABLE `OT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `PID` int(11) NOT NULL AUTO_INCREMENT,
  `PName` varchar(50) DEFAULT NULL,
  `sellingPrice` float DEFAULT NULL,
  `EANCode` varchar(50) DEFAULT NULL,
  `UnitOfMeasure` varchar(50) DEFAULT NULL,
  `HSNCode` varchar(50) DEFAULT NULL,
  `shortDescription` varchar(50) DEFAULT NULL,
  `longDescription` varchar(500) DEFAULT NULL,
  `Height` float DEFAULT NULL,
  `Length` float DEFAULT NULL,
  `Weight` float DEFAULT NULL,
  `buyingPrice` float DEFAULT NULL,
  `NoOfItems` int(11) DEFAULT '1',
  `CatID` int(11) NOT NULL,
  `SubCatID` int(11) DEFAULT NULL,
  PRIMARY KEY (`PID`),
  KEY `fk1_idx` (`CatID`),
  KEY `fk2_idx` (`SubCatID`),
  CONSTRAINT `fk1` FOREIGN KEY (`CatID`) REFERENCES `category` (`catID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk2` FOREIGN KEY (`SubCatID`) REFERENCES `subCategory` (`SCID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (1,'testProduct1',7500.5,'ean123','units','h1234','short description','long description',124,30,10,6000,1,1,3),(2,'testProduct2',7500.5,'ean123','units','h1234','short description','long description',124,30,10,6000,1,1,3),(3,'Lux',8000.5,'ean123','units','h1234','short description','long description',124,30,10,6000,1,1,3),(4,'testProduct3',7500.5,'ean123','units','h1234','short description','long description',124,30,10,6000,1,1,NULL);
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Salary`
--

DROP TABLE IF EXISTS `Salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Salary` (
  `SID` int(11) NOT NULL AUTO_INCREMENT,
  `EID` int(11) NOT NULL,
  `month` varchar(10) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `basicSalary` float DEFAULT NULL,
  `addInsentiive` float DEFAULT NULL,
  `dataAllowance` float DEFAULT NULL,
  `travellingAllowance` float DEFAULT NULL,
  `consolidatedSalary` float DEFAULT NULL,
  `EPF` float DEFAULT NULL,
  `ETF` float DEFAULT NULL,
  `totOT` float DEFAULT NULL,
  `totAdvance` float DEFAULT NULL,
  `totalSalry` float DEFAULT NULL,
  `tax` float DEFAULT NULL,
  `netSalary` float DEFAULT NULL,
  PRIMARY KEY (`SID`),
  KEY `Salary_ibfk_1` (`EID`),
  CONSTRAINT `Salary_ibfk_1` FOREIGN KEY (`EID`) REFERENCES `Employee` (`EID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Salary`
--

LOCK TABLES `Salary` WRITE;
/*!40000 ALTER TABLE `Salary` DISABLE KEYS */;
INSERT INTO `Salary` VALUES (22,3,'03','2022',20000,1000,2000,1000,24000,1920,720,1400,19200,4280,0,4280),(23,5,'03','2022',250000,1000,2000,1000,254000,20320,7620,NULL,NULL,233680,0,233680);
/*!40000 ALTER TABLE `Salary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SalesOrder`
--

DROP TABLE IF EXISTS `SalesOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SalesOrder` (
  `salesOrderID` int(11) NOT NULL AUTO_INCREMENT,
  `orderDate` date NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'P',
  `WID` int(11) NOT NULL,
  `total` float NOT NULL,
  `CID` int(11) NOT NULL,
  `CDAID` int(11) NOT NULL,
  `CCID` int(11) NOT NULL,
  `deliveredDate` date DEFAULT NULL,
  `deliveryCharge` float NOT NULL DEFAULT '0',
  `netTotal` float NOT NULL,
  PRIMARY KEY (`salesOrderID`),
  KEY `so1_idx` (`CID`),
  KEY `so2_idx` (`CCID`),
  KEY `so3_idx` (`CDAID`),
  KEY `so4_idx` (`WID`),
  CONSTRAINT `so1` FOREIGN KEY (`CID`) REFERENCES `Customer` (`CID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `so2` FOREIGN KEY (`CCID`) REFERENCES `customerContactNumber` (`CCID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `so3` FOREIGN KEY (`CDAID`) REFERENCES `customerDeliveryAddress` (`CDAID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `so4` FOREIGN KEY (`WID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SalesOrder`
--

LOCK TABLES `SalesOrder` WRITE;
/*!40000 ALTER TABLE `SalesOrder` DISABLE KEYS */;
INSERT INTO `SalesOrder` VALUES (3,'2022-03-15','D',1,420028,1,1,1,'2022-03-16',1000,421028),(4,'2022-03-15','P',1,420028,1,1,1,NULL,1000,421028),(5,'2022-03-15','P',1,420028,1,1,1,NULL,1000,421028),(6,'2022-03-16','P',1,495033,1,1,1,NULL,1000,496033);
/*!40000 ALTER TABLE `SalesOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SalesReturnOrder`
--

DROP TABLE IF EXISTS `SalesReturnOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SalesReturnOrder` (
  `salesReturnOrderID` int(11) NOT NULL AUTO_INCREMENT,
  `initiateDate` date NOT NULL,
  `reason` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'P',
  `WID` int(11) NOT NULL,
  `total` float NOT NULL,
  `CID` int(11) NOT NULL,
  `CDAID` int(11) NOT NULL,
  `CCID` int(11) NOT NULL,
  `finishDate` date DEFAULT NULL,
  `salesOrderID` int(11) NOT NULL,
  PRIMARY KEY (`salesReturnOrderID`),
  KEY `sro1_idx` (`CID`),
  KEY `sro2_idx` (`CCID`),
  KEY `sro3_idx` (`CDAID`),
  KEY `sro4_idx` (`WID`),
  KEY `sr05_idx` (`salesOrderID`),
  CONSTRAINT `sr05` FOREIGN KEY (`salesOrderID`) REFERENCES `SalesOrder` (`salesOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sro1` FOREIGN KEY (`CID`) REFERENCES `Customer` (`CID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sro2` FOREIGN KEY (`CCID`) REFERENCES `customerContactNumber` (`CCID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sro3` FOREIGN KEY (`CDAID`) REFERENCES `customerDeliveryAddress` (`CDAID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sro4` FOREIGN KEY (`WID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SalesReturnOrder`
--

LOCK TABLES `SalesReturnOrder` WRITE;
/*!40000 ALTER TABLE `SalesReturnOrder` DISABLE KEYS */;
INSERT INTO `SalesReturnOrder` VALUES (15,'2022-03-15','wrong goods','D',1,54003.6,1,1,1,'2022-03-16',3),(16,'2022-03-15','wrong goods','P',1,54003.6,1,1,1,NULL,3);
/*!40000 ALTER TABLE `SalesReturnOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Supplier`
--

DROP TABLE IF EXISTS `Supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Supplier` (
  `SID` int(11) NOT NULL AUTO_INCREMENT,
  `sName` varchar(50) DEFAULT NULL,
  `paymentTerm` varchar(50) DEFAULT NULL,
  `no` int(10) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `town` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `returnTerm` varchar(50) DEFAULT NULL,
  `deliveryTerm` varchar(50) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`SID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Supplier`
--

LOCK TABLES `Supplier` WRITE;
/*!40000 ALTER TABLE `Supplier` DISABLE KEYS */;
INSERT INTO `Supplier` VALUES (1,'test1','p1',123,'street','town','country','returnTerm','deliveryTerm','ubhanuka@gmail.com'),(2,'abc','p1',123,'street','town','country','returnTerm','deliveryTerm','ubhanuka@gmail.com'),(3,'test3','p1',123,'street','town','country','returnTerm','deliveryTerm','ubhanuka@gmail.com');
/*!40000 ALTER TABLE `Supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SupplierContactNumber`
--

DROP TABLE IF EXISTS `SupplierContactNumber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SupplierContactNumber` (
  `SCID` int(11) NOT NULL AUTO_INCREMENT,
  `SID` int(11) DEFAULT NULL,
  `contactNumber` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`SCID`),
  KEY `SupplierContactNumber_ibfk_1` (`SID`),
  CONSTRAINT `SupplierContactNumber_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `Supplier` (`SID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SupplierContactNumber`
--

LOCK TABLES `SupplierContactNumber` WRITE;
/*!40000 ALTER TABLE `SupplierContactNumber` DISABLE KEYS */;
INSERT INTO `SupplierContactNumber` VALUES (1,3,'0774917007');
/*!40000 ALTER TABLE `SupplierContactNumber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SupplierStoreLocation`
--

DROP TABLE IF EXISTS `SupplierStoreLocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SupplierStoreLocation` (
  `SSLID` int(11) NOT NULL AUTO_INCREMENT,
  `no` int(11) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `town` varchar(50) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `SID` int(50) NOT NULL,
  PRIMARY KEY (`SSLID`),
  KEY `SID` (`SID`),
  CONSTRAINT `SupplierStoreLocation_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `Supplier` (`SID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SupplierStoreLocation`
--

LOCK TABLES `SupplierStoreLocation` WRITE;
/*!40000 ALTER TABLE `SupplierStoreLocation` DISABLE KEYS */;
INSERT INTO `SupplierStoreLocation` VALUES (1,1,'SL','Galle','abc',1),(2,2,'SL','Galle','abcd',1),(4,3,'SL','Matara','saman',1);
/*!40000 ALTER TABLE `SupplierStoreLocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Warehouse`
--

DROP TABLE IF EXISTS `Warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Warehouse` (
  `WID` int(11) NOT NULL AUTO_INCREMENT,
  `ManagerName` varchar(50) NOT NULL,
  `no` varchar(20) NOT NULL,
  `street` varchar(50) NOT NULL,
  `town` varchar(50) NOT NULL,
  `UID` int(11) NOT NULL,
  PRIMARY KEY (`WID`),
  UNIQUE KEY `UID_UNIQUE` (`UID`),
  KEY `wfk2_idx` (`UID`),
  CONSTRAINT `wfk2` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Warehouse`
--

LOCK TABLES `Warehouse` WRITE;
/*!40000 ALTER TABLE `Warehouse` DISABLE KEYS */;
INSERT INTO `Warehouse` VALUES (1,'Mels2','123','Ahangama 123','Galle 123',49),(5,'Melani','1','Ahangama','Galle',51);
/*!40000 ALTER TABLE `Warehouse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `IP` varchar(80) NOT NULL,
  `userId` int(11) NOT NULL,
  `userName` varchar(45) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `log` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `UID_idx` (`userId`),
  KEY `userName_idx` (`userId`,`userName`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=418 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (362,'::1',31,'Bhanuka','2022-03-16 13:52:00','Update Sales Return Order as Received(salesReturnOrderID-15)'),(363,'::1',31,'Bhanuka','2022-03-16 14:13:51','Add a internal Shipment(internalShipmentID-1)'),(364,'::1',31,'Bhanuka','2022-03-16 14:23:19','Logged into the system'),(365,'::1',31,'Bhanuka','2022-03-16 14:23:31','Add a internal Shipment(internalShipmentID-2)'),(366,'::1',31,'Bhanuka','2022-03-16 14:30:45','Update Internal Shipment as Received(internalShipmentID-1)'),(367,'::1',31,'Bhanuka','2022-03-16 14:32:07','Update Internal Shipment as Received(internalShipmentID-1)'),(368,'::1',31,'Bhanuka','2022-03-16 15:45:32','Logged into the system'),(369,'::1',31,'Bhanuka','2022-03-16 15:45:56','view all sales orders'),(370,'::1',31,'Bhanuka','2022-03-16 15:49:46','view all sales orders'),(371,'::1',31,'Bhanuka','2022-03-16 15:52:09','Logged into the system'),(372,'::1',31,'Bhanuka','2022-03-16 15:52:33','view a sales order(salesOrderID-3)'),(373,'::1',31,'Bhanuka','2022-03-16 15:53:00','view a SalesOrderData(salesOrderID-3)'),(374,'::1',31,'Bhanuka','2022-03-16 15:53:08','view all sales orders'),(375,'::1',31,'Bhanuka','2022-03-16 15:53:18','view all sales orders'),(376,'::1',31,'Bhanuka','2022-03-16 15:53:34','Add a Customer(CID-8)'),(377,'::1',31,'Bhanuka','2022-03-16 15:57:07','Created a new user(UID-54)'),(378,'::1',31,'Bhanuka','2022-03-16 15:57:16','Created a new user(UID-55)'),(379,'::1',54,'Rashmi','2022-03-16 15:58:21','Logged into the system'),(380,'::1',55,'Melani','2022-03-16 15:58:47','Logged into the system'),(381,'::1',54,'Rashmi','2022-03-16 15:59:26','view all Customers '),(382,'::1',55,'Melani','2022-03-16 16:03:40','view all purchase orders'),(383,'::1',54,'Rashmi','2022-03-16 16:06:24','Add a Customer(CID-9)'),(384,'::1',54,'Rashmi','2022-03-16 16:13:43','Logged into the system'),(385,'::1',55,'Melani','2022-03-16 16:14:07','Logged into the system'),(386,'::1',54,'Rashmi','2022-03-16 16:16:36','Add a Customer(CID-10)'),(387,'::1',31,'Bhanuka','2022-03-16 16:16:55','Logged into the system'),(388,'::1',31,'Bhanuka','2022-03-16 16:17:04','Created a new user(UID-56)'),(389,'::1',54,'Rashmi','2022-03-16 16:20:18','update a customer(CID-1)'),(390,'::1',54,'Rashmi','2022-03-16 16:24:55','Add a sales order(salesOrderID-6)'),(391,'::1',55,'Melani','2022-03-16 16:28:20','Logged into the system'),(392,'::1',54,'Rashmi','2022-03-16 16:44:48','Add a Customer(CID-11)'),(393,'::1',54,'Rashmi','2022-03-16 16:46:17','Add a Customer(CID-12)'),(394,'::1',56,'Nethmi','2022-03-16 17:04:16','Logged into the system'),(395,'::1',56,'Nethmi','2022-03-16 17:05:02','Add a category(catID-3)'),(396,'::1',56,'Nethmi','2022-03-16 17:13:29','Add a category(catID-4)'),(397,'::1',56,'Nethmi','2022-03-16 17:14:49','view all categories '),(398,'::1',56,'Nethmi','2022-03-16 17:15:05','update a category(catID-2)'),(399,'::1',56,'Nethmi','2022-03-16 17:15:43','update a category(catID-3)'),(400,'::1',56,'Nethmi','2022-03-16 17:17:28','Add a purchase order(purchaseOrderID-21)'),(401,'::1',31,'Bhanuka','2022-03-16 17:39:45','Logged into the system'),(402,'::1',31,'Bhanuka','2022-03-16 17:40:00','view a internal Shipment(internalShipmentID-1)'),(403,'::1',31,'Bhanuka','2022-03-16 17:41:49','view all internal Shipment to receive(WID-1)'),(404,'::1',31,'Bhanuka','2022-03-16 17:42:26','view all internal Shipment to receive(WID-1)'),(405,'::1',31,'Bhanuka','2022-03-16 17:43:39','view all internal Shipment delivering(WID-1)'),(406,'::1',31,'Bhanuka','2022-03-16 17:44:10','view all internal Shipment to receive(WID-1)'),(407,'::1',31,'Bhanuka','2022-03-16 17:44:45','view all internal Shipment delivering(WID-1)'),(408,'::1',31,'Bhanuka','2022-03-16 17:46:39','view a salesReturnOrderData(salesReturnOrderID-1)'),(409,'::1',31,'Bhanuka','2022-03-16 17:47:56','view a internalShipmentData(internalShipmentID-1)'),(410,'::1',31,'Bhanuka','2022-03-16 17:57:37','view all stocks'),(411,'::1',31,'Bhanuka','2022-03-16 17:58:39','view all stocks for warehouse(WID-5)'),(412,'::1',31,'Bhanuka','2022-03-16 18:17:54','Cahnged Quality level of stocks(ID-12)'),(413,'::1',31,'Bhanuka','2022-03-16 18:18:08','Cahnged Quality level of stocks(ID-13)'),(414,'::1',31,'Bhanuka','2022-03-16 18:29:12','Logged into the system'),(415,'::1',31,'Bhanuka','2022-03-16 18:35:35','Cahnged Quality level of stocks(ID-14)'),(416,'::1',31,'Bhanuka','2022-03-16 18:35:54','Cahnged Quality level of stocks(ID-14)'),(417,'::1',31,'Bhanuka','2022-03-16 18:36:23','Cahnged Quality level of stocks(ID-14)');
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `catID` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(50) NOT NULL,
  PRIMARY KEY (`catID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'test1'),(2,'TV'),(3,'radio'),(4,'laptop');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `charges`
--

DROP TABLE IF EXISTS `charges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `charges` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `amount` float NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `charges`
--

LOCK TABLES `charges` WRITE;
/*!40000 ALTER TABLE `charges` DISABLE KEYS */;
INSERT INTO `charges` VALUES (1,'deliveryChargePerKm',100),(2,'addInsentiive',1000),(3,'dataAllowance',2000),(4,'travellingAllowance',1000);
/*!40000 ALTER TABLE `charges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customerContactNumber`
--

DROP TABLE IF EXISTS `customerContactNumber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerContactNumber` (
  `CCID` int(11) NOT NULL AUTO_INCREMENT,
  `CID` int(11) NOT NULL,
  `contactNumber` varchar(45) NOT NULL,
  PRIMARY KEY (`CCID`),
  KEY `ccn1_idx` (`CID`),
  CONSTRAINT `ccn1` FOREIGN KEY (`CID`) REFERENCES `Customer` (`CID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerContactNumber`
--

LOCK TABLES `customerContactNumber` WRITE;
/*!40000 ALTER TABLE `customerContactNumber` DISABLE KEYS */;
INSERT INTO `customerContactNumber` VALUES (1,1,'0775964727'),(3,1,'0775964727'),(4,2,'344');
/*!40000 ALTER TABLE `customerContactNumber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customerDeliveryAddress`
--

DROP TABLE IF EXISTS `customerDeliveryAddress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customerDeliveryAddress` (
  `CDAID` int(11) NOT NULL AUTO_INCREMENT,
  `CID` int(11) NOT NULL,
  `no` varchar(20) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `town` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CDAID`),
  KEY `customerDeliveryAddress_ibfk_1` (`CID`),
  CONSTRAINT `customerDeliveryAddress_ibfk_1` FOREIGN KEY (`CID`) REFERENCES `Customer` (`CID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customerDeliveryAddress`
--

LOCK TABLES `customerDeliveryAddress` WRITE;
/*!40000 ALTER TABLE `customerDeliveryAddress` DISABLE KEYS */;
INSERT INTO `customerDeliveryAddress` VALUES (1,1,'123','galle','Colombo 3'),(2,1,'123','galle','Colombo'),(3,1,'123','galle','Colombo'),(4,2,'123','galle','Colombo');
/*!40000 ALTER TABLE `customerDeliveryAddress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dependent`
--

DROP TABLE IF EXISTS `dependent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dependent` (
  `DID` int(11) NOT NULL AUTO_INCREMENT,
  `EID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `contactNo` varchar(10) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `relationship` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`DID`),
  KEY `dfk1_idx` (`EID`),
  CONSTRAINT `dfk1` FOREIGN KEY (`EID`) REFERENCES `Employee` (`EID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dependent`
--

LOCK TABLES `dependent` WRITE;
/*!40000 ALTER TABLE `dependent` DISABLE KEYS */;
INSERT INTO `dependent` VALUES (2,6,'H1','0775986757','2002-10-11','Male','b1');
/*!40000 ALTER TABLE `dependent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discounts` (
  `DID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `CID` int(11) NOT NULL,
  `discount` float NOT NULL,
  PRIMARY KEY (`DID`),
  KEY `CID` (`CID`),
  KEY `Discounted_ibfk_2` (`PID`),
  CONSTRAINT `Discounted_ibfk_1` FOREIGN KEY (`CID`) REFERENCES `Customer` (`CID`),
  CONSTRAINT `Discounted_ibfk_2` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
INSERT INTO `discounts` VALUES (1,1,1,10);
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `internalShipment`
--

DROP TABLE IF EXISTS `internalShipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `internalShipment` (
  `internalShipmentID` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'P',
  `FromWID` int(11) NOT NULL,
  `TOWID` int(11) NOT NULL,
  `finishDate` date DEFAULT NULL,
  PRIMARY KEY (`internalShipmentID`),
  KEY `i1_idx` (`FromWID`),
  KEY `i2_idx` (`TOWID`),
  CONSTRAINT `i1` FOREIGN KEY (`FromWID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `i2` FOREIGN KEY (`TOWID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internalShipment`
--

LOCK TABLES `internalShipment` WRITE;
/*!40000 ALTER TABLE `internalShipment` DISABLE KEYS */;
INSERT INTO `internalShipment` VALUES (1,'2022-03-16','D',5,1,'2022-03-16'),(2,'2022-03-16','P',1,5,NULL);
/*!40000 ALTER TABLE `internalShipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `internalShipmentData`
--

DROP TABLE IF EXISTS `internalShipmentData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `internalShipmentData` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `internalShipmentID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `is1_idx` (`PID`),
  KEY `is2_idx` (`internalShipmentID`),
  CONSTRAINT `is1` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `is2` FOREIGN KEY (`internalShipmentID`) REFERENCES `internalShipment` (`internalShipmentID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internalShipmentData`
--

LOCK TABLES `internalShipmentData` WRITE;
/*!40000 ALTER TABLE `internalShipmentData` DISABLE KEYS */;
INSERT INTO `internalShipmentData` VALUES (1,1,10,1),(2,2,20,1),(3,3,30,1),(4,1,10,2),(5,2,20,2),(6,3,30,2);
/*!40000 ALTER TABLE `internalShipmentData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otData`
--

DROP TABLE IF EXISTS `otData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otData` (
  `otID` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `payPerHour` float NOT NULL,
  PRIMARY KEY (`otID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otData`
--

LOCK TABLES `otData` WRITE;
/*!40000 ALTER TABLE `otData` DISABLE KEYS */;
INSERT INTO `otData` VALUES (1,'O-OT',400),(2,'TOT',300),(3,'O-OT',400);
/*!40000 ALTER TABLE `otData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseOrder`
--

DROP TABLE IF EXISTS `purchaseOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchaseOrder` (
  `purchaseOrderID` int(11) NOT NULL AUTO_INCREMENT,
  `orderDate` date NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'P',
  `total` decimal(10,0) NOT NULL,
  `SID` int(11) NOT NULL,
  `SSLID` int(11) NOT NULL,
  `SCID` int(11) NOT NULL,
  `WID` int(11) NOT NULL,
  `deliveredDate` date DEFAULT NULL,
  PRIMARY KEY (`purchaseOrderID`),
  KEY `SID` (`SID`),
  KEY `purchaseOrder_ibfk_4_idx` (`WID`),
  KEY `purchaseOrder_ibfk_2` (`SSLID`),
  KEY `purchaseOrder_ibfk_3` (`SCID`),
  CONSTRAINT `purchaseOrder_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `Supplier` (`SID`),
  CONSTRAINT `purchaseOrder_ibfk_2` FOREIGN KEY (`SSLID`) REFERENCES `SupplierStoreLocation` (`SSLID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `purchaseOrder_ibfk_3` FOREIGN KEY (`SCID`) REFERENCES `SupplierContactNumber` (`SCID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `purchaseOrder_ibfk_4` FOREIGN KEY (`WID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseOrder`
--

LOCK TABLES `purchaseOrder` WRITE;
/*!40000 ALTER TABLE `purchaseOrder` DISABLE KEYS */;
INSERT INTO `purchaseOrder` VALUES (19,'2022-02-27','P',352800,1,1,1,1,NULL),(20,'2022-02-27','D',352800,1,1,1,1,'2022-03-16'),(21,'2022-03-16','P',352800,1,1,1,1,NULL);
/*!40000 ALTER TABLE `purchaseOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseOrderData`
--

DROP TABLE IF EXISTS `purchaseOrderData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchaseOrderData` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `purchaseOrderID` int(11) NOT NULL,
  `unitPrice` decimal(10,0) NOT NULL,
  `qty` int(11) NOT NULL,
  `discount` decimal(10,0) NOT NULL DEFAULT '0',
  `netTot` decimal(10,0) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `pur1_idx` (`PID`),
  KEY `pur2_idx` (`purchaseOrderID`),
  CONSTRAINT `pur1` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `pur2` FOREIGN KEY (`purchaseOrderID`) REFERENCES `purchaseOrder` (`purchaseOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseOrderData`
--

LOCK TABLES `purchaseOrderData` WRITE;
/*!40000 ALTER TABLE `purchaseOrderData` DISABLE KEYS */;
INSERT INTO `purchaseOrderData` VALUES (1,1,19,6000,10,5,57000),(2,2,19,6000,20,2,117600),(3,3,19,6000,30,1,178200),(4,1,20,6000,10,5,57000),(5,2,20,6000,20,2,117600),(6,3,20,6000,30,1,178200),(7,1,21,6000,10,5,57000),(8,2,21,6000,20,2,117600),(9,3,21,6000,30,1,178200);
/*!40000 ALTER TABLE `purchaseOrderData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseReturnOrder`
--

DROP TABLE IF EXISTS `purchaseReturnOrder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchaseReturnOrder` (
  `purchaseReturnOrderID` int(11) NOT NULL AUTO_INCREMENT,
  `initiateDate` date NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'P',
  `SID` int(11) NOT NULL,
  `SSLID` int(11) NOT NULL,
  `SCID` int(11) NOT NULL,
  `reason` varchar(100) NOT NULL,
  `finishDate` date DEFAULT NULL,
  `total` decimal(10,0) NOT NULL,
  `WID` int(11) NOT NULL,
  `purchaseOrderID` int(11) NOT NULL,
  PRIMARY KEY (`purchaseReturnOrderID`),
  KEY `SID` (`SID`),
  KEY `purret1_idx` (`SSLID`),
  KEY `purret2_idx` (`SCID`),
  KEY `purret3_idx` (`WID`),
  KEY `purret4_idx` (`purchaseOrderID`),
  CONSTRAINT `purchaseReturnOrder_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `Supplier` (`SID`),
  CONSTRAINT `purret1` FOREIGN KEY (`SSLID`) REFERENCES `SupplierStoreLocation` (`SSLID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `purret2` FOREIGN KEY (`SCID`) REFERENCES `SupplierContactNumber` (`SCID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `purret3` FOREIGN KEY (`WID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `purret4` FOREIGN KEY (`purchaseOrderID`) REFERENCES `purchaseOrder` (`purchaseOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseReturnOrder`
--

LOCK TABLES `purchaseReturnOrder` WRITE;
/*!40000 ALTER TABLE `purchaseReturnOrder` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchaseReturnOrder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseReturnOrderData`
--

DROP TABLE IF EXISTS `purchaseReturnOrderData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchaseReturnOrderData` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `purchaseReturnOrderID` int(11) NOT NULL,
  `PID` int(11) NOT NULL,
  `unitPrice` float NOT NULL,
  `qty` int(11) NOT NULL,
  `discount` float NOT NULL DEFAULT '0',
  `netTot` float NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `PID` (`PID`),
  KEY `ProductSalesReturnOrder_ibfk_2_idx` (`purchaseReturnOrderID`),
  CONSTRAINT `ProductSalesReturnOrder_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`),
  CONSTRAINT `ProductSalesReturnOrder_ibfk_2` FOREIGN KEY (`purchaseReturnOrderID`) REFERENCES `purchaseReturnOrder` (`purchaseReturnOrderID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseReturnOrderData`
--

LOCK TABLES `purchaseReturnOrderData` WRITE;
/*!40000 ALTER TABLE `purchaseReturnOrderData` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchaseReturnOrderData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salesOrderData`
--

DROP TABLE IF EXISTS `salesOrderData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salesOrderData` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `salesOrderID` int(11) NOT NULL,
  `unitPrice` float NOT NULL,
  `qty` int(11) NOT NULL,
  `discount` float NOT NULL DEFAULT '0',
  `netTot` float NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `sod1_idx` (`PID`),
  KEY `sod2_idx` (`salesOrderID`),
  CONSTRAINT `sod1` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sod2` FOREIGN KEY (`salesOrderID`) REFERENCES `SalesOrder` (`salesOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salesOrderData`
--

LOCK TABLES `salesOrderData` WRITE;
/*!40000 ALTER TABLE `salesOrderData` DISABLE KEYS */;
INSERT INTO `salesOrderData` VALUES (7,1,3,7500.5,10,20,60004),(8,2,3,7500.5,20,10,135009),(9,4,3,7500.5,30,0,225015),(10,1,4,7500.5,10,20,60004),(11,2,4,7500.5,20,10,135009),(12,4,4,7500.5,30,0,225015),(13,1,5,7500.5,10,20,60004),(14,2,5,7500.5,20,10,135009),(15,4,5,7500.5,30,0,225015),(16,1,6,7500.5,10,20,60004),(17,2,6,7500.5,20,10,135009),(18,4,6,7500.5,40,0,300020);
/*!40000 ALTER TABLE `salesOrderData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salesReturnOrderData`
--

DROP TABLE IF EXISTS `salesReturnOrderData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salesReturnOrderData` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `salesReturnOrderID` int(11) NOT NULL,
  `unitPrice` float NOT NULL,
  `qty` int(11) NOT NULL,
  `discount` float NOT NULL DEFAULT '0',
  `netTot` float NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `srod1_idx` (`PID`),
  KEY `srod2_idx` (`salesReturnOrderID`),
  CONSTRAINT `srod1` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `srod2` FOREIGN KEY (`salesReturnOrderID`) REFERENCES `SalesReturnOrder` (`salesReturnOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salesReturnOrderData`
--

LOCK TABLES `salesReturnOrderData` WRITE;
/*!40000 ALTER TABLE `salesReturnOrderData` DISABLE KEYS */;
INSERT INTO `salesReturnOrderData` VALUES (7,1,15,7500.5,3,20,18001.2),(8,2,15,7500.5,2,10,13500.9),(9,4,15,7500.5,3,0,22501.5),(10,1,16,7500.5,3,20,18001.2),(11,2,16,7500.5,2,10,13500.9),(12,4,16,7500.5,3,0,22501.5);
/*!40000 ALTER TABLE `salesReturnOrderData` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `qualityLevel` varchar(45) NOT NULL DEFAULT 'A',
  `WID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `s1_idx` (`PID`),
  KEY `s2_idx` (`WID`),
  CONSTRAINT `s1` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `s2` FOREIGN KEY (`WID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (5,1,65,'A',1),(6,2,60,'A',1),(7,4,100,'A',1),(8,3,40,'A',1),(9,1,20,'A',5),(10,2,40,'A',5),(11,3,60,'A',5),(14,1,9,'B',1);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockRecord`
--

DROP TABLE IF EXISTS `stockRecord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockRecord` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PID` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UID` int(11) NOT NULL,
  `WID` int(11) NOT NULL,
  `status` varchar(45) NOT NULL DEFAULT 'W',
  `purchaseOrderID` int(11) DEFAULT NULL,
  `salesOrderID` int(11) DEFAULT NULL,
  `salesReturnOrderID` int(11) DEFAULT NULL,
  `purchaseReturnOrderID` int(11) DEFAULT NULL,
  `internalShipmentID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `sf1_idx` (`PID`),
  KEY `sf2_idx` (`WID`),
  KEY `sf3_idx` (`UID`),
  KEY `sf4_idx` (`purchaseOrderID`),
  KEY `sf5_idx` (`salesOrderID`),
  KEY `sf6_idx` (`internalShipmentID`),
  KEY `sf7_idx` (`salesReturnOrderID`),
  KEY `sf8_idx` (`purchaseReturnOrderID`),
  CONSTRAINT `sf1` FOREIGN KEY (`PID`) REFERENCES `Product` (`PID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sf2` FOREIGN KEY (`WID`) REFERENCES `Warehouse` (`WID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sf3` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sf4` FOREIGN KEY (`purchaseOrderID`) REFERENCES `purchaseOrder` (`purchaseOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sf5` FOREIGN KEY (`salesOrderID`) REFERENCES `SalesOrder` (`salesOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sf6` FOREIGN KEY (`internalShipmentID`) REFERENCES `internalShipment` (`internalShipmentID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sf7` FOREIGN KEY (`salesReturnOrderID`) REFERENCES `SalesReturnOrder` (`salesReturnOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sf8` FOREIGN KEY (`purchaseReturnOrderID`) REFERENCES `purchaseReturnOrder` (`purchaseReturnOrderID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockRecord`
--

LOCK TABLES `stockRecord` WRITE;
/*!40000 ALTER TABLE `stockRecord` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockRecord` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subCategory`
--

DROP TABLE IF EXISTS `subCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subCategory` (
  `SCID` int(11) NOT NULL AUTO_INCREMENT,
  `catID` int(11) NOT NULL,
  `subCategoryName` varchar(50) NOT NULL,
  `discount` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`SCID`),
  KEY `subCategory_ibfk_1_idx` (`catID`),
  CONSTRAINT `subCategory_ibfk_1` FOREIGN KEY (`catID`) REFERENCES `category` (`catID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subCategory`
--

LOCK TABLES `subCategory` WRITE;
/*!40000 ALTER TABLE `subCategory` DISABLE KEYS */;
INSERT INTO `subCategory` VALUES (1,1,'t1',0),(3,2,'radio',10);
/*!40000 ALTER TABLE `subCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `password` varchar(500) NOT NULL,
  `acessLevel` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `town` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  UNIQUE KEY `UID_UNIQUE` (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (31,'Bhanuka','$2b$10$U8RtlaB..CD.YFsRle79SOKRU3jPWYHupsDdqJMiKgIaX966Qxyn6',0,'ubhanuka@gmail.com','Galle'),(49,'abc','$2b$10$R0gRBmzfeGa0nQH9RBziguA1QMOq1gLI/JZWYm6dASf0hwbM./MXe',0,'ubhanuka@gmail.com',NULL),(51,'abci2','$2b$10$OUQf9vd5P78m/6PaXQhS.ezrYFtLof2FATubGgnjkWU.BPpGCUI1O',0,'ubhanuka@gmail.com',NULL),(53,'abcdi3','$2b$10$ttbfGtYnK3bUSJduTYIc7ud.oO7sL96xyokUqrMXVQ.1YSDEhcpjO',0,'ubhanuka@gmail.com',NULL),(54,'Rashmi','$2b$10$fG.cApRVE74CaM9J7/ZYCukBSdgBw6G11231PTzSjzACMUI68qqkm',1,'rashmipaboda2@gmail.com',NULL),(55,'Melani','$2b$10$39VgRL6omdtYShVrBIiM5eTzlBQ7pZVS8Q3R61j6YgnsmfybaisJy',4,'melanisandalika@gmail.com',NULL),(56,'Nethmi','$2b$10$IfwakjgtX2uIHKQ3Ms/Equ3hCuK2zLY60jwKU.cXYnL232Tioyowy',3,'randima9999@gmail.com',NULL);
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

-- Dump completed on 2022-03-17 12:15:47
