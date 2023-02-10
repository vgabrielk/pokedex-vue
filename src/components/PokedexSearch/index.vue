<script>

import { useSearchStore } from '../../stores/SearchStore';


export default {

    setup() {
        const searchStore = useSearchStore()
        return { searchStore }
    },
    props: {
        fetchFilter: Function,
        clearData: Function
    },
    pokeName: "PokedexSearch",

    methods: {
        getInputData(e) {
            this.searchStore.search = e.target.value
        }
    },
}

</script>
<template>
    <section class="pokedex-search">
        <input @keydown.enter.prevent="this.fetchFilter" :value="searchStore.search" v-on:change="getInputData($event)"
            type='text' placeholder="Type pokemon name" class="_input" />
        <button class="button_submit" @click="this.fetchFilter">Submit</button>
        <button class="button_clear" @click="this.clearData">Clear</button>
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

.button_submit {
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #111;
    border: none;
    outline: none;
    color: #fff;
    border: 1px solid #fff;
    margin-left: 30px;
    cursor: pointer;
}

.button_clear {
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #111;
    border: none;
    outline: none;
    color: #fff;
    border: 1px solid #f70000;
    margin-left: 8px;
    cursor: pointer;
}
</style>

