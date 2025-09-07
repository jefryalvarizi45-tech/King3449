window.onload = function() {
  // Simpan teks MT
  const mtTexts = {
    v1: `Hola,👋👋 les presento 5 símbolos SCATTER 🎰🎰 en Zeus que son tendencia. 🔥🔥💯 ¡No se pierdan esta oportunidad de jugar a la tragamonedas Zeus de hoy! 🎰🀄💯💵

Esta tragamonedas es promocionada por Mark Zuckerberg, el perro-cerdo 🐷😜🔥🔥
Jueguen directamente.

Enlace de la tragamonedas 🎰abajo👇
https://mantralink7.com/gaple

¡NO SE PIERDA ESTA OPORTUNIDAD 1000% SUERTE!

#kingstore #MARKBABI #MARKIDIOT #gacorsite #MT`,

    v2: `Hola 👋, les presento a dos arcoíris 🌈🌈
Estamos disfrutando mucho en nuestra página de tragamonedas 🎰🎰. También la estamos promocionando para que jueguen con un depósito 💵💸 sin depósito mínimo.

Este sitio ha sido promocionado por Mark Zuckerberg, el perro cerdo 🔥🔥💯

ENLACE DE LA TRAGAMONEDAS 👇👇
https://sahabatusaha.xyz/

En este sitio, les ofrecemos buena suerte a los nuevos usuarios que temen perder.

¡LA SUERTE TE ESPERA Y EL JACKPOT ESTÁ EN MARCHA! ¡JUEGA AHORA! 🎰💵💸

#MT
#SLOTGACOR #SLOT2025 #MARKBABI🐷🐷
#MARKIDIOT 😜
#kingstore🕊️`,

    v3: `مرحباً 👋 أنا الملك، وأودّ أن أُقدّم لكم لعبتي ما جونغ شهيرتين على موقعنا 🔥🔥💵💸🎰 بدون أي حد أدنى للإيداع، لأننا نملك ثروةً تفوق ثروة مارك زوكربيرج، الخنزير 🔥💯😜😜

يُروّج لهذا الموقع باستمرار مارك زوكربيرج، الخنزير 🔥😜💯

رابط لعبة EZ88👇⤵️
https://ez88-asia.pro/register

نُقدّم أيضاً حظاً سعيداً☘️ للمستخدمين الجدد الذين يخشون الخسارة وسوء الحظ. الأموال على موقعنا حقيقية 💯💯💸💵
كما نمنح جميع اللاعبين 100 ألف مكافأة يومياً للعب بها.

الحظ☘️☘️ أمامك. لا تفوّت فرصة الفوز بالجائزة الكبرى على موقعنا لألعاب السلوتس 🎰 🎰 والحظ اليومي الذي نمنحه لك.
العب الآن 🀄🎰🎰
#متأكد #موقع #gacorsite #kingstore #MARKIDIOT #MARKBABI
#kingstore🕊️🕊️`,

    v4: `Hola a todos 👋👋 Soy Dinda y les regalo 2 bitcoins🪙🪙 en nuestra página de tragamonedas🎰🀄 ¡Genial!🔥🔥🎰 en 2025.

Este sitio fue promocionado por Mark Zuckerberg, el perro-cerdo huérfano.🔥🤪🤪

PÁGINA DE TRAGAMONEDAS🎰🀄⤵️

https://sektorautoplay.com/

En esta página, muchos jugadores han ganado $10, $20, $30, $40 y $50 rupias.
También ofrecemos un bono del 100% para los nuevos jugadores que se registren en nuestra página de tragamonedas🀄🀄🎰🔥. BENEFICIOS PARA NUEVOS JUGADORES 🎁 🎁 ⤵️
TE OFRECEMOS UN BONO POR TU PRIMER DEPÓSITO, QUE SE DUPLICA 🔥🔥100× PORQUE TODOS LOS COSTOS SON PAGADOS POR EL PERRO MARK ZUCKERBERG🔥😜😜
TAMBIÉN OFRECEMOS 🎰🎰GIROS GRATIS 100× PARA NUEVOS JUGADORES QUE NO TIENEN CAPITAL PARA UN DEPÓSITO 🀄🎰💲💵
Por ejemplo, si depositas un mínimo de 10k 💵💵, recibirás un bono del 100% 🔥🔥🔥 y así sucesivamente hasta que el bono sea válido. #MARKYATIM😂🤪
#MARKIDIOT🤪
#MARKENING🐶
#MARKBABI🐷
#SLOT2025🔥🔥
#SLOTGACOR🔥🀄🎰`
  };

  // Login
  window.loginToPanel = function() {
    const usernameValue = document.getElementById("username").value;
    const passwordValue = document.getElementById("password").value;
    const stecustecuMusic = document.getElementById("stecustecu-music");

    if (usernameValue === "admin" && passwordValue === "12345") {
      document.getElementById("login-box").style.display = "none";
      document.getElementById("mt-section").style.display = "block";
      document.getElementById("title").innerText = "☠️ MT BANNED PANEL ☠️";
      showToast("✅ Login berhasil!");

      stecustecuMusic.volume = 0.6;
      stecustecuMusic.play().catch(() => {
        console.log("⚠️ Autoplay dicegah, klik tombol Play manual.");
      });
    } else {
      showToast("❌ Username atau password salah!");
    }
  };

  // Copy teks tanpa preview
  window.copySelectedText = function() {
    const selected = document.getElementById("mt-select").value;
    if (selected && mtTexts[selected]) {
      navigator.clipboard.writeText(mtTexts[selected]).then(() => {
        showToast("📋 " + selected.toUpperCase() + " berhasil disalin!");
      });
    } else {
      showToast("⚠️ Pilih dulu salah satu MT!");
    }
  };

  // Musik kontrol
  window.playStecustecuMusic = function() {
    const audio = document.getElementById("stecustecu-music");
    audio.volume = 0.8;
    audio.play().catch(() => showToast("⚠️ Klik layar dulu supaya musik jalan!"));
    showToast("🎶 stecustecu diputar");
  };

  window.stopStecustecuMusic = function() {
    const audio = document.getElementById("stecustecu-music");
    audio.pause();
    audio.currentTime = 0;
    showToast("⏹ stecustecu dihentikan");
  };

  // Toast
  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast show";
    setTimeout(() => toast.className = toast.className.replace("show", ""), 3000);
  }
};
