import Http from "./HttpServices";


export function GetEstates() {
    return Http.get('/products?per_page=80').then(({ data }) => data);
  }
  export function GetEstateByCategory(id : number) {
    return Http.get(`/products?category=${id}&per_page=80&order=asc`).then(({data}) => data);
  }

  export function GetOneEstateById(id : number) {
    return Http.get(`/products?include=${id}?order=asc`).then(({ data }) => data);
  }

