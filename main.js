const yoz = prompt("Malumot yozing"); // Matn so'rab olish
const fonRang = prompt("Foni rangini kiriting"); // Foni rangi
const textKolir = prompt("Text rangi kiriting"); // Matn rangi

// <h1> element yaratish
const Usertitle = document.createElement("h1");
Usertitle.textContent = yoz; // Matnni qo'shish
document.body.append(Usertitle); // H1ni sahifaga qo'shish

// Ranglarni o'rnatish
Usertitle.style.color = textKolir; // Matn rangi
document.body.style.backgroundColor = fonRang; // Fon rangi

