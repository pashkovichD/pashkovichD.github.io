let acc = document.querySelectorAll(".accordion__title");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    if(this.classList.contains("active_faq_question")) {
      this.classList.remove("active_faq_question");      
      contentAction(this);
    } else {
      // приводим все элементы аккордена в начальное сотояние
      acc.forEach((elem) => {
        elem.classList.remove('active_faq_question');
        let text = elem.nextElementSibling;
        if (text.style.maxHeight) {
          text.style.maxHeight = null; // делаем высоту равной 0
        }
      });

      /* Добавление активного класса '.active_faq_question' кнопке button */   
      this.classList.add("active_faq_question");      
      contentAction(this);
    }   
  });
}

/* Появление/скрытие .content за активной кнопкой*/
function contentAction(title) {
  let content = title.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null; // делаем высоту равной 0
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // свойство height делает равным его фактической высоте
  }
}