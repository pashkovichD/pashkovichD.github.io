<?php
	/*
		Template Name: Главная
	*/
?>

<?php get_header(); ?>

	<main class="page-main">
		
		<section class="slider">
			<div class="slider__wrapper container">
				<h2 class="slider__title">Оптовые поставки<br> минеральной воды<br> и безалкогольных напитков</h2>

				<?php 
					$slider = new WP_Query(array(
						'post_type' => 'slider',
						'order' => 'ASC'
					));

					$count_posts = wp_count_posts('slider');
 					$published_posts = $count_posts->publish;
					
				?>

				<?php if($slider->have_posts()) : ?>

					<div class="slider__number"><span class="current"></span>/<span class="total"></span></div>
					<ul class="slider__list">
						<?php while ($slider->have_posts()) : $slider->the_post(); ?>
						<li class="slider__item">
							<picture>								
								<source media="(min-width: 1200px)" type="image/webp" srcset="<?php the_field('img_webp'); ?> 1x, <?php the_field('img_2x_webp'); ?> 2x">
								<source type="image/webp" srcset="<?php the_field('img-mobile_webp'); ?> 1x, <?php the_field('img-mobile_2x_webp'); ?> 2x">
								<source media="(min-width: 1200px)" srcset="<?php the_field('img'); ?> 1x, <?php the_field('img_2x'); ?> 2x">
								<img src="<?php the_field('img-mobile'); ?>" srcset="<?php the_field('img-mobile_2x'); ?> 2x" alt="<?php echo the_title(); ?>">
							</picture>
						</li>
						<?php endwhile; ?>
					</ul>
					<div class="slider__preloader">
			<?php for($i = 0; $i < $published_posts; $i++) : ?>
				<div data-slick-index="<?php echo $i; ?>" class="progressBar"></div>
			<? endfor; ?>
					</div>					
				</div>
				
				<?php else: ?>
					<div class="developer">
						<svg fill="#e28605" width="73" height="65">
							<use xlink:href="#icon-developer"></use>
						</svg>
						<p class="developer__text">Место для слайдера. Нужно добавить хотя бы один слайд!</p>
					</div>
				<?php endif; ?>
		</section>

		<section class="about container">
			<div class="about__1-col">
				<h2 class="about__title">Немного о нас</h2>
				<div class="about__desc">ООО "Эльбрусская прохлада"- оптовые продажи безалкогольных напитков от производителя.Широкий ассортимент лимонадов,минеральной воды,разных сементов.Артезианская питьевая вода,добывается из скважины глубиной 230 м. Автоматизированная система розлива исключает любые загрязнения в процессе производства, а отсутствие поблизости крупных предприятий и сельхозугодий гарантирует чистоту добываемой воды.</div>
			</div>
			<div class="about__2-col">

				<?php 
					$advantage = new WP_Query(array(
						'post_type' => 'advantage',
						'order' => 'ASC'
					));

					$count_advantage = wp_count_posts('advantage');
 					$published_advantage = $count_advantage->publish;
					
				?>

				<?php if($advantage->have_posts()) : ?>

					<div class="about__nav">
						<div class="about__number"><span class="current"></span>/<span class="total"></span></div>
							<div class="about__preloader">
							<?php for($i = 0; $i < $published_advantage; $i++) : ?>
								<div data-slick-index="<?php echo $i; ?>" class="ab_progressBar"></div>
							<? endfor; ?>
							</div>
						<div class="about__arrows"></div>
					</div>					

					<ul class="about__list">
						<?php while ($advantage->have_posts()) : $advantage->the_post(); ?>
						<li class="about__item">
							<svg width="86" height="86" fill="#1946ba"><use xlink:href="#icon-<?php the_field('icon'); ?>"></use></svg>
							<span><?php the_field('text'); ?></span>
						</li>
						<?php endwhile; ?>
					</ul>					
				</div>
				
				<?php else: ?>
					<div class="developer">
						<svg fill="#e28605" width="73" height="65">
							<use xlink:href="#icon-developer"></use>
						</svg>
						<p class="developer__text">Место для слайдера. Нужно добавить хотя бы один слайд!</p>
					</div>
				<?php endif; ?>
			
		</section>

		<section class="request">
			<div class="request__wrapper container">
				<div class="request__desc">
					<h2 class="request__title">Получить оптовый прайс</h2>
					<p class="request__comment">Оставьте заявку и получите прайс на почту</p>
					<svg width="420" height="467" fill="#1946ba"><use xlink:href="#icon-price"></use></svg>
				</div>

				<form method="POST" action="/" class="request__form form form--nojs">
					<div class="request__items">
						<p class="request__item form__item">
							<label class="form__label visually-hidden" for="request__name">Ваше имя</label>
							<input class="form__input" type="text" name="request__name" id="request__name" value="" placeholder="Имя">
						</p>
						<p class="request__item form__item">
							<label class="form__label visually-hidden" for="request__phone">Номер телефона</label>
							<input class="form__input" type="email" name="request__phone" id="request__phone" value="" placeholder="E-mail">
						</p>					
					</div>
					<input type="submit" class="request__submit button form__submit" aria-label="Отправить заявку" value="Отправить">	
				</form>
			</div>
		</section>		
		
	</main>

<?php get_footer(); ?>