const btn = document.querySelector('.btn');
btn.addEventListener('mousehover', (e) => {
    e.preventDefault();//prevent default behaviour
    console.log('click');
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});