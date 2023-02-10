<template>
  <img class="logo-pokemon" src="../../public/img/logo.png" alt="">
  <PokedexSearch />
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
    'PokeCard': PokeCard,
    'PokedexSearch': PokedexSearch
  },
  name: "App",
  data() {
    return {
      api: [],
      pokemons: []
    }
  },

  methods: {
    async getData() {
      let endpoints = []
      for (let i = 1; i < 50; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(res => {
          this.pokemons = res
          console.log(this.pokemons)
        })
    },
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.logo-pokemon{
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
