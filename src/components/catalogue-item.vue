<template>
    <div v-if="item" class="catalogue-item">
        <div v-if="isEditing">
            <div>
                <span>Title</span>
                <input v-model="newTitle" placeholder="title" />
            </div>
            <div>
                <span>Author</span>
                <input v-model="newAuthor" placeholder="author" />
            </div>
            <div class="item-options">
                <button class="button-yellow" @click="editItem">save</button>
                <button @click="toggleEdit">cancel</button>
            </div>
        </div>
        <div v-else>
            <div>
                <strong>{{item.title}}</strong><br />
                <em>{{item.author}}</em>
            </div>
            <div class="item-options hideable-options">
                <button @click="toggleEdit">edit</button>
                <button class="button-red" @click="removeItem">delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import CatalogueService from '@/services/catalogue-service.js'

export default {
    name: 'CatalogueItem',
    props: {
        item: Object
    },
    data () {
        return {
            newTitle: '',
            newAuthor: '',
            isEditing: false
        }
    },
    methods: {
        removeItem() {
            CatalogueService.delete(this.item)
        },
        editItem() {
            this.item.title = this.newTitle
            this.item.author = this.newAuthor
            CatalogueService.update(this.item)
            this.isEditing = false
        },
        toggleEdit() {
            this.newTitle = this.item.title
            this.newAuthor = this.item.author
            this.isEditing = !this.isEditing
        }
    }
}
</script>

<style>
.catalogue-item {
    margin: 5px;
    padding: 5px;
    border: solid 1px #ccc;
    width: 250px;
}
.catalogue-item input {
    margin: 4px;
}
.catalogue-item .hideable-options {
    display: none;
}
.catalogue-item:hover .hideable-options {
    display: block;
}
.catalogue-item .item-options button {
    cursor: pointer;
    margin: 2px;
}
</style>