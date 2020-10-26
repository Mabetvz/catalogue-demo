<template>
    <div v-if="(item && matchesSearch) || addNew" class="catalogue-item">
        <div v-if="isEditing || addNew">
            <div>
                <span>Title</span>
                <input v-model="newTitle" placeholder="title" />
            </div>
            <div>
                <span>Author</span>
                <input v-model="newAuthor" placeholder="author" />
            </div>
            <div>
                <button class="button-yellow" @click="saveItem">save</button>
                <button @click="toggleEdit">
                    {{addNew ? 'close' : 'cancel'}}
                </button>
            </div>
        </div>
        <div v-else>
            <div>
                <strong>{{item.title}}</strong><br />
                <em>{{item.author}}</em>
            </div>
            <div class="hideable-options">
                <button @click="toggleEdit">edit</button>
                <button class="button-red" @click="showConfirm = true">delete</button>
            </div>
        </div>
        <transition name="fade">
            <div v-if="showConfirm" class="confirm-action-wrapper">
                <div class="confirm-action-card">
                    <h3>Are you sure you want to remove <em>"{{item.title}}"</em> permanently?</h3>
                    <div>
                        <button class="button-red" @click="removeItem">Yes, delete</button>
                        <button @click="showConfirm = false">No, take me back</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import CatalogueService from '@/services/catalogue-service.js'

export default {
    name: 'CatalogueItem',
    props: {
        item: Object,
        addNew: Boolean,
        filterProp: String,
        searchCrit: String,
    },
    data () {
        return {
            newTitle: '',
            newAuthor: '',
            isEditing: false,
            showConfirm: false,
        }
    },
    computed: {
        matchesSearch() {
            return this.filterProp === 'none' || this.item[this.filterProp].toLowerCase().includes(this.searchCrit.toLowerCase())
        }
    },
    methods: {
        saveItem() {
            if (this.newTitle && this.newAuthor) {
                if (this.addNew) {
                    CatalogueService.add(this.newTitle, this.newAuthor)
                    this.newTitle = ''
                    this.newAuthor = ''
                } else {
                    this.editItem()
                }
            }
        },
        removeItem() {
            CatalogueService.delete(this.item)
            this.showConfirm = false
        },
        editItem() {
            this.item.title = this.newTitle
            this.item.author = this.newAuthor
            CatalogueService.update(this.item)
            this.isEditing = false
        },
        toggleEdit() {
            if (this.addNew) {
                this.$emit('cancel-add')
            } else {
                this.newTitle = this.item.title
                this.newAuthor = this.item.author
                this.isEditing = !this.isEditing
            }
        },
    }
}
</script>

<style>
.catalogue-item {
    margin: 5px;
    padding: 5px;
    border: solid 1px #ccc;
    width: 210px;
    position: relative;
}
.catalogue-item input {
    margin: 4px;
}
.catalogue-item .hideable-options {
    opacity: 0;
    transition: all 0.5s ease;
}
.catalogue-item:hover .hideable-options {
    opacity: 1;
}

.catalogue-item .confirm-action-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20vh;
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    z-index: 2;
}
.catalogue-item .confirm-action-card {
    position: absolute;
    background-color: white;
    width: 300px;
    left: calc(50vw - 150px);
    padding: 20px;
}
</style>