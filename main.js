document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  // Highlight current nav link
  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  const cardMap = {
    "NIGHTPETS.html": {
      folder: "NIGHTPETS",
      items: [
        { name: "HedgehogPet", stock: 0, price: "5₱" },
        { name: "Blood_Hedgehog_Icon", stock: 0, price: "10₱" },
        { name: "Mole", stock: 2, price: "10₱" },
        { name: "FrogV2", stock: 0, price: "5₱" },
        { name: "Echo_frog", stock: 0, price: "15₱" },
        { name: "NightOwlPic", stock: 0, price: "15₱" },
        { name: "Owlpng", stock: 0, price: "15₱" },
        { name: "Blood_Owl_Icon", stock: 0, price: "20₱" },
        { name: "Raccon_Better_Quality", stock: 0, price: "250₱" },
        { name: "Kiwi", stock: 0, price: "10₱" },
        { name: "Blood_Kiwi_Icon", stock: 0, price: "20₱" },
        { name: "Moon_Cat", stock: 0, price: "15₱" }
      ]
    },
    "SUMMERPETS.html": {
      folder: "SUMMERPETS",
      items: [
        { name: "STAR", stock: 3, price: "2₱" },
        { name: "SEAG", stock: 1, price: "2₱" },
        { name: "CRAB", stock: 0, price: "5₱" },
        { name: "FLA", stock: 4, price: "5₱" },
        { name: "TOUC", stock: 7, price: "10₱" },
        { name: "SEAT", stock: 0, price: "10₱" },
        { name: "CAPY", stock: 4, price: "10₱" },
        { name: "ORANG", stock: 3, price: "5₱" },
        { name: "SEAL", stock: 0, price: "10₱" },
        { name: "OST", stock: 5, price: "8₱" },
        { name: "PEAC", stock: 5, price: "3₱" },
        { name: "SCARL", stock: 2, price: "10₱" },
        { name: "MIMIC", stock: 0, price: "200₱" }
      ]
    },
    "BEEEVENTPETS.html": {
      folder: "BEEPETS",
      items: [
        { name: "Beee", stock: 0, price: "3₱" },
        { name: "HoneyBee", stock: 0, price: "4₱" },
        { name: "Bearbeee1", stock: 0, price: "20₱" },
        { name: "Petalbee", stock: 0, price: "20₱" },
        { name: "Queen_bee", stock: 0, price: "70₱" },
        { name: "The_Wasp", stock: 1, price: "3₱" },
        { name: "The_Tarantula_Hawk", stock: 3, price: "4₱" },
        { name: "Moth", stock: 0, price: "10₱" },
        { name: "Thy_Butterfly_V2", stock: 0, price: "200₱" },
        { name: "DiscoBeeIcon-2", stock: 0, price: "250₱" }
      ]
    },
    "PREHISTORICPETS.html": {
      folder: "PREHISTORICPETS",
      items: [
        { name: "Raptor", stock: 7, price: "5₱" },
        { name: "Triceratops", stock: 7, price: "8₱" },
        { name: "Stegosaurus", stock: 5, price: "8₱" },
        { name: "Pterodactyl", stock: 0, price: "10₱" },
        { name: "Brontosaurus", stock: 0, price: "150₱" },
        { name: "T-Rex", stock: 0, price: "150₱" },
      ]
    },
    "OTHERS.html": {
      folder: "OTHERS",
      items: [
        { name: "SHECKLES", stock: 0 },
        { name: "MASTER_SPRINGKLER", stock: 0, price: "10₱" },
        { name: "night_staff", stock: 0, price: "5₱" },
        { name: "lightning_rod", stock: 0, price: "5₱" },
        { name: "star_caller", stock: 0, price: "5₱" }
      ]
    }
  };

  const data = cardMap[currentPath];
  const container = document.querySelector("#cardContainer");

  if (data && container) {
    data.items.forEach(item => {
      const isAvailable = item.stock > 0;
      const isSheckle = item.name.toLowerCase().includes("sheckle");
      const stockText = isSheckle
        ? `${item.stock}T per 5 PESOS`
        : `${item.stock} in stock`;

      const card = document.createElement("div");
      card.className = "card";
      if (!isAvailable) {
        card.classList.add("unavailable");
      }

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
            ${stockText}
          </div>
          ${item.price && !isSheckle ? `
            <div class="price-text" style="
              margin-top: 6px;
              background: white;
              padding: 4px 14px;
              border-radius: 999px;
              font-size: 1rem;
              font-weight: bold;
              color: #333;
              opacity: ${isAvailable ? '0.95' : '0.3'};
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
            ">
              ${item.price}
            </div>
          ` : ''}
        </div>
      `;

      container.appendChild(card);
    });
  }
});
