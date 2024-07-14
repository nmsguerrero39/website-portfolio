const titleWords = ['Nina Guerrero.', 'A Designer.', 'A Developer.'];
let index = 0;

animateText();

function animateText() {
  document.querySelector('.type-text').textContent = '';
  typeTextHeader();
}

function typeTextHeader() {
  const currentText = titleWords[index];
  typeText(currentText, document.querySelector('.type-text'));
  index = (index + 1) % titleWords.length;
}

function typeText(text, element) {
  let i = 0;
  const typingInterval = setInterval(() => {
    element.textContent = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        deleteText(element);
      }, 5000);
    }
  }, 100);
}

function deleteText(element) {
  let text = element.textContent;
  const deletingInterval = setInterval(() => {
    text = text.slice(0, -1);
    element.textContent = text;
    if (text === '') {
      clearInterval(deletingInterval);
      setTimeout(() => {
        animateText();
      }, 500);
    }
  }, 50);
}

document.addEventListener('scroll', () => {
  const navBar = document.querySelector('.nav-bar');

  window.scrollY > 0
    ? navBar.classList.add('scrolled')
    : navBar.classList.remove('scrolled');
});

function changePageTitle(title) {
  let newPageTitle = `Nina | ${title}`;
  document.querySelector('title').textContent = newPageTitle;
}

document.querySelector('.js-logo-text').addEventListener('click', () => {
  changePageTitle('Home');
});

document.querySelector('.js-main-page').addEventListener('click', () => {
  changePageTitle('Home');
});

document.querySelector('.js-about-page').addEventListener('click', () => {
  changePageTitle('About');
});

document.querySelector('.js-projects-page').addEventListener('click', () => {
  changePageTitle('Projects');
});

document.querySelector('.js-education-page').addEventListener('click', () => {
  changePageTitle('Education and Experience');
});

document.querySelector('.js-contact-page').addEventListener('click', () => {
  changePageTitle('Contact');
});
