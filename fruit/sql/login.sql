# Host: localhost  (Version: 5.5.53)
# Date: 2019-07-11 16:19:10
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES gb2312 */;

#
# Structure for table "login"
#

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

#
# Data for table "login"
#

/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'admin','123'),(2,'root','123'),(3,'aa','11'),(4,'bb','1234'),(5,'cc','1256'),(6,'adsss','1233434'),(7,'ads','1233434'),(17,'admin','123');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
