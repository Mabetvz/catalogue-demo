<template>
    <div v-if="item">
        <strong>{{item.title}}</strong><br />
        <em>{{item.author}}</em>
    </div>
</template>

<script>
export default {
    name: 'CatalogueItem',
    props: {
        item: Object
    }
}
</script>