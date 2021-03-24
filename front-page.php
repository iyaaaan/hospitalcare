<?php include('header.php'); 
/* Template Name: home */
?>

<!-- Hero banner-->
<div class="hero">
	<div class="hero__caption-wrap">
		<div class="hero__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

		<a href="contact.php" class="hero__cta">Contact us</a>
	</div>

</div>


<!-- About section -->
<div class="container-full">
	<div class="header">About HospitalCare+</div>

	<div class="card">
		<?php 
			$post_tags = array();
			
			$args = array(
				'post_type' => 'post',
				'post_status' => 'publish',
        			'order' => 'ASC',
				'category_name' => 'benefits',
				'posts_per_page' => -1,
			);

			$arr_posts = new WP_Query( $args );
 
			if ( $arr_posts->have_posts() ) :
				while ( $arr_posts->have_posts() ) : $arr_posts->the_post();
		
		?>

		<div class="card-wrap">
			<div class="card__item">
				<div class="card__icon">
					<?php  $icon = get_post_meta( get_the_ID(), 'icon' );
				
    				if ( $icon ) : ?>
					<?php foreach( $icon as $icon ) { ?>

					<div>
						<!--product thumbnails-->
						<?php echo $icon; ?>
					</div>
					<?php } ?>
					<?php endif; ?>
				</div>

				<div class="card__content">
					<h2 class="card__title"><?php the_title(); ?></h2>
					<div class="card__text"><?php the_content(); ?></div>
				</div>
			</div>
		</div>

		<?php endwhile; endif; ?>

	</div> <!-- ./card -->
</div> <!-- ./container -->


<!-- Testimonials -->
<div class="testimonials">
	<div class="header">Testimonials</div>

	<div class="ow1 owl-carousel owl-theme test-owl">

		<?php 
			$post_tags = array();
			
			$args = array(
				'post_type' => 'post',
				'post_status' => 'publish',
				'category_name' => 'testimonials',
				'posts_per_page' => -1,
			);

			$arr_posts = new WP_Query( $args );
 
			if ( $arr_posts->have_posts() ) :
				while ( $arr_posts->have_posts() ) : $arr_posts->the_post();
		
			?>

		<div class="item">
			<div class="testimonials__item">
				<div class="testimonials__img-wrap">
					<?php if(has_post_thumbnail()): ?>
					<img src="<?php the_post_thumbnail_url(); ?>" alt="HealthCare+ Testimony" class="testimonials__img" height="100px" width="100px">
					<?php endif; ?>
				</div>

				<div class="testimonials__content">
					<div class="testimonials__text">
						<?php the_content(); ?>
					</div>
					<!--<a href="#" class="testimonials__author"></a>-->
				</div>
			</div>
		</div> <!-- ./owl item -->

		<?php endwhile; endif; ?>

	</div><!-- ./owl carousel -->
</div>


<?php include('footer.php') ?>
