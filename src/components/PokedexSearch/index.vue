<script>
import { useSearchStore } from '../../stores/SearchStore';
export default {
    pokeName: "PokedexSearch",
    
    methods: {
        filter(e) {
            useSearchStore().search = e.target.value
        }
    },
}

</script>
<template>
    <section class="pokedex-search">
        <h1>Pokedex</h1>
        <input v-on:change="filter($event)" type='text' placeholder="Encontre o pokémon" class="_input" />
    </section>
</template>

<style lang="scss" scoped>
.pokedex-search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    ._input {
        background-color: transparent;
        border: none;
        box-shadow: 1px 1px 12px black;
        height: 30px;
        outline: none;
        color: #fff;
        padding: 5px 10px;
        border-radius: 6px;

        &::placeholder {
            color: #fff;
        }
    }
}
</style>

