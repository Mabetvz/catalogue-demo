<template>
    <div>
        <h2>Inventory</h2>
        <div class="inventory-wrapper">
            <catalogue-item v-for="item in items" :key="item.id" :item="item" />
        </div>
    </div>
</template>

<script>
import Catalogue from '@/services/catalogue-service.js'
import CatalogueItem from '@/components/catalogue-item.vue'

export default {
    name: 'InventoryScreen',
    components: {CatalogueItem},
    data() {
        return {
            items: [],
        }
    },
    mounted() {
        this.items = Catalogue.items;
    }
}
</script>