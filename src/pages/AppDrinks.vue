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
    };
  },
  methods: {
    getDrinks() {
      axios
        .get("http://localhost:8000/api/drinks", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.drinks = response.data.results.data;
          this.nPages = response.data.results.last_page;
        });
    },
    changePage(page) {
      this.currentPage = page;
      // this.getProjects();
      this.firstPage = !this.firstPage;
      this.lastPage = !this.lastPage;
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
    <h1 class="text-center">I Nostri Cocktails</h1>
    <div class="row row-cols-3 g-5 my-5">
      <div v-for="drink in drinks" :key="drink.id" class="col">
        <div class="drink_card">
          <!-- <p class="heading">Popular this month</p>
          <p>Powered By</p> -->
          <img class="h-100" :src="drink.strDrinkThumb" :alt="drink.strDrink" />
          <p>{{ drink.strDrink }}</p>
        </div>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <button
            class="page-link"
            :class="{ disabled: firstPage }"
            @click="previousPage()"
          >
            Previous
          </button>
        </li>

        <li
          v-for="page in nPages"
          :key="page"
          class="page-item num_pages"
          :class="{ active: page == currentPage }"
        >
          <span class="page-link" @click="changePage(page)">
            {{ page }}
          </span>
        </li>

        <li class="page-item">
          <button
            class="page-link"
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
}

.drink_card::before {
  content: "";
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 219px;
  height: 292px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.drink_card::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.heading {
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}

.drink_card p:not(.heading) {
  font-size: 14px;
}

.drink_card p:last-child {
  color: #e81cff;
  font-weight: 600;
  margin-bottom: 0;
}

.drink_card:hover::after {
  filter: blur(30px);
}

.drink_card:hover::before {
  transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
}
</style>
