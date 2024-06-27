import HttpClient from './utlis/HttpClient';

class CategoriesService {
  constructor() {
    this.HttpClient = new HttpClient('http://18.231.248.2:3001');
  }

  listCategories() {
    return this.HttpClient.get('/categories');
  }
}

export default new CategoriesService();
