const openBtn = document.getElementById('open');

openBtn.addEventListener('click', () => {
    /* open('http://google.com', '_blank', 'width=300,height=300'); */

    open('http://google.com', '_blank', 'width=300,height=300,left=300,top=200');
})