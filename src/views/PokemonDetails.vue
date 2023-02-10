<template>
    <div class="back-to-home">
        <router-link to='/'>
            <i class="pi pi-arrow-left"></i>
        </router-link>
    </div>
    <section class="big-card">
        <header class="header">
            <p>{{ data?.name }}</p>
            <p :style="{ backgroundColor: pokemonColor() }" class="type-pokemon">{{ data?.types[0].type.name }}</p>
            <img class="pokemon-image" :src="data.sprites.front_default" alt="">
            <div :style="{ backgroundColor: pokemonColor() }" class="background-type-color">

            </div>
        </header>
        <div class="pokemon-info">
            <h3>Abilities :</h3>
            <div v-for="(value, index) in data.abilities" :key="'value' + index">
                <p :style="{ borderColor: pokemonColor() }" class="ability">{{ value.ability.name }}</p>
            </div>
            <div>
                <p>Weight : {{ data.weight / 10 }}kg</p>
                <p>Base experience : {{ data.base_experience }}XP</p>
            </div>
        </div>
    </section>
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
                    if (res) {
                        this.data = res.data
                        console.log(this.data)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        pokemonColor() {
            const color = this?.data?.types[0].type.name
            switch (color) {
                case 'poison':
                    return '#ff7200'
                    break;
                case 'grass':
                    return '#009000'
                    break;
                case 'fire':
                    return 'red'
                    break;
                case 'normal':
                    return ''
                    break;
                case 'fairy':
                    return 'pink'
                    break;
                case 'water':
                    return 'blue'
                    break;
                case 'bug':
                    return '#5C4033	'
                    break;
                case 'electric':
                    return 'yellow'
                    break;
            }
        }
    },

    created() {
        this.getDetails()
    }

}
</script>

<style lang="scss" scoped>
.big-card {
    height: 68vh;
    width: 80%;
    padding: 10px;
    box-shadow: 1px 1px 12px black;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 6px;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    box-sizing: border-box;

    .header {
        display: flex;
        justify-content: space-between;

        .type-pokemon {
            padding: 5px 10px;
            box-sizing: border-box;
            border-radius: 6px;
            box-shadow: 1px 1px 12px black;
            position: relative;
            z-index: 99;
        }

        .pokemon-image {
            position: absolute;
            top: 50%;
            right: -4rem;
            transform: translateY(-50%);
            width: 420px;

            @media(max-width: 640px) {
                width: 270px;
                right: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        }



        .background-type-color {
            position: absolute;
            height: 100%;
            width: 180px;
            z-index: -1;
            right: 0;
            top: 0;
            border-radius: 0px 6px 6px 0px;

            @media(max-width: 650px) {
                left: 0;
                top: 0;
                width: 100%;
                height: 4.5rem;
            }
        }

        p {
            text-transform: capitalize;
            font-weight: bold;
        }
    }

    .ability {
        width: 180px;
        text-align: center;
        border-radius: 6px;
        border-width: 1px;
        border-style: solid;
    }

    
}
.back-to-home {
    position: absolute;
    left: 10vw;
    top: 0;
    transform: translateY(3rem);
    a {
        color: #fff;
        font-weight: bold;
        text-decoration: underline;
    }
}
</style>