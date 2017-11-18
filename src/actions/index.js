export function selectBook(book){
    // selecBook is an actioncreator, we need it to return an action.
    // an action is an object w/ type and payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}