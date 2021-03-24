<!DOCTYPE html>
<html lang="en">

<head>

	<?php wp_head(); ?>

	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>
	<title>HospitalCare+</title>

	<!-- favicon -->
	<link rel="icon" href="img/logos/favicon.png" />

	<!-- fonts -->
	<!--
	<link rel="preload" as="font" href="fonts/BebasNeue.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/PlayfairDisplay-Regular.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Montserrat-Regular.woff2" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Poppins-Black.ttf" type="font/ttf" crossorigin="anonymous">
	<link rel="preload" as="font" href="fonts/Poppins-Regular.ttf" type="font/ttf" crossorigin="anonymous">
-->

</head>

<body>

	<nav class="navbar">
		<a href="index.php" class="navbar__logo-wrap">
			<img src="http://localhost/hospitalcare/wp-content/uploads/2021/03/logo.png" alt="HospitalCare+ Logo" class="navbar__logo">
		</a>
		
		<?php wp_nav_menu(
				array(
					'theme-location' => 'top-menu',
					'menu_class' => 'navbar__menu'
				) 
			); ?>
<!--
<ul class="navbar__menu">
	<li class="navbar__item">
		<a href="http://localhost/hospitalcare+/index.php" class="navbar__link">Home</a>
	</li>
	<li class="navbar__item">
		<a href="http://localhost/hospitalcare+/about.php" class="navbar__link">About</a>
	</li>
	<li class="navbar__item">
		<a href="http://localhost/hospitalcare+/contact.php" class="navbar__link">Contact</a>
	</li>


</ul>
-->

		<span class="navbar__toggler-wrap" onclick="toggleNavbar()">
			<span class="navbar__toggler"></span>
		</span>
	</nav>





	<!--	creative_hat 
<a href='https://www.freepik.com/vectors/background'>Background vector created by Creative_hat - www.freepik.com</a>
-->
