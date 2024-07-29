import Http from "./HttpServices";

export function GetAttributes() {
    return Http.get("/products/attributes").then(({ data }) => data);
  }
  export function GetAttributeById(id : number) {
    return Http.get(`/products/attributes/${id}`).then(({ data }) => data);
  }