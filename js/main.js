// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

// console.log(document.getElementsByClassName('login')[0]);
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');



const listUsers = [
  {
    id: '01',
    email: 'maks@gmail.com',
    password: '12345',
    displayName: 'MaksJS'
  },
  {
    id: '02',
    email: 'kate@gmail.com',
    password: '123456',
    displayName: 'KateKillMaks'
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
   const user = this.getUser(email);
   if(user && user.password === password) {
     this.autorizedUser(user);
     handler();
   } else {
     alert('Пользователь с такими данный не найден')
   }
  },
  logOut() {
    console.log('выход');
  },
  signUp(email,password, handler) {
    if (!this.getUser(email)) {
        const user = {email, password, displayName: email};
        listUsers.push(user);
        this.autorizedUser(user)
        handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  getUser(email) {
    return listUsers.find(item => item.email === email) 
  },
  autorizedUser(user) {
    this.user = user;
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if(user) {
    loginElem.style.display = 'none',
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
});

toggleAuthDom();


