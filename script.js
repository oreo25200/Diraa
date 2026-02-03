const message = `Hii dira,tetap semangat ya apapun yang terjadi,makasi semalam udah mau cerita banyak ke aku,makasi udah percaya sama aku,jangan tinggalin aku ya,aku takut dan gak siap kalau harus di tinggalin kamu,ayo kita sembuhin semuanya bareng bareng biar gak terasa berat,aku sampai kapanpun masih di sini,you are my favorite human.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  const music = document.getElementById("bgMusic");
    music.play()

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
