export default {
    items: localStorage.getItem('catalogue') ? JSON.parse(localStorage.getItem('catalogue')) : [
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            id: 'jane-austen-pride-and-prejudice'
        },
        {
            title: 'The Chronicles of Narnia',
            author: 'C S Lewis',
            id: 'c-s-lewis-the-chronicles-of-narnia'
        }
    ],
    
    findByProp(prop, val) {
        return this.items.find(item => item[prop] === val)
    },

    add(title, author) {
        if (!this.itemExists(title, author)) {
            let item = {title: title, author: author}
            item.id = author.toLowerCase().replace(' ', '-') + '-' + title.toLowerCase().replace(' ', '-')
            this.items.push(item)
            this.saveList()
        } else {
            alert('That item already exists')
        }
    },

    delete(item) {
        let index = this.items.indexOf(item)
        if (index) {
            this.items.splice(index, 1)
        }
        this.saveList()
    },

    update(edited) {
        let item = this.items.find(i => i.id === edited.id)
        if (!this.itemExists(item.title, item.author)) {
            item.title = edited.title
            item.author = edited.author
            this.saveList()
        } else {
            alert('These changes conflict with an item that laready exists')
        }
    },
    
    itemExists(title, author) {
        return this.items.find(item => item.title.toLowerCase() === title.toLowerCase() && item.author.toLowerCase() === author.toLowerCase())
    },
    
    saveList() {
        localStorage.setItem('catalogue', JSON.stringify(this.items))
    },
}