<?php get_header(); ?>

	<main class="page-main">
		
		<section class="page container">			
			
			
			<?php if(have_posts()) : ?>

			<?php while (have_posts()) : the_post(); ?>			
				
				<h2 class="page__title"><?php echo the_title(); ?></h2>				
				<div class="page__content"><?php the_content(); ?></div>
			
				<?php endwhile; ?>

			<?php else: ?>				
				<p class="page__error">Здесь должна быть <strong>Страница "<?php echo the_title(); ?>"</strong>!</p>				
			<?php endif; ?>	
		
	</main>

<?php get_footer(); ?>