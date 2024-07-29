import Http from "./HttpServices";

export function GetCategories() {
    return Http.get("/products/categories?per_page=50").then(({ data }) => data);
  }
  export function GetCategoryById(id : number) {
    return Http.get(`/products/categories/${id}`).then(({ data }) => data);
  }