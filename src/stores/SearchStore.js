import { defineStore } from 'pinia'


export const useSearchStore = defineStore('searchStore', {
    state : () => ({
        search: ''
    })
})