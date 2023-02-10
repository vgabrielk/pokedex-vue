<template>
  <img class="logo-pokemon" src="/img/logo.png" alt="">
  <PokedexSearch :fetchFilter="fetchFilter" :clearData="clearData" />
  <div v-for="pokemon in pokemons">
    <PokeCard :data="pokemon" />
  </div>
</template>

<script>
import PokedexSearch from '../components/PokedexSearch/index.vue'
import PokeCard from '../components/PokeCard/index.vue'
import axios from 'axios'
import { useSearchStore } from '../stores/SearchStore'

export default {
  setup() {
    const searchStore = useSearchStore()
    return { searchStore }
  },
  components: {
    PokeCard,
    PokedexSearch
  },
  name: "App",
  data() {
    return {
      pokemons: []
    }
  },

  methods: {
    async getData() {
      let endpoints = []
      for (let i = 1; i < 50; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(res => {
          this.pokemons = res
          console.log(this.pokemons)
        })
    },
    fetchFilter() {
      const data = [...this.pokemons];
      const searchType = this.searchStore.search.toLowerCase()
      
      this.pokemons = data.filter(item => {
        if (searchType === '') {
          return item;
        }
        return item.data.name.toLowerCase().includes(searchType.toLowerCase())
        
      })
    },
    clearData () {
      this.searchStore.search = ''
      this.getData()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.logo-pokemon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
}

.button_content {
  display: flex;
  justify-content: center;

  .button_search {
    transform: translateY(-20px);
    border-radius: 6px;
  }
}
</style>
