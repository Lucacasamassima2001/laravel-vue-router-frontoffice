<script>
import axios from "axios";
export default {
  data() {
    return {
      drinks: [],
      currentPage: 1,
      nPages: 0,
      firstPage: false,
      lastPage: false,
      loader: true,
    };
  },
  methods: {
    getDrinks() {
      (this.loader = true),
        axios
          .get("http://localhost:8000/api/drinks", {
            params: {
              page: this.currentPage,
            },
          })
          .then((response) => {
            this.drinks = response.data.results.data;
            this.nPages = response.data.results.last_page;
            this.loader = false;
          });
    },
    changePage(page) {
      this.currentPage = page;
      // this.getProjects();
      if (this.currentPage <= 1) {
        this.firstPage = !this.firstPage;
      } else {
        this.firstPage = false;
      }
      if (this.currentPage >= this.nPages) {
        this.lastPage = !this.lastPage;
      } else {
        this.lastPage = false;
      }
    },
    nextPage() {
      this.currentPage++;
      // this.getProjects();
      if (this.currentPage >= this.nPages) {
        this.lastPage = true;
      }
      this.firstPage = false;
    },
    previousPage() {
      this.currentPage--;
      // this.getProjects();
      if (this.currentPage <= 1) {
        this.firstPage = true;
      }
      this.lastPage = false;
    },
  },
  created() {
    this.getDrinks();
  },
  watch: {
    currentPage() {
      this.getDrinks();
    },
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center mt-3">I Nostri Cocktails</h1>
    <div v-if="!loader" class="row row-cols-3 g-5 my-5">
      <div v-for="drink in drinks" :key="drink.id" class="col">
        <div class="drink_card">
          <!-- <p class="heading">Popular this month</p>
          <p>Powered By</p> -->
          <img class="h-100" :src="drink.strDrinkThumb" :alt="drink.strDrink" />
          <p>{{ drink.strDrink }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="loader">
        <div class="loader_cube loader_cube--color"></div>
        <div class="loader_cube loader_cube--glowing"></div>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <button
            class="page-link bg-dark"
            :class="{ disabled: firstPage }"
            @click="previousPage()"
          >
            Previous
          </button>
        </li>

        <li
          v-for="page in nPages"
          :key="page"
          class="page-item"
          :class="{ active: page == currentPage }"
        >
          <button class="page-link bg-dark" @click="changePage(page)">
            {{ page }}
          </button>
        </li>

        <li class="page-item">
          <button
            class="page-link bg-dark"
            :class="{ disabled: lastPage }"
            @click="nextPage()"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #da00ff;
$secondary-color: #e81cff;
$tertiary-color: #40c9ff;
$quaternary-color: #fc00ff;
$quinary-color: #00dbde;
.container {
  margin-top: 8rem;
}

h1 {
  color: $primary-color;
}

.drink_card {
  position: relative;
  width: 219px;
  height: 292px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 7px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 219px;
    height: 292px;
    border-radius: 10px;
    background: linear-gradient(
      -45deg,
      $secondary-color 0%,
      $tertiary-color 100%
    );
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      -45deg,
      $quaternary-color 0%,
      $quinary-color 100%
    );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }

  p:not(.heading) {
    font-size: 14px;
  }

  p:last-child {
    color: $secondary-color;
    font-weight: 600;
    margin-bottom: 0;
  }

  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
}

// loader
.loader {
  width: 150px;
  height: 150px;
  margin: 10rem auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader_cube {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;

    &--glowing {
      z-index: 2;
      background-color: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    &--color {
      z-index: 1;
      filter: blur(2px);
      background: linear-gradient(135deg, #1afbf0, $primary-color);
      animation: loadtwo 2.5s ease-in-out infinite;
    }
  }
}

// paginator

ul.pagination {
  .page-item {
    .page-link {
      color: $secondary-color;

      &:hover {
        background-color: gray;
        color: $secondary-color;
      }
    }

    &.active {
      .page-link {
        background-color: gray;
        border-color: $secondary-color;
      }
    }
  }
}

@keyframes loadtwo {
  50% {
    transform: rotate(-80deg);
  }
}
</style>
