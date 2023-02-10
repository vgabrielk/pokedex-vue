<script>
import PokedexSearch from './components/PokedexSearch/index.vue'
import PokeCard from './components/PokeCard/index.vue'
import axios from 'axios'
import { useSearchStore } from './stores/SearchStore'

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

<template>
  <PokedexSearch />
  <div class="button_content">
    <button class="button_search">Pesquisar</button>
  </div>
  <div v-for="(pokemon, index) in pokemons">
    <PokeCard :data="pokemon" :index="index + 1" />
  </div>

</template>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
  box-shadow: 1px 1px 12px #111;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
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
