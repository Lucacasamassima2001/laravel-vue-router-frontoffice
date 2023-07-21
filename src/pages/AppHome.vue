<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default {
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      intervalId: null,

      carouselImages: [
        {
          src: "home-1.jpg",
          name: "Velvet Vesper",
          description: "A rich blend of blueberry and vanilla",
        },
        {
          src: "home-2.jpg",
          name: "Brasil Breeze",
          description: "$Refreshing cucumber with a hint of mint",
        },
        {
          src: "home-3.jpg",
          name: "Lavender Lust",
          description: "Sweet notes of strawberry and citrus",
        },
        {
          src: "home-4.jpg",
          name: "Tropical Tempest",
          description: "Warm honey flavors and spicy ginger",
        },
        {
          src: "home-5.jpg",
          name: "Midnight Martini",
          description: "Crisp apple with a blue curaçao twist",
        },
        {
          src: "home-6.jpg",
          name: "Cinnamon Celebration",
          description: "Tart pomegranate with a splash of lime",
        },
        {
          src: "home-7.jpg",
          name: "Ruby Radiance",
          description: "Minty freshness paired with tangy lime",
        },
        {
          src: "home-8.jpg",
          name: "Pomegranate Paradise",
          description: "A bold mix of fruit and liquor",
        },
      ],
    };
  },

  methods: {
    getUrl(image) {
      return `/src/assets/img/${image.src}`;
    },

    nextImage() {
      this.$refs.splide.splide.go("+1");
    },

    prevImage() {
      this.$refs.splide.splide.go("-1");
    },

    stopAutoScroll() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },

    startAutoScroll() {
      if (this.intervalId === null) {
        this.intervalId = setInterval(this.nextImage, 2000);
      }
    },
  },

  mounted() {
    this.startAutoScroll();
  },
};
</script>

<template>
  <div class="container py-5 my-5">
    <h1 class="py-3">MixTales</h1>
    <div class="wrapper">
      <!-- Description Text -->
      <div class="text-container">
        <h2 class="title">Ti raccontiamo le nostre MixTales</h2>
        <p class="text">
          Un'esperienza unica e avvincente nel mondo dei cocktail, dove ogni
          sorso è una storia emozionante tra gusti, colori e profumi.
        </p>
      </div>

      <!-- Carousel -->
      <div class="carousel-container">
        <Splide
          ref="splide"
          class="carousel"
          :options="{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            speed: 800,
            gap: '1rem',
            arrows: false,
            pagination: false,
            interval: 3000,
          }"
        >
          <SplideSlide
            class="carousel-images"
            v-for="(image, index) in carouselImages"
            :key="index"
            @mouseover="stopAutoScroll"
            @mouseleave="startAutoScroll"
          >
            <div>
              <img :src="getUrl(image)" :alt="image.name" />
              <p class="under-text name">{{ image.name }}</p>
              <p class="under-text description">{{ image.description }}</p>
            </div>
            <div class="image-text">
              <p class="type">Vieni a provarlo!</p>
            </div>
          </SplideSlide>
        </Splide>

        <div
          @mouseover="stopAutoScroll"
          @mouseleave="startAutoScroll"
          class="carousel-arrows"
        >
          <p class="fa-solid fa-chevron-left" @click="prevImage"></p>
          <p class="fa-solid fa-chevron-right" @click="nextImage"></p>
          <!-- <font-awesome-icon icon="fa-solid fa-chevron-left" @click="prevImage" /> -->
          <!-- <font-awesome-icon
					icon="fa-solid fa-chevron-right"
					@click="nextImage" /> -->
        </div>
      </div>
    </div>
    <div class="start">
      <router-link class="home-button" :to="{ name: 'about' }"
        >Inizia il racconto</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
$mainColor: #55328b;
$textColor: #9685c2;

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  color: $mainColor;
  font-size: 5rem;
}

.wrapper {
  height: calc(100vh - 20rem);
  width: 75%;
  margin: 0 auto;
  display: grid;
  align-content: center;
  grid-template-columns: 2fr 5fr;
  grid-template-areas: "txt carousel";
  gap: 5rem;
  text-align: left;

  .text-container {
    grid-area: txt;
    align-self: center;

    .title {
      color: $mainColor;
      margin-bottom: 5rem;
      line-height: 4rem;
    }

    .text {
      color: $textColor;
      font-size: 1.2rem;
      font-style: italic;
      line-height: 2.5rem;
    }
  }
  .carousel-container {
    grid-area: carousel;
    position: relative;
    width: 100%;
    height: 100%;
    align-self: start;
    overflow: hidden;
  }
}

.under-text {
  height: 2.5rem;
  background-color: white;
  color: $mainColor;
}

.name {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: $mainColor;
}

.description {
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  color: $textColor;
}

.splide__slide {
  max-width: 100%;
}

.carousel-images {
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  position: relative;

  .image-text {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  &:hover .image-text {
    opacity: 1;
  }

  .type {
    margin: 0;
    padding: 0;
    white-space: nowrap;
    font-size: 0.8rem;
    line-height: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  img {
    display: block;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    filter: brightness(0.9);
    margin-bottom: 1rem;
    transition: all 300ms;

    &:hover {
      filter: brightness(0.6);
    }
  }
}

.carousel-arrows {
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 2 * 2.2rem - 1rem));
  left: 0;
  right: 0;
  text-align: center;
}

.fa-chevron-left {
  line-height: 1rem;
  padding: 2.2rem 1rem;
  color: white;
  position: absolute;
  left: 0;
  background-color: #523464;
  border: 1px solid white;
}

.fa-chevron-right {
  line-height: 1rem;
  padding: 2.2rem 1rem;
  color: white;
  position: absolute;
  right: 0;
  background-color: #523464;
  border: 1px solid white;
}

.start {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 2.5rem;

  .home-button {
    background-color: $mainColor;
    color: white;
    padding: 1rem 2rem;
    border-radius: 20rem;
    text-decoration: none;
    font-size: 1.3rem;
    margin: 0;
  }
}
</style>
