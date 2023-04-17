const axios = require('axios').default;
export class getBookData {
  constructor(id, category) {
    this.URL = 'https://books-backend.p.goit.global';
    this.categoryList = '/books/category-list';
    this.topBooks = '/books/top-books';
    this.category = `/books/category?category=${category}`;
    this.id = `/books/${id}`;
  }

  async getPromTopBooks() {
    try {
      const response = await axios.get(`${this.URL}${this.topBooks}`);
      const books = await response.data;
      return books;
    } catch (error) {
      console.log(error);
    }
  }

  async getPromCategoryList() {
    try {
      const response = await axios.get(`${this.URL}${this.categoryList}`);
      const list = await response.data;
      return list;
    } catch (error) {
      console.log(error);
    }
  }

  async getPromCategory() {
    try {
      const response = await axios.get(`${this.URL}${this.category}`);
      const category = await response.data;
      return category;
    } catch (error) {
      console.log(error);
    }
  }

  async getPromId() {
    try {
      const response = await axios.get(`${this.URL}${this.id}`);
      const id = await response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  }
}
