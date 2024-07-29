import Http from "./HttpServices";

export function GetTags() {
    return Http.get("/products/tags").then(({ data }) => data);
  }
  export function GetTagById(id : number) {
    return Http.get(`/products/tags/${id}`).then(({ data }) => data);
  }