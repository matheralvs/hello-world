// TypeWriter Effect

const text = document.querySelector('.comment');

function typeWriter(el) {
  const textArr = el.innerHTML.split('');
  el.innerHTML = "";

  textArr.forEach((n,i) => {
    setTimeout(() => {
      el.innerHTML += n;
    }, 75 * i);
  });
}

typeWriter(text);
