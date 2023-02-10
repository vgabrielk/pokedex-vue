<template>
    <h1>Pokemon : {{data.name}} </h1>
</template>
<script>
import axios from "axios"
import { useRoute } from "vue-router"
export default {
    name: 'PokemonDetails',

    data() {
        const route = useRoute()
        return {
            id: route.params.id,
            data: null
        }
    },
    methods: {
        async getDetails() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                .then(res => {
                    this.data = res.data
                    console.log(this.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },

    created() {
        this.getDetails()
    }

}
</script>