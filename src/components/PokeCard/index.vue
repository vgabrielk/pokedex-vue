<template>
    <router-link :to="'/details/' + data.data.id">
        <div class="card" @click="this.getIndex(data)">
            <div class="card-data">
                <p :style="{ backgroundColor: pokemonColor() }">{{ data.data.types[0].type.name }}</p>
                <p>{{ data.data.name }}</p>
                <img class="background-dark"
                    src="data:image/png;base64,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"
                    alt="">
                <img class="pokemon_image" :src="data.data.sprites.front_default" alt="">
            </div>
        </div>
        {{  }}
        
    </router-link>
    <router-view />
</template>

<script>

export default {
    pokeName: "PokeCard",
    data() {
        return {
            endpoints: [],
            detailsId: null
        }
    },
    props: {
        data: Object,
    },

    methods: {
        getIndex(data) {
            this.detailsId = data.data.id
        },
        pokemonColor() {
            const color = this.data.data.types[0].type.name
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
        this.pokemonColor()
    }


}

</script>

<style lang="scss" scoped>
.card {
    display: flex;
    height: 280px;
    width: 70vw;

    .card-data {
        box-shadow: 1px 1px 12px #000000;
        padding: 10px 20px;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: space-between;
        transition: all .5s ease;
        cursor: pointer;

        .background-dark {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            object-fit: cover;
            z-index: -1;
            filter: blur(5px);
            opacity: .0378;
        }

        &:hover {
            box-shadow: 1px 1px 12px #000000;
            transform: translateY(-10px)
        }

        .pokemon_image {
            width: 180px;

        }

        p {
            text-transform: capitalize;
            font-weight: bold;
            color: #fff;

            &:first-child {
                position: absolute;
                right: 1rem;
                top: 1rem;
                width: 140px;
                text-align: center;
                border-radius: 6px;
            }
        }

        @media(max-width: 600px) {
            width: 100%!important;
            .pokemon_image {
                width: 100%;
            }
            p{
                position: absolute;
                top: 0;
                &:first-child {
                    display: none;
                }
            }
        }

    }

}
</style>