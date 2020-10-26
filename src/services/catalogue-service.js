export default {
    items: [
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            id: 1
        },
        {
            title: 'The Chronicles of Narnie',
            author: 'C.S. Lewis',
            id: 2
        }
    ],
    
    getItems() {
        return this.items;
    },
}