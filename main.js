const form = document.getElementById('survey-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const selected = form.querySelector('input[name="q1"]:checked');
  if (selected) {
    result.textContent = `Ты выбрал: ${selected.value}`;
  } else {
    result.textContent = 'Выбери вариант перед отправкой!';
  }
});
