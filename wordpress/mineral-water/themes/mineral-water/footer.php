	<section class="modal-contact modal">
		<h2 class="modal__title">Свяжитесь с нами</h2>
		<p class="modal__desc">Оставьте свои контактные данные, чтобы наш менеджер смог связаться с Вами в ближайшее время.</p>
		<form id="contact-form" class="form form--nojs" action="/" method="POST">
			<p class="form__item">
				<input class="form__input" type="text" name="contact__name" id="contact__name" value="" placeholder="Имя">
				<label class="visually-hidden" for="contact__name">Имя</label>
			</p>
			<p class="form__item">
				<input class="form__input" type="email" name="contact__email" id="contact__email" value="" placeholder="Эл. почта">
				<label class="visually-hidden" for="contact__email">E-mail</label>
			</p>
			<p class="form__item form__item--last">
				<input class="form__input" type="tel" name="contact__phone" id="contact__phone" value="" placeholder="Телефон">
				<label class="visually-hidden" for="contact__phone">Телефон</label>
			</p>
			<input type="submit" class="form__submit button" value="Отправить">
		</form>	
		<button type="button" class="modal-contact__close close" tabindex="0" aria-label="Закрыть модальное окно"><span class="visually-hidden">Закрыть модальное окно</span></button>
	</section>

	<div class="overlay"></div>	

	<?php wp_footer(); ?>

</body>
</html>