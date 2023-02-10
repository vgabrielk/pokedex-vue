import { createRouter, createWebHistory } from 'vue-router'

import Pokedex from '../views/Pokedex.vue'
import PokemonDetails from '../views/PokemonDetails.vue'

const routes = [
    { path: '/', component: Pokedex },
    { path: '/details/:id', component: PokemonDetails },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;