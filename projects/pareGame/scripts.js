document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll('.game-card');
  const button = document.getElementById('RestartButton');

  // навешиваем на кнопку перезагрузки обработчик событий по клику для обновления страницы
  button.addEventListener('click', () => {
    window.location.reload();
  });

  // флаги 
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard = null;
  let endGame = 0;

  // функция flip должна срабатывать при клике пользователем по карточке.
  function flipCard() {
    // Код ниже проверяет какая карточка была открыта при клике первая или вторая.
    // Если вторая то вызываем checkForMatch
    if (lockBoard) return 1;
    if (this === firstCard) return 1;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;

      return 1;
    }

    secondCard = this;
    checkForMatch();
  }

  // Данная функция должна срабатывать, когда пользователь открыл две карточки. 
  // Внутри неё необходимо сравнивать data-атрибуты открытых карточек.
  //Если они одинаковые, то увеличиваем счетчик endGame на 1 и убираем отбработчики на клик с выбранных карточек. (disableCards)
  // Если разные, то просто переворачиваем карточки обратно (unflipCards)
  function checkForMatch() {
    let isMatch = firstCard.dataset.item === secondCard.dataset.item;
    isMatch ? (disableCards(), endGame += 1) : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  //функция обнуления флагов. В ней необходимо устанавливать все флаги в начальное состояние приложения
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //Функция перемешивающая карточки в случайном порядке. Запускается при станрте приложения
  (function shuffle() {
    document.getElementById('RestartButton').style.display = 'none';
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      console.log(randomPos);
      card.style.order = randomPos;
    });
  })();

  //делаем кнопку перезапуска игры видимой для пользователя
  function showRestartButton() {
    button.style.display = 'inline-block';
  }

  // с периодичностью в 1 секунду проверяем значение счетчика endGame, если он равен 8 то отображаем кнопку перезапуска.
  intervalId = window.setInterval(
    () => {
      if (endGame == 8) {
        showRestartButton();
      }
    },
    1000
  );

  //вешаем на все карточки срабатывание функции flipCard при клике.
  cards.forEach(card => card.addEventListener('click', flipCard));

});