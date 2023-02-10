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
        <input v-on:change="filter($event)" type='text' placeholder="Type pokemon name" class="_input" />
    </section>
</template>

<style lang="scss" scoped>
.pokedex-search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    margin-top: 7rem;
    width: 100%;

    ._input {
        padding: 10px;
        box-shadow: 1px 1px 12px black;
        background-color: #111;
        border: none;
        height: 30px;
        width: 100%;
        outline: none;
        color: #fff;
        border-radius: 6px;
        background-color: transparent;

        &::placeholder {
            color: #fff;
        }
    }
}
</style>

