const faqItem = document.querySelectorAll('.faq-item');

faqItem.forEach((item)=> {
  const label = item.querySelector('.label');

  item.addEventListener('click', () => {
    item.classList.toggle('open');
    label.classList.toggle('active-icon');
  })
})




