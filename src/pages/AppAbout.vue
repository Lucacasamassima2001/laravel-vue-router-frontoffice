<script>
export default {

}
</script>



<template>
  <div class="container-big about py-5">
  
  <h1 style="font-style: italic; font-size: 4em;" class="text-center py-3">Chi siamo...</h1>

  <div class="container d-flex">
    <i class="fa-solid fa-quote-left"></i>
    <h4 style="font-style: italic;" class="text-center">Siamo un team di appassionati e esperti mixologist, con una passione sconfinata per la creazione di cocktail straordinari. Con anni di esperienza nel settore, siamo determinati a fornire i migliori cocktail che renderanno ogni occasione memorabile.</h4>
    <i class="fa-solid fa-quote-right"></i>
  </div>
  
  <div class="container py-3">
    <h2>La nostra filosofia...</h2>
    <div class="container d-flex">
      <p class="fs-4">Al centro di tutto ciò che facciamo, c'è l'amore per gli ingredienti di alta qualità e l'attenzione per i dettagli. <br>
        I nostri cocktail sono realizzati con cura, utilizzando solo ingredienti freschi,<br>
          selezionati con attenzione per garantire un gusto superiore e un'esperienza gustativa indimenticabile.</p>
      <div class="philosophy">
        <div class="philosopy_content">
          <img 
          style="height: 240px;
          border-radius: 20px;
          width: 250px;
          " src="../../public/drink.philosophy.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  
  

  <div class="container menu py-5">
    <div class="container">
      <div class="text-center">
        <h2>Il nostro menu</h2>
        <i class="fa-solid fa-quote-left"></i>
        <p class="fs-4">Il nostro menu di cocktail è una fusione di classici intramontabili e creazioni innovative. Dai mojito rinfrescanti e dai negroni avvolgenti, fino alle nostre invenzioni esclusive, ogni drink è un viaggio sensoriale che vi porterà in luoghi lontani e spazierà tra le emozioni.</p>
        <i class="fa-solid fa-quote-right"></i>
      </div>
    </div>
  </div>
  <div class="container py-3">
    <img 
    style="width: 100%; 
    box-shadow: rgba(151, 65, 252, 0.2) 0 35px 40px 20px;
    border-radius: 30px;" src="../../public/drink-menu.jpg" alt="">
  </div>

  <div class="container menu py-5">
    <div class="container">
      <div class="text-center">
        <h2>Esperienza personalizzata</h2>
        <i class="fa-solid fa-quote-left"></i>
        <p class="fs-4">Crediamo che ogni cliente sia unico e meriti un'esperienza personalizzata. I nostri mixologist sono pronti ad ascoltare le vostre preferenze e consigliarvi i cocktail che meglio si adattano ai vostri gusti e alle vostre occasioni speciali.</p>
        <i class="fa-solid fa-quote-right"></i>
      </div>
    </div>
  </div>
  <div class="container py-5 d-flex gap-5 justify-content-center">
    <img 
    style="width: 500px;
    box-shadow: rgba(151, 65, 252, 0.2) -30px -15px 160px 60px; 
    border-radius: 30px;" src="../../public/drink-experience.jpg" alt="">
    <img 
    style="width: 500px;
    box-shadow: rgba(151, 65, 252, 0.2) -30px -15px 160px 60px; 
    border-radius: 30px;" src="../../public/drink-experience-2.jpg" alt="">
  </div>
  
  <div class="container-big py-3 my-3 assapora">
    <div class="container py-3">
      <div class="text-center">
        <h2>Assaporate il piacere</h2>
        <i class="fa-solid fa-quote-left"></i>
        <p class="fs-4">Unitevi a noi in questo viaggio attraverso i sapori e le creazioni uniche. Sia che stiate cercando un'esperienza rilassante con gli amici, un modo per festeggiare un'occasione speciale o semplicemente vogliate scoprire nuovi gusti, il nostro sito di cocktail è il luogo perfetto per soddisfare tutti i vostri desideri.</p>
        <i class="fa-solid fa-quote-right"></i>
      </div>
    </div>
  </div>
  
  <div class="container py-5 my-5">
      <div class="text-center">
        <i class="fa-solid fa-quote-left"></i>
        <h3 style="font-style: italic;">Gustate ogni goccia e lasciatevi conquistare dall'arte dei cocktail. Benvenuti nel nostro mondo, dove la mixology diventa un'esperienza di piacere senza fine...</h3>
        <h2 style="color: rgba(151, 65, 252); font-style: italic;">Salute!</h2>
        <i class="fa-solid fa-quote-right"></i>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>


.about{
  margin-top: 5rem;
  background-color: black;
  color: white;
}

.philosophy {
  height: 250px;
  height: 250px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
}

.philosophy__content {
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;
}

.assapora{
  height: 600px;
  background-image: url(../../public/drink-assapora.jpg);
  background-position-y: -300px;
  background-position-x: -250px;
  border-top: 5px solid rgba(151, 65, 252, 0.2);
  border-bottom: 5px solid rgba(151, 65, 252, 0.2);
}

h2{
  font-style: italic;
}



</style>