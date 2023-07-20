<script>
import axios from "axios";
export default {
  created() {
    // richiesta axios per i dati del post
    axios
      .get("http://localhost:8000/api/drinks/" + this.$route.params.id)
      .then((response) => {
        if (response.data.success) {
          this.drink = response.data.results;
        }
        //  else {
        //   // this.$router.push({ name: "page404" });
        //   this.is404 = true;
        // }
      });
  },
};
</script>

<template>
  <div id="container">
    <!-- Start	Product details -->
    <div class="product-details">
      <!-- 	Product Name -->
      <h1>Titolo Cocktail</h1>

      <!-- The most important information about the product -->
      <p class="information">
        In uno shaker riempito a metà con cubetti di ghiaccio, unisci il gin, il
        succo di limone e lo zucchero.Mescolate e guarnite con la ciliegia e la
        fetta d'arancia.Filtrare in un bicchiere collins pieno di cubetti di
        ghiaccio.Aggiungi la soda club.Agitare bene.
      </p>

      <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span> Torna alla lista dei Drinks
      </button>
    </div>

    <!-- 	End	Product details   -->

    <!-- 	Start product image & Information -->

    <div class="product-image">
      <img
        src="https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg"
        alt="Omar Dsoky"
      />

      <!-- 	product Information-->
      <div class="info">
        <h2 class="my-4">Informazioni sul Drink</h2>
        <ul>
          <li><strong>Categoria: </strong>Cocktail</li>
          <li><strong>Tipo: </strong>Damp</li>
          <li>
            <strong
              ><font-awesome-icon :icon="['fas', 'martini-glass']" /> Bicchiere
              da usare: </strong
            >Collins glass
          </li>
          <li><strong>Ingredienti: </strong>2 - 3 feet</li>
          <li><strong>Dosi: </strong> 5kg di zucchero</li>
          <li><strong>Creato da: </strong>Creatore del drink</li>
        </ul>
      </div>
    </div>
    <!--  End product image  -->
  </div>
</template>

<style lang="scss" scoped>
/* fonts  */
@import url("https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web");

#container {
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(11, 9, 9, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 2em auto;
  height: 500px;
  width: 1000px;
}

/* 	Product details  */
.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 40%;
}

/* 	Product Name */
#container .product-details h1 {
  font-family: "Old Standard TT", serif;
  display: inline-block;
  position: relative;
  font-size: 34px;
  color: #670665;
}

#container .product-details h1:before {
  position: absolute;
  content: "";
  right: -10%;
  top: 0%;
  transform: translate(25px, -15px);
  font-family: "Farsan", cursive;
  display: inline-block;
  background: rgb(135, 39, 213);
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  color: #fff;
  margin: 0;
  animation: chan-sh 6s ease infinite;
}

@keyframes chan-sh {
  from {
    content: "Try It!";
  }
  to {
    content: "New";
  }
}

/* The most important information about the product */
#container .product-details > p {
  font-family: "Farsan", cursive;
  text-align: center;
  font-size: 20px;
  color: white;
}

/* product image  */
.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 50%;
  display: inline-block;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  font-family: "Farsan", cursive;
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.9;
  text-align: left;
  font-size: 120%;
  cursor: no-drop;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  padding: 20px;
}

.info h2 {
  text-align: center;
}
.product-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}

// BOTTONE PER TORNARE ALLA LISTA DEI DRINKS

button {
  position: absolute;
  bottom: 10%;
  left: 10%;
  padding: 1em 1.8em;
  outline: none;
  border: 1px solid #303030;
  background: #212121;
  color: #ae00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
  transition-delay: 0.6s;
}

button span {
  position: absolute;
}

button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ae00ff);
}

button:hover span:nth-child(1) {
  left: 100%;
  transition: 0.7s;
}

button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #001eff);
}

button:hover span:nth-child(3) {
  right: 100%;
  transition: 0.7s;
  transition-delay: 0.35s;
}

button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ae00ff);
}

button:hover span:nth-child(2) {
  top: 100%;
  transition: 0.7s;
  transition-delay: 0.17s;
}

button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #001eff);
}

button:hover span:nth-child(4) {
  bottom: 100%;
  transition: 0.7s;
  transition-delay: 0.52s;
}

button:active {
  background: #ae00af;
  background: linear-gradient(to top right, #ae00af, #001eff);
  color: #bfbfbf;
  box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
  transition: 0.1s;
}

button:active
  span:nth-child(1)
  span:nth-child(2)
  span:nth-child(2)
  span:nth-child(2) {
  transition: none;
  transition-delay: none;
}
</style>
