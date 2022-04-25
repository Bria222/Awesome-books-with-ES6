const titleCont = document.querySelector('.books-title-1');
import {getTime} from '../js/index.js';
import Books from './books.js';
 const loadData = () => {
// call all methods
document.addEventListener('DOMContentLoaded', () => {
    getTime();
    Books.addUi();
    Books.addBooks();
    Books.deleteBk();
    Books.contactSection();
    Books.listSection();
    titleCont.style.display = 'block';
  });
}

export default loadData;