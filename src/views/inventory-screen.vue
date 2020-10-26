<template>
    <div class="inventory-screen">
        <h2>Inventory</h2>
        <div class="list-tools">
            <div>
                <span>Sort by:</span>
                <select v-model="sortBy">
                    <option>author</option>
                    <option>title</option>
                </select>
            </div>
            <div>
                <span>Filter by:</span>
                <select v-model="filterBy">
                    <option>none</option>
                    <option>author</option>
                    <option>title</option>
                </select>
                <input v-if="filterBy !== 'none'" v-model="search" placeholder="search" />
            </div>
        </div>
        <div class="inventory-wrapper">
            <button v-if="!showCreate" @click="showCreate = !showCreate">add items</button>
            <catalogue-item v-if="showCreate" :addNew="true" @cancel-add="showCreate = false"></catalogue-item>
            <catalogue-item v-for="item in items" :key="item.id" :item="item" :filterProp="filterBy" :searchCrit="search" />
        </div>
    </div>
</template>

<script>
import CatalogueService from '@/services/catalogue-service.js'
import CatalogueItem from '@/components/catalogue-item.vue'

export default {
    name: 'InventoryScreen',
    components: {CatalogueItem},
    data() {
        return {
            items: [],
            showCreate: false,
            sortBy: 'author',
            filterBy: 'none',
            search: '',
        }
    },
    methods: {
        sortItems() {
            this.items.sort((a, b) => {
                return a[this.sortBy] > b[this.sortBy] ? 1 : -1
            })
        },
    },
    mounted() {
        this.items = CatalogueService.items
        this.sortItems()
        this.showCreate = !this.items.length
    },
    watch: {
        sortBy() {
            this.sortItems()
        },
    }
}
</script>

<style>
.inventory-screen .list-tools {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-bottom: 20px;
}
.inventory-screen .list-tools > div {
    margin-right: 10px;
}
.inventory-screen .list-tools input {
    margin-left: 5px;
}
</style>