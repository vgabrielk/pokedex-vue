<script>
import axios from 'axios';

export default {
    pokeName: "PokeCard",
    data() {
        return {
            endpoints: []
        }
    },
    props: {
        data: Object,
    },

    methods: {

        getIndex(data) {
            console.log(data.data.id)
        }
    },
    mounted() {

    }


}

</script>
<template>
    <div class="card" @click="this.getIndex(data)">
        <div class="card-data">
            <img class="pokemon_image" :src="data.data.sprites.front_default" alt="">
            <p>{{ data.data.name }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    height: 280px;

    .card-data {
        box-shadow: 1px 1px 12px rgba(18, 18, 18, 0.226);
        color: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        width: 70vw;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all .5s ease;
        cursor: pointer;

        &:hover {
            box-shadow: 1px 1px 12px #111;
            transform: translateY(-10px)
        }

        .pokemon_image {
            width: 280px;

        }

        p {
            text-transform: capitalize;
        }

    }
}
</style>