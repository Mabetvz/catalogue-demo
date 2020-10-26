<template>
    <div class="inventory-screen">
        <h2>Inventory</h2>
        <div class="inventory-wrapper">
            <catalogue-item v-if="showCreate" :addNew="true" @cancel-add="showCreate = false"></catalogue-item>
            <button v-else @click="showCreate = !showCreate">add items</button>
            <catalogue-item v-for="item in items" :key="item.id" :item="item" />
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
        }
    },
    mounted() {
        this.items = CatalogueService.items
        this.showCreate = !this.items.length
    }
}
</script>

<style>

</style>