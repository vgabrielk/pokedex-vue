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
        <span class='button-content'>
            <button class="button_submit" @click="this.fetchFilter">Submit</button>
            <button class="button_clear" @click="this.clearData">Clear</button>
        </span>
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
        width: 80%;
        outline: none;
        color: #fff;
        border-radius: 6px;
        background-color: transparent;

        &::placeholder {
            color: #fff;
        }
    }

    @media(max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
}

.button_submit {
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #111;
    background-color: #0099ff;
    color: #fff;
    font-weight: bold;
    margin-left: 30px;
    cursor: pointer;

    @media(max-width: 600px) {
        margin-left: 0;
    }
}

.button_clear {
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #000000;
    background-color: #ffffff;
    margin-left: 8px;
    cursor: pointer;
}

.button-content {
    display: flex;

    @media(max-width: 600px) {
        margin-top: 20px;
    }
}
</style>

