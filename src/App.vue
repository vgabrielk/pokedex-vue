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
      api: []
    }
  },

  methods: {
    async getData(url = 'https://pokeapi.co/api/v2/pokemon') {
      axios.get(url)
        .then(({ data }) => this.api = data)
    },
    next() {
      this.getData(this.api.next)
    },
    previous() {
      this.getData(this.api.previous)
    },
    searchData(){
      const title = this.searchStore.search.toLowerCase()
      const data = [...this.api.results];
      data.filter(item => item.name.toLowerCase().indexOf(title - 1))
      this.api.results = data
      console.log(data)
    }
    
  },
  mounted() {
    this.getData()
  }
}


</script>

<template>
  <PokedexSearch />
  <div class="button_content">
    <button class="button_search" @click="searchData">Pesquisar</button>
  </div>
  <div v-for="pokemon in api.results">
    <PokeCard :data="pokemon" />
  </div>
  <button @click="previous">Previous</button>
  <button @click="next">Next</button>
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
.button_content{
  display: flex;
  justify-content: center;
  .button_search{
    transform: translateY(-20px);
    border-radius: 6px;
  }  
}
</style>
