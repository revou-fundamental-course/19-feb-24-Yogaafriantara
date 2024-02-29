function replacename() {
  let namA = prompt("Isikan nama anda...", "");
  document.getElementById("nama").innerHTML = namA;
}

replacename();

function tampilkanPesan() {
  var nama = document.getElementById("nama").value;
  var tglLahir = document.getElementById("tglLahir").value;
  var jenisKelamin = document.querySelector(
    'input[name="jenisKelamin"]:checked'
  );
  var pesan = document.getElementById("pesan").value;

  if (nama && tglLahir && jenisKelamin && pesan) {
    var outputText = "<strong>Nama:</strong> " + nama + "<br>";
    outputText += "<strong>Tanggal Lahir:</strong> " + tglLahir + "<br>";
    outputText +=
      "<strong>Jenis Kelamin:</strong> " + jenisKelamin.value + "<br>";
    outputText += "<strong>Pesan:</strong> " + pesan;

    document.getElementById("output").innerHTML = outputText;
  } else {
    document.getElementById("output").innerHTML =
      "<p>Silakan lengkapi semua field.</p>";
    alert;
  }
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  function showSlide() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[currentSlide].classList.add("active");
    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(showSlide, 3000); // Change slide every 3 seconds
}

const anim = document.getElementById("anim");

anim.addEventListener("mouseover", () => {
  anim.style.transform = "scale(1.1)";
});

anim.addEventListener("mouseout", () => {
  anim.style.transform = "scale(1)";
});
