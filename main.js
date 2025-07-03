document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  // Highlight the current page in nav
  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Add sparkles if you want (optional)
  const sparkleContainer = document.querySelector(".sparkle-container");
  if (sparkleContainer) {
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}vh`;
      sparkle.style.animationDelay = `${Math.random() * 5}s`;
      sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
      sparkleContainer.appendChild(sparkle);
    }
  }

  const cardMap = {
    "NIGHTPETS.html": {
      folder: "NIGHTPETS",
      items: [
        { name: "HedgehogPet", stock: 5 },
        { name: "Blood_Hedgehog_Icon", stock: 2 },
        { name: "Mole", stock: 0 },
        { name: "FrogV2", stock: 8 },
        { name: "Echo_frog", stock: 0 },
        { name: "NightOwlPic", stock: 4 },
        { name: "Owlpng", stock: 1 },
        { name: "Blood_Owl_Icon", stock: 9 },
        { name: "Raccon_Better_Quality", stock: 0 },
        { name: "Kiwi", stock: 0 },
        { name: "Blood_Kiwi_Icon", stock: 0 },
        { name: "Moon_Cat", stock: 0 }
      ]
    },
    "SUMMERPETS.html": {
      folder: "SUMMERPETS",
      items: [
        { name: "STAR", stock: 5 },
        { name: "SEAG", stock: 2 },
        { name: "CRAB", stock: 0 },
        { name: "FLA", stock: 8 },
        { name: "TOUC", stock: 0 },
        { name: "SEAT", stock: 4 },
        { name: "ORANG", stock: 1 },
        { name: "SEAL", stock: 9 },
        { name: "OST", stock: 0 },
        { name: "PEAC", stock: 0 },
        { name: "SCARL", stock: 0 },
        { name: "MIMIC", stock: 0 }
      ]
    },
    "BEEEVENTPETS.html": {
      folder: "BEEPETS",
      items: [
        { name: "Beee", stock: 5 },
        { name: "HoneyBee", stock: 2 },
        { name: "Bearbeee1", stock: 0 },
        { name: "Petalbee", stock: 8 },
        { name: "Queen_bee", stock: 0 },
        { name: "The_Wasp", stock: 4 },
        { name: "The_Tarantula_Hawk", stock: 1 },
        { name: "Moth", stock: 9 },
        { name: "Thy_Butterfly_V2", stock: 0 },
        { name: "DiscoBeeIcon-2", stock: 0 }
      ]
    },
    "OTHERS.html": {
      folder: "OTHERS",
      items: [
        { name: "SHECKLES", stock: 10 },
        { name: "MASTER_SPRINGKLER", stock: 3 },
        { name: "night_staff", stock: 0 },
        { name: "lightning_rod", stock: 5 },
        { name: "star_caller", stock: 5 }
      ]
    }
  };

  const data = cardMap[currentPath];
  const container = document.querySelector("#cardContainer");

  if (data && container) {
    data.items.forEach(item => {
      const isSheckle = item.name.toLowerCase().includes("sheckle");
      const isAvailable = item.stock > 0;
      const stockText = isAvailable
        ? (isSheckle ? `${item.stock}T per 5 PESOS` : `${item.stock} in stock`)
        : '';

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
  <div class="card-inner">
    <div class="card-front">
      <img src="PETBG.png" />
      <img src="${data.folder}/${item.name}.webp" class="overlay" />
    </div>
  </div>
  <div class="hover-info">
    <div class="hover-text" style="color: ${isAvailable ? '#222' : 'red'}">
      ${isAvailable ? 'AVAILABLE' : 'UNAVAILABLE'}
    </div>
    <div class="stock-text" style="display: ${isAvailable ? 'block' : 'none'}">
      ${isSheckle ? `${item.stock}T per 5 PESOS` : `${item.stock} in stock`}
    </div>
  </div>
`;
      container.appendChild(card);
    });
  }
});
