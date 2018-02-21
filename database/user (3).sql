-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 20, 2018 at 10:43 AM
-- Server version: 5.5.56-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `talklikethat_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `password` varchar(25) CHARACTER SET latin1 DEFAULT NULL,
  `name` varchar(25) CHARACTER SET latin1 DEFAULT NULL,
  `surname` varchar(25) CHARACTER SET latin1 DEFAULT NULL,
  `career` varchar(25) CHARACTER SET latin1 DEFAULT NULL,
  `interest` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `picture_profile` varchar(25) CHARACTER SET latin1 DEFAULT NULL,
  `color_profile` varchar(10) CHARACTER SET latin1 DEFAULT NULL,
  `bio` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `display_name` varchar(25) CHARACTER SET latin1 DEFAULT NULL,
  `facebook_proviser_id` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `level` varchar(25) CHARACTER SET latin1 DEFAULT NULL,
  `speech_hours` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `name`, `surname`, `career`, `interest`, `picture_profile`, `color_profile`, `bio`, `display_name`, `facebook_proviser_id`, `level`, `speech_hours`) VALUES
(0, 'asdasdas', 'asdasdasd', 'dew', 'dew', 'dew', 'dew', 'dew', 'dew', 'dew', 'dew', 'dew', 'dew', 1000),
(1, 'janjira@gmail.com', 'janji48915', 'Janjira', 'Siriwattana', 'Designer', 'Cooking, Take a photo', 'Bird', '#9FD9EB', 'Korean', 'Janjira', 'Janjira Jan', 'Superstar', 210),
(2, 'ramida@gmail.com', '57207bgtfd', 'Ramida', 'Vongtree', 'Programmer', 'Cooking,Beauty', 'Bee', '#FB84A5', 'english', 'Ramida', 'Ramida RD', 'Superstar', 451),
(3, 'tanatcha@gmail.com', '712nhft49', 'Tanatcha', 'Thongjittipong', 'Teacher', 'Cooking,Healthy', 'Lion', '#FB84A5', 'english', 'Tanatcha', 'Tanatcha Ploy', 'Superstar', 312),
(4, 'chakarjkiat@gmail.com', '6freds7467', 'Chakarjkiat', 'Kungwanwong', 'Computer Programmer', 'Beauty', 'Deer', '#FF9C50', 'english', 'Chakarjkiat', 'Chakarjkiat Ku', 'Newbie', 18),
(5, 'motana@gmail.com', '712rewsd47', 'Motana', 'Srisuttho', 'Computer Programmer', 'Movie', 'Eagle', '#712384', 'I love U ', 'Motana', 'Motana Sri', 'Chitter', 82),
(6, 'peerawid@hotmail.com', '2vgtrff1652', 'Peerawid', 'Noidud', 'Designer', 'Take a photo', 'Tiger', '#CCDB66', 'Korean', 'Peerawid', 'Peerawid Noi', 'Master', 4300),
(7, 'thanyaluk @hotmail.co.th', '87900mouy', 'Thanyaluk ', 'Kiticholsakul', 'Programmer', 'Healthy', 'Cow', '#FF9C50', 'Hello :)', 'Thanyaluk ', 'Thanyaluk Luk', 'Expert', 1720),
(8, 'pattaranan@hotmail.com', 'fou09877', 'Pattaranan', 'Kaewfa', 'Lawyer', 'Beauty', 'Lion', '#FF9C50', 'I love U ', 'Pattaranan', 'Pattaranan Nan', 'Chitchat', 27),
(9, 'thitalee@hotmail.co.th', '12qwasx234', 'Thitalee', 'Yoma', 'Chemist', 'Cooking', 'Shark', '#CCDB66', 'english', 'Thitalee', 'Thitalee Yoma', 'Master', 4300),
(10, 'wiranyupa@hotmail.co.th', '48914ytrec', 'Wiranyupa', 'phonsin', 'Designer', 'Beauty', 'Bee', '#249774', 'Korean', 'Wiranyupa', 'Wiranyupa Pa', 'Master', 2301),
(11, 'thanapat@hotmail.co.th', 'tredg87626', 'Thanapat', 'Luemluay', 'Chemist', 'Beauty,Healthy', 'Bee', '#CCDB66', 'eiei', 'Thanapat', 'Thanapat Lue', 'Master', 302),
(12, 'ekkachai@gmail.com', 'qazwsx94753', 'Ekkachai', 'Promsena', 'Writer and Editor', 'Movie', 'Fox', '#9FD9EB', 'Miss U ', 'Ekkachai', 'Ekkachai EC', 'Master', 1697),
(13, 'prapawit@gmail.com', '98352lporvn', 'Prapawit', 'Prasoppanit', 'Chemist', 'Cooking', 'Crab', '#9FD9EB', 'eiei', 'Prapawit', 'Prapawit Pra', 'Master', 3696),
(14, 'hanakul@gmail.com', 'ytre18564', 'Hanakul', 'Sukprasert', 'Security Guard', 'Movie', 'Ox', '#712384', 'Hello :)', 'Hanakul', 'Hanakul Kul', 'Master', 5695),
(15, 'chollachart@gmail.com', '1uyncas8568', 'Chollachart', 'Rojsithtiwat', 'Loan Officer', 'Movie', 'Lion', '#9FD9EB', 'I love U ', 'Chollachart', 'Chollachart Ch', 'Master', 4300),
(16, 'pimmada@gmail.com', 'gftkk98350', 'Pimmada', 'kreesuradach', 'Librarian', 'Cooking,Take a photo', 'Crab', '#FF9C50', 'I love U ', 'Pimmada', 'Pimmada Kree', 'Newbie', 12),
(17, 'wanthip@hotmail.co.th', '21ooutm651', 'Wanthip', 'tangoon', 'Teacher', 'Beauty', 'Dolphin', '#FB84A5', 'Hello :)', 'Wanthip', 'Wanthip didi', 'Chitter', 23),
(18, 'panida@hotmail.com', 'bbutr9878', 'Panida', 'Ubolthong', 'Lawyer', 'Healthy', 'Fox', '#FB84A5', 'eiei', 'Panida', 'Panida Da', 'Superstar', 301),
(19, 'harit@gmail.com', 'oiumh67465', 'Harit', 'suttisaksri', 'Airline Pilot', 'Cooking', 'Owl', '#712384', 'english', 'Harit', 'Harit Sut', 'Superstar', 232),
(20, 'amornsak@gmail.com', 'rtyuo71245', 'Amornsak', 'Wongjoi', 'Cashier', 'Cooking,Beauty', 'Lion', '#FB84A5', 'Miss U ', 'Amornsak', 'Amornsak WP', 'Superstar', 302),
(21, 'supanun@gmail.com', 'pmuzz57205', 'Supanun', 'Kwanprao', 'Funeral Director', 'Healthy', 'Bee', '#CCDB66', 'Korean', 'Supanun', 'Supanun Nun', 'Supanun Nun', 233),
(22, 'natnapin@gmail.com', 'qqaset57208', 'Natnapin', 'Viteporn', 'Chef', 'Beauty', 'Ox', '#FB84A5', 'I love U ', 'Natnapin', 'Natnapin Vite', 'Superstar', 303),
(23, 'nirawat@hotmail.com', 'uuii18569', 'Nirawat', 'Poramathumsakul', 'Cashier', 'Music', 'Fox', '#9FD9EB', 'Korean', 'Nirawat', 'Nirawat Pora', 'Newbie', 5),
(24, 'petcharit@hotmail.com', '674qwynh62', 'Petcharit', 'Hongsuwan', 'Funeral Director', 'Beauty,Healthy', 'Crab', '#FFDF5E', 'Miss U ', 'Petcharit', 'Petcharit Pet', 'Newbie', 12),
(25, 'pantawit@hotmail.com', '876ytgre29', 'Pantawit', 'Boorasirirak', 'Writer and Editor', 'Beauty,Music', 'Owl', '#ACD6C8', 'eiei', 'Pantawit', 'Pantawit Wit', 'Newbie', 19),
(26, 'nasri@gmail.com', '39812pmnsd', 'Nasri', 'Islam', 'Student', 'Swim', 'Bird', '#FFDF5E', 'I ll b bck 2 u in 2 m', 'Nasri', 'Nasri NS', 'Newbie', 26),
(27, 'teeradon@hotmail.co.th', '57uytrev206', 'Teeradon', 'Chanhom', 'Dentist', 'Tennis', 'Whale', '#ACD6C8', 'I ll b bck 2 u in 2 m', 'Teeradon', 'Teeradon Don', 'Expert', 1248),
(28, 'thanapon@hotmail.co.th', '65uyhnb443', 'Thanapon', 'Visedsang', 'Security Guard', 'Cooking,Beauty', 'Deer', '#FB84A5', 'I ll b bck 2 u in 2 m', 'Thanapon', 'Thanapon TH', 'Expert', 1342),
(29, 'pattraporn@hotmail.com', 'blp983po46', 'Pattraporn', 'Pajariyapong', 'Airline Pilot', 'Movie', 'Ox', '#249774', 'Miss U ', 'Pattraporn', 'Pattrapornc Paja', 'Expert', 1249),
(30, 'khetsophon@gmail.com', '9redwq879', 'Khetsophon', 'Sukpaiboonwat', 'Lawyer', 'Movie', 'Owl', '#712384', 'english', 'Khetsophon', 'Khetsophon Khet', 'Superstar', 231),
(31, 'watsapon@hotmail.co.th', 'pmom71253', 'Watsapon', 'Seankui', 'Airline Pilot', 'Cooking,Take a photo', 'White Bear', '#315987', 'english', 'Watsapon', 'Watsapon Pon', 'Superstar', 301),
(32, 'wisarut@hotmail.co.th', '489bybt18', 'Wisarut', 'Kitticharoenporngam', 'Librarian', 'Football', 'Frog', '#FF9C50', 'eiei', 'Wisarut', 'Wisarut Kitt', 'Superstar', 232),
(33, 'pawarit@hotmail.com', 'tewd39811', 'Pawarit', 'Payungpornpisit', 'Airline Pilot', 'Cooking,Take a photo', 'starfish', '#249774', 'english', 'Pawarit', 'Pawarit PP', 'Superstar', 302),
(34, 'pornwut@gmail.com', 'bbcd39807', 'Pornwut', 'thammapatee', 'Accountant', 'Football', 'Shark', '#FB84A5', 'I ll b bck 2 u in 2 m', 'Pornwut', 'Thanawan Wan', 'Superstar', 233),
(35, 'sarun@gmail.com', 'xwxw39806', 'Sarun', 'Sumetpanich', 'Health Educator', 'Football', 'Ox', '#712384', 'eiei', 'Sarun', 'Sarun Run', 'Superstar', 303),
(36, 'sanmook@gmail.com', 'tref9881', 'Sanmook', 'Nuntasukhon', 'Writer and Editor', 'Beauty', 'Ox', '#CCDB66', 'Hello :)', 'Sanmook', 'Sanmook eiei', 'Chitchat', 23),
(37, 'khwanjai@gmail.com', 'vvce87628', 'Khwanjai', 'Deelertpradit', 'Chef', 'Cooking,Beauty', 'Deer', '#ACD6C8', 'english', 'Khwanjai', 'Khwanjai KJ', 'Chitter', 62),
(38, 'chayakorn@gmail.com', 'ytrq21648', 'Chayakorn', 'pradchayakul', 'Dentist', 'Football', 'Frog', '#9FD9EB', 'Hello :)', 'Chayakorn', 'Chayakorn Pk', 'Chitter', 72),
(39, 'kritsada@gmail.com', 'ttyy44457', 'Kritsada', 'Saengnoy', 'Chef', 'Swim', 'starfish', '#9FD9EB', 'english', 'Kritsada', 'Kritsada AS', 'Superstar', 350),
(40, 'rujirek@gmail.com', 'Sutha09875', 'Rujirek', 'Pookpan', 'Teacher', 'Tennis,Music', 'Owl', '#9FD9EB', 'english', 'Rujirek', 'Rujirek Tekrak', 'Chitchat', 23),
(41, 'preyada@gmail.com', 'reqxd34567', 'Preyada', 'Deesud', 'Chemist', 'Music', 'Dog', '#ACD6C8', 'Korean', 'Preyada', 'Preyada Da', 'Newbie', 3),
(42, 'nattaphon@gmail.com', '71byvt252', 'Nattaphon', 'Chaisiriwattanakul', 'Loan Officer', 'Beauty', 'Frog', '#ACD6C8', 'Miss U ', 'Nattaphon', 'Nattaphon Nat', 'Superstar', 210),
(43, 'chusada@gmail.com', '9imue880', 'Chusada', 'Wattanastiengul', 'Software Developer', 'Tennis', 'Penguin', '#FB84A5', 'Hello :)', 'Chusada', 'Chusada Wat', 'Superstar', 211),
(44, 'nattapat@gmail.com', '71vytre250', 'Nattapat', 'Suracheep', 'Health Educator', 'Swim', 'Brown Bear', '#712384', 'I ll b bck 2 u in 2 m', 'Nattapat', 'Nattapat Pat', 'Superstar', 212),
(45, 'pathinya@hotmail.com', 'qer98yu347', 'Pathinya', 'Thonguam', 'Chef', 'Swim', 'Whale', '#FB84A5', 'Korean', 'Pathinya', 'Pathinya TG', 'Newbie', 0),
(46, 'nuttakarn@hotmail.com', 'eqwz5432', 'Nuttakarn', 'Phurahong', 'Loan Officer', 'Beauty', 'Owl', '#249774', 'eiei', 'Nuttakarn', 'Nuttakarn KK', 'Superstar', 214),
(47, 'tipsukon@hotmail.co.th', 'crce87625', 'Tipsukon ', 'Samode', 'Airline Pilot', 'Beauty', 'Whale', '#315987', 'Miss U ', 'Tipsukon ', 'Tipsukon Kon', 'Superstar', 215),
(48, 'thanetpol@hotmail.co.th', 'aaa21654', 'Thanetpol', 'Jantararojwanich', 'Pharmacist', 'Cooking,Take a photo', 'White Bear', '#FFDF5E', 'english', 'Thanetpol', 'Sanmook Mook', 'Newbie', 6),
(49, 'rinlanin@gmail.com', '67460pojnii', 'Rinlanin', 'Saleah', 'Computer Programmer', 'Swim', 'Penguin', '#9FD9EB', 'Hello :)', 'Rinlanin', 'Rinlanin Sa', 'Chitchat', 17),
(50, 'chaiyakorn@gmail.com', '18vtv563', 'Chaiyakorn', 'Jitchote', 'Veterinarian', 'Healthy', 'Eagle', '#FFDF5E', 'eiei', 'Chaiyakorn', 'Chaiyakorn Chai', 'Newbie', 6),
(51, 'chayut@gmail.com', '712bytq54', 'Chayut', 'Jaroensiripan', 'Accountant', 'Healthy', 'Bird', '#FFDF5E', 'eiei', 'Chayut', 'Chayut Yut', 'Chitchat', 17),
(52, 'pongtawan@gmail.com', 'mnzx48917', 'Pongtawan', 'Kaenprom', 'Security Guard', 'Healthy', 'Eagle', '#FF9C50', 'I ll b bck 2 u in 2 m', 'Pongtawan', 'Pongtawan TW', 'Master', 2504),
(53, 'purichaya@gmail.com', '87621trec', 'Purichaya', 'Dowboot', 'Accountant', 'Healthy', 'Cow', '#ACD6C8', 'Hello :)', 'Purichaya', 'Purichaya Ya', 'Newbie', 14),
(54, 'onanong@hotmail.com', '98351kbcff', 'Onanong', 'Kongkawai', 'Software Developer', 'Swim', 'Brown Bear', '#FF9C50', 'I ll b bck 2 u in 2 m', 'Onanong', 'Onanong KW', 'Chitter', 53),
(55, 'poon@gmail.com', '98psbhu353', 'Poon', 'Piyapattanakul', 'Dentist', 'Movie', 'Owl', '#249774', 'Miss U ', 'Poon', 'Poon Piya', 'Chitchat', 17),
(56, 'chonticha@gmail.com', 'nybt56788', 'Chonticha', 'Pongjit', 'Veterinarian', 'Cooking,Beauty', 'Whale', '#249774', 'hi', 'Chonticha', 'Chonticha hi', 'Superstar', 210),
(57, 'areerat@gmail.com', '4neww8916', 'Areerat', 'Somchure', 'Designer', 'Movie', 'Penguin', '#315987', 'Hello :)', 'Areerat', 'Areerat AR', 'Superstar', 210),
(58, ' jirapat@gmail.com', 'pomm67466', 'Jirapat', 'samrankij', 'Dentist', 'Music', 'Tiger', '#315987', 'I ll b bck 2 u in 2 m', 'Jirapat', 'Jirapat Sam', 'Superstar', 210),
(59, 'pittawat@gmail.com', '1111mdf45', 'Pittawat', 'Taveekitwarachai', 'Security Guard', 'Music', 'Duck', '#FB84A5', 'eiei', 'Pittawat', 'Pittawat TA', 'Superstar', 210),
(60, ' arunwan@gmail.com', 'uytq18566', 'Arunwan', 'Meesang', 'Database Administrator', 'Cooking,Beauty', 'Deer', '#CCDB66', 'I ll b bck 2 u in 2 m', 'Arunwan', 'Arunwan Mee', 'Superstar', 210),
(61, 'panpaporn@hotmail.com', '674ahutrf59', 'Panpaporn', 'Jern', 'Veterinarian', 'Music', 'Tiger', '#FFDF5E', 'Hello :)', 'Panpaporn', 'Panpaporn Pan', 'Superstar', 210),
(62, 'jarin@gmail.com', '18uyt567', 'Jarin', 'Lohakitsongkram', 'Pharmacist', 'Cooking,Beauty', 'Starfish', '#CCDB66', 'Hello :)', 'Jarin', 'Jarin Rin', 'Chitter', 51),
(63, 'panarin@hotmail.com', 'qzsww71249', 'Panarin ', 'Supattatham', 'Architect', 'Beauty', 'Octopus', '#FB84A5', 'Miss U ', 'Panarin ', 'Panarin Supa', 'Chitter', 53),
(64, 'tanapon@gmail.com', '71250nhyui', 'Tanapon', 'Jarernchaidee', 'Designer', 'Cooking,Beauty', 'Dolphin', '#FFDF5E', 'Korean', 'Tanapon', 'Tanapon Pon', 'Chitter', 53),
(65, 'natthanicha@hotmail.com', '71oipm251', 'Natthanicha', 'Dowboot', 'Designer', 'Music', 'White Bear', '#ACD6C8', 'Hello :)', 'Natthanicha', 'Natthanicha NT', 'Chitchat', 17),
(66, 'suthima@gmail.com', 'ytqh71252', 'Suthima', 'Paripunnapok', 'Architect', 'Tennis', 'Bird', '#249774', 'I ll b bck 2 u in 2 m', 'Suthima', 'Suthima Pari', 'Chitchat', 18),
(67, 'rawin@gmail.com', 'nutv71253', 'Rawin', 'Sriphol', 'Loan Officer', 'Beauty,Healthy', 'Ox', '#712384', 'I ll b bck 2 u in 2 m', 'Rawin123', 'Rawin Win', 'Chitchat', 19),
(68, 'thanawan@hotmail.co.th', 'btjj71254', 'Thanawan', 'Tachasomboonsuk', 'Software Developer', 'Beauty', 'Starfish', '#712384', 'Korean', 'Thanawan', 'Thanawan narakpa', 'Chitchat', 20),
(69, 'monsicha@gmail.com', 'pomm71255', 'Monsicha', 'Thibhodee', 'Accountant', 'Movie', 'Dog', '#FB84A5', 'I love U ', 'Monsicha', 'Monsicha Thi', 'Chitchat', 21),
(70, 'thanida@hotmail.co.th', 'qwert87621', 'Thanida', 'Samniang', 'Architect', 'Football', 'Lion', '#9FD9EB', 'eiei', 'Thanida', 'Thanida Sam', 'Chitchat', 22),
(71, 'natchariya@gmail.com', 'vrces87622', 'Natchariya', 'Wongamnuyporn', 'Web Developer', 'Cooking,Take a photo', 'Shark', '#FB84A5', 'eiei', 'Natchariya', 'Natchariya WG', 'Chitchat', 23),
(72, 'nititorn@hotmail.com', 'vzae87623', 'Nititorn', 'Ueramnuaypornchock', 'Chemist', 'Football', 'Frog', '#FB84A5', 'Miss U ', 'Nititorn', 'Nititorn UC', 'Chitchat', 24),
(73, 'chanyawich@gmail.com', '87ytre624', 'Chanyawich', 'Ounjaroen', 'Accountant', 'Movie,Music', 'Fox', '#CCDB66', 'eiei', 'Chanyawich', 'Chanyawich Oun', 'Chitchat', 20),
(74, 'techin@hotmail.co.th', 'qahyu87625', 'Techin', 'Techintananan', 'Architect', 'Football', 'Dog', '#FB84A5', 'Miss U ', 'Techin', 'Techin TT', 'Chitter', 50),
(75, 'patinya@hotmail.com', '87626iiony', 'Patinya', 'Ketkobut', 'Programmer', 'Cooking,Take a photo', 'White Bear', '#FF9C50', 'Korean', 'Patinya', 'Patinya Ket', 'Chitter', 51),
(76, 'kodchapayupon@gmail.com', 'a87627req', 'Kodchapayupon', 'kalantananda', 'Librarian', 'Cooking,Healthy', 'Duck', '#FF9C50', 'english', 'Kodchapayupon', 'Kodchapayupon Kala', 'Chitter', 52),
(77, 'supakrit@gmail.com', '876trhdd28', 'Supakrit', 'Payungnikorn', 'Architect', 'Football', 'Frog', '#249774', 'I love U ', 'Supakrit', 'Supakrit Pakorn', 'Chitter', 53),
(78, 'preeyapat@gmail.com', '87aswe629', 'Preeyapat', 'Sutthipaet', 'Programmer', 'Music', 'starfish', '#712384', 'I love U ', 'Preeyapat', 'Preeyapat Pat', 'Chitter', 54),
(79, 'nantachaporn@gmail.com', 'bbte56784', 'Nantachaporn', 'saisuwan', 'Web Developer', 'Beauty', 'Bird', '#9FD9EB', 'Korean', 'Nantachaporn', 'Nantachaporn Sai', 'Newbie', 3),
(80, 'natthaporn@hotmail.com', '32typ099', 'Natthaporn', 'Kobkulkanyakorn', 'Chemist', 'Beauty', 'Owl', '#FF9C50', 'Miss U ', 'Natthaporn', 'Natthaporn Kong', 'Newbie', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=81;