import Http from "./HttpServices";


export function GetEstates(queryString : string) {
  
    return Http.get(`/products?${queryString}&per_page=24&status=publish`).then(({ data }) => data);
  }
  export function GetEstateByCategory(id : number) {
    return Http.get(`/products?category=${id}&per_page=80&order=asc`).then(({data}) => data);
  }

  export function GetOneEstateById(id : number) {
    return Http.get(`/products?include=${id}`).then(({ data }) => data);
  }

