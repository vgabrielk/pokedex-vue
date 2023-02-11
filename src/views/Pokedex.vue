<template>
  <img class="logo-pokemon" src="/img/logo.png" alt="">
  <PokedexSearch :fetchFilter="fetchFilter" :clearData="clearData" />
  <PokeCard v-for="pokemon in filteredPokemons" :key="pokemon.data.name" :data="pokemon"/>
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
  computed: {
    filteredPokemons() {
      const searchType = this.searchStore.search.toLowerCase()
      return this.pokemons.filter(pokemon => !searchType || pokemon.data.name.toLowerCase().includes(searchType))
    }
  },
  methods: {
    async getData() {
      this.pokemons = await axios.all(
        [...Array(50).keys()].map(i => axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`))
      )
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