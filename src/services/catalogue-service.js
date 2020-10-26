export default {
    items: localStorage.getItem('catalogue') ? JSON.parse(localStorage.getItem('catalogue')) : [
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            id: 1
        },
        {
            title: 'The Chronicles of Narnia',
            author: 'C.S. Lewis',
            id: 2
        }
    ],
    
    findByProp(prop, val) {
        return this.items.find(item => item[prop] === val)
    },

    add(title, author) {
        let item = {title: title, author: author}
        item.id = parseInt(this.items[this.items.length - 1].id) + 1
        this.items.push(item)
        this.saveList()
    },

    delete(item) {
        let index = this.items.indexOf(item)
        console.log(index)
        if (index) {
            this.items.splice(index, 1)
        }
        this.saveList()
    },

    update(edited) {
        let item = this.items.find(i => i.id === edited.id)
        if (item) {
            item.title = edited.title
            item.author = edited.author
        }
        this.saveList()
    },
    
    saveList() {
        localStorage.setItem('catalogue', JSON.stringify(this.items))
    },
}