<script>
import axios from 'axios';
import { useSearchStore } from '../../stores/SearchStore';


export default {
    pokeName: "PokeCard",
    props: {
        data: Object
    },

    methods: {
        getIndex(e){
            console.log('evt', e)
        }
    },
    mounted() {

    }

}

</script>
<template>
    <div class="card" @click="this.getIndex(data)">
        <div class="card-data">
            <p>{{ data.name }}</p>
            <!-- <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + name + '.png' alt=""> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    height: 280px;

    .card-data {
        box-shadow: 1px 1px 12px #111;
        color: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        width: 70vw;
        margin-bottom: 20px;

        p {
            text-transform: capitalize;
        }
    }
}
</style>