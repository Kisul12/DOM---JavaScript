// DOM SELECTION
// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'Hello Kisul';
// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Paragraf Baru dari javascript';

// document.getElementsByTagName()
const p = document.getElementsByTagName('p');
// p[1].style.backgroundColor = 'lightgreen';
for (let i = 0; i < p.length; i++) {
    // p[i].style.backgroundColor = 'lightgreen';
    if (i == 1) {
        p[i].style.backgroundColor = 'lightgreen';
    }
    if (i == 3) {
        p[i].style.backgroundColor = 'blue';
    }
}
// document.querySelector()

// document.querySelectorAll()