let descr_text = document.querySelector("#descr-text");
let descr_img = document.querySelector("#descr-img");
let body_color = document.querySelector("body").style;
let nav = document.querySelector(".nav-bar").style;

function change_fireLover() {
    let fireLover_descr ="This cat loves to chat a lot. He speaks even when asked to be quiet by the older cats.Will always find a way to say something. He loves to joke around and be nice. But despite his playfulness,he is lonely without a friend by his side. He really wants to communicate with a cat-girl. Beautiful catgirl. You must be wondering why his name is Fire Lover? Well, I don't know myself, let's ask him next time you see him."
    descr_text.innerHTML = fireLover_descr;
    descr_img.src = "./img/4.png"
    body_color.backgroundColor = "#f4dec2";
    nav.color = "#9577f0";
   descr_text.style.color = "#359aae";
}
document.querySelector("#firelover").addEventListener('click', change_fireLover);



function change_possum() {
    let possum_descr = "Possum cat? Yes, we have such a character. He is also a sweet and kind cat, and also smart. Much smarter than Fire Lover. He can meow in a made-up language that almost no one knows. He loves his opossum brothers very much and often shares pictures of them with the kittens. His advice is always helpful. And when he sleeps no one knows. He helps all the kittens find their inner cat... even though he's a possum.";
    descr_text.innerHTML = possum_descr;
    descr_img.src = "./img/Opossum.webp"
    body_color.backgroundColor = "antiquewhite";
    nav.color = "#e57c6d";
    descr_text.style.color = "#000";
}
document.querySelector("#possum").addEventListener('click', change_possum);


function change_Dark_and_Wise() {
    let dark_and_Wise ="Hmm. Although it has become less cozy and cute, you are out of danger. This cat is also smart, he solves problems quickly and with great interest. He prefers to work at night and stay in the dark, but this does not make him evil at all. This is a wise cat, but also sarcastic and a little sarcastic, because he is smarter than others. But despite this, the Wise Cat also helps all kittens solve their problems and find their inner cat. Okay, let's get out of here, he doesn't like to talk in vain and get distracted."
    descr_text.innerHTML = dark_and_Wise;
    descr_img.src = "./img/3.png"
    body_color.backgroundColor = "black";
    nav.color = "#ed4538";
    descr_text.style.color = "#c6933e";
}
document.querySelector("#wise").addEventListener('click', change_Dark_and_Wise);

function change_readhead() {
    let fireLover_descr ="This is Red Head. She, like all kittens, immediately went to solve all cases at once, while not forgetting about beauty. Faced with problems, she does not despair, but copes with them, albeit with hard work, but how else? Sometimes helps other kittens by showing their mistakes and giving advice. Is she smart? I don't know, but I know for sure that by perseverance she gets excellent results."
    descr_text.innerHTML = fireLover_descr;
    descr_img.src = "./img/5.png"
    body_color.backgroundColor = "#e0e8ba";
    nav.color = "#bd3529";
    descr_text.style.color = "#0dcef6";
}
document.querySelector("#redhead").addEventListener('click', change_readhead);

function change_manul() {
    let manul_descr = "And this is me, Manul. Yes, it was I who told you about other cats and kittens. And I hope you liked it, especially those kittens I wrote about, and older cats will like it too. I am a simple kitten, like everyone else. I also like to chat sometimes and help other kittens in any way I can, because I started not so long ago as a Wise Cat or Possum. I don't always have the brains, perseverance, or creativity, but I keep going. Sometimes I stop to warm my paws. Hope to see you again!"
    descr_text.innerHTML = manul_descr;
    descr_img.src = "./img/7.jpg"
    body_color.backgroundColor = "#ccc3f0";
    nav.color = "#ac6d5e";
    descr_text.style.color = "#5a3d41";
}
document.querySelector("#manul").addEventListener('click', change_manul);



