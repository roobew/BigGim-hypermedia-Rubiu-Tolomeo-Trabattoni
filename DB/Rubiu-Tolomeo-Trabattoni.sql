-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Lug 16, 2015 alle 16:30
-- Versione del server: 5.1.71-community-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_hypermediabiggym`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `shortDescription` text NOT NULL,
  `description` text NOT NULL,
  `benefit` text NOT NULL,
  `intro_img` varchar(100) NOT NULL,
  `page_img` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `category`
--

INSERT INTO `category` (`id`, `name`, `shortDescription`, `description`, `benefit`, `intro_img`, `page_img`) VALUES
(1, 'GAG', 'Train your lower body with this course: an all-around workout focused on legs, abdominals and glutes.', 'Also known as Abs, butt and thighs.\r\nA great group workout that targets these 3 major areas for optimum results.', 'Anyone can benefit from this course.\r\nIf you are concerned with your lower body, whether you want to tonify, lose weight or gain strenght, this is the course for you.', 'http://hypermediabiggym.altervista.org/AllCategory/gag_intro.jpeg', 'http://hypermediabiggym.altervista.org/CourseCategory/gag.jpg'),
(2, 'Pilates', 'Perfect your balance and flexibility with one of the most famous way of exercising in the entire world.', 'Invented by Joseph Pilates, it is the art of controlled movements.\r\nPilates'' system allows for different exercises to be modified in range of difficulty from beginner to advanced or to any other level. Intensity can be increased over time as the body conditions and adapts to the exercises.', 'Pilates improves flexibility, builds strength and develops control and endurance in the whole human body.\r\nIt puts emphasis on alignment, breathing, developing a strong powerhouse, and improving coordination and balance.', 'http://hypermediabiggym.altervista.org/AllCategory/pilates_intro.png', 'http://hypermediabiggym.altervista.org/CourseCategory/pilates.jpg'),
(3, 'Spinning', 'High intensity cycling courses mixing working out with music for a better endurance, explosiveness and all-around well being.', 'Spinning is the common name for indoor cycling on stationary bikes. Combining energizing music with unique workouts, spinning classes deliver a great fitness workout with powerful results.', 'Spinning provides many benefits, including cardiovascular strength, lower total cholesterol and decreased stress.\r\nAnyone can benefit from spinning, but advanced classes require high stamina because of their intensity.', 'http://hypermediabiggym.altervista.org/AllCategory/spinning_intro.jpeg', 'http://hypermediabiggym.altervista.org/CourseCategory/spinning2.jpg');

-- --------------------------------------------------------

--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `shortDesc` text NOT NULL,
  `description` text NOT NULL,
  `target` text NOT NULL,
  `level` enum('Basic','Medium','Advanced') NOT NULL,
  `specialFeatures` varchar(50) NOT NULL,
  `intro_img` varchar(100) NOT NULL,
  `img1` varchar(100) NOT NULL,
  `img2` varchar(100) NOT NULL,
  `img3` varchar(100) NOT NULL,
  `idCategory` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategory` (`idCategory`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `course`
--

INSERT INTO `course` (`id`, `nome`, `shortDesc`, `description`, `target`, `level`, `specialFeatures`, `intro_img`, `img1`, `img2`, `img3`, `idCategory`) VALUES
(1, 'Pilates MatWork', 'Starting point for pilates enthusiastic.', 'Pilates mat work is a series of exercises that are done on the floor without Pilates machines. The attention to the flow of movement and to the core muscles is the same as when you do Pilates on the machines, and mat work is a challenging workout in its own way.', 'All', 'Basic', 'None', 'http://hypermediabiggym.altervista.org/AllCourses-AlphabeticOrder/pilates_matwork.jpg', 'http://hypermediabiggym.altervista.org/Course/mat0.jpeg', 'http://hypermediabiggym.altervista.org/Course/mat2.jpeg', 'http://hypermediabiggym.altervista.org/Course/mat3.jpeg', 2),
(2, 'Pilates Arc', 'Intermediate pilates course.', 'The modern evolution of the classic Step Barrel invented by Joseph Pilates. An ideal tool to relieve your spinal chrd, tonify your abdominal muscles and armonize your entire figure.\r\nIn order to join the Pilates Arc course a good knowledge and experience of the Matwork workout is required.', 'All', 'Medium', 'None', 'http://hypermediabiggym.altervista.org/AllCourses-AlphabeticOrder/pilates_arc.jpg', 'http://hypermediabiggym.altervista.org/Course/arc0.jpeg', 'http://hypermediabiggym.altervista.org/Course/arc2.jpeg', 'http://hypermediabiggym.altervista.org/Course/arc3.jpeg', 2),
(3, 'Spinning Extreme Ride', 'Advanced class for spinning lovers.', 'Experienced indoor cyclists will get the most out of this programme. Improves fitness and performance in a much shorter time.', 'Not for the faint hearted.', 'Advanced', 'None', 'http://hypermediabiggym.altervista.org/AllCourses-AlphabeticOrder/spinning_extreme_ride.jpg', 'http://hypermediabiggym.altervista.org/Course/ext0.jpeg', 'http://hypermediabiggym.altervista.org/Course/ext2.jpeg', 'http://hypermediabiggym.altervista.org/Course/ext3.jpeg', 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `instructor`
--

CREATE TABLE IF NOT EXISTS `instructor` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `shortDescription` text NOT NULL,
  `biography` text NOT NULL,
  `qualifications` text NOT NULL,
  `awards` text NOT NULL,
  `img` varchar(100) NOT NULL,
  `twitterid` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `instructor`
--

INSERT INTO `instructor` (`id`, `name`, `surname`, `shortDescription`, `biography`, `qualifications`, `awards`, `img`, `twitterid`) VALUES
(1, 'Dave', 'Adkins', 'Hey guys! I''m Dave and I''m glad to meet you. I enjoy my job and I love helping people to improve his well-being. Now it''s your time, don''t miss this opportunity.', 'Born in 1982, has dedicated his life to sports and healthness.\nFormer athlete, he is now using his knowledge and experience to help others get in shape.', 'Dave holds a Bachelor''s Degree in Exercise Science and is a certified personal trainer and nutritionist. He has eight years of writing experience behind her and is a regular contributor to a variety of online and print magazines. He is also the author or ghostwriter of five books on a variety of fitness topics and is currently working on his sixth.', 'Pilates level 1 Trainer', 'http://hypermediabiggym.altervista.org/Instructor/dave.jpg', 'biggymdave'),
(2, 'Philip', 'Brown', 'My name is Philip and I''m here to make you working in the hardest way you can. I''m not only your personal trainer, I can be your best friend, your motivator and I''m ready to work hard together. Are you also ready?', 'Philip started BGFC in September 2006 when he was 25. His own training at the time had been leaning heavily towards kettlebells, gymnastics, and movements like the deadlifts and presses, so training was a natural fit. Moreover, Philip quickly became interested in Olympic weightlifting; he now competes at both a local and national level. He remains one of BGFC best coaches and loves working with enthusiastic and determined athletes of all ages.', 'Core Pilates NYC Comprehensive, Spinning certified. \r\nHypermobility: Wonky Bodies with Rebekah Rotstein. SI Joint with Kuan Hui Chew and Healthy Necks with Kelly Kane.', 'Pilates Level 1 Trainer <br><br>\r\nPilates Level 2 Trainer<br><br>\r\nPilates Trainer Course<br><br>', 'http://hypermediabiggym.altervista.org/Instructor/philip.jpg', ''),
(3, 'Jalen', 'Barton', 'Hi everybody! I''m Jalen and I''m an enthusiastic 26 years old, with passion for Fitness and Aerobic in particular. I travelled a lot and during my trip I learnt a lot of stuff from people I met. I''m here to teach you all these things. Don''t miss this opportunity!', 'Jalen started her athletic career as a rower.She competed for three years in high school, before being recruited to Washington State University, where she received her degree in Kinesiology. During summers in college, she coached a masters rowing program out of Los Gatos, California. Once she graduated, she became a full-time high school and masters rowing coach, and began to dabble in triathlons in order to keep fit. Jalen moved to New York to attend Columbia University for a Masters Degree in Applied Physiology.', 'After joining the BGFC team in 2011, she became certified with the Aerobics and Fitness Association of America (AFAA).', 'Spinning Level 1 Trainer<br><br>\r\nSpinning Level 2 Trainer<br><br>\r\nSpinning Level 3 Trainer<br><br>\r\nPilates Level 1 Trainer<br><br>\r\nPilates Level 2 Trainer', 'http://hypermediabiggym.altervista.org/Instructor/jalen.jpg', 'biggymjalen');

-- --------------------------------------------------------

--
-- Struttura della tabella `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `address` varchar(30) NOT NULL,
  `city` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` text NOT NULL,
  PRIMARY KEY (`address`,`city`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `location`
--

INSERT INTO `location` (`address`, `city`, `phone`, `email`) VALUES
('520 Collins Avenue', 'Miami Beach, FL, USA', '+1 305-673-1172', 'info@biggym.com');

-- --------------------------------------------------------

--
-- Struttura della tabella `teachCourse`
--

CREATE TABLE IF NOT EXISTS `teachCourse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idInstructor` int(11) NOT NULL,
  `idCourse` int(11) NOT NULL,
  `day` set('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') NOT NULL,
  `startTime` varchar(5) NOT NULL,
  `endTime` varchar(5) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idInstructor` (`idInstructor`,`idCourse`),
  KEY `idCourse` (`idCourse`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dump dei dati per la tabella `teachCourse`
--

INSERT INTO `teachCourse` (`id`, `idInstructor`, `idCourse`, `day`, `startTime`, `endTime`) VALUES
(1, 3, 3, 'Wednesday', '19:00', '20:00'),
(3, 3, 1, 'Monday', '18:00', '19:00'),
(4, 2, 2, 'Friday', '17:00', '18:00'),
(6, 2, 1, 'Thursday', '20:00', '21:00'),
(7, 3, 2, 'Tuesday', '20:00', '21:00'),
(8, 1, 1, 'Saturday', '13:00', '14:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
