import Http from "./HttpServices";

export function GetAttributes() {
    return Http.get("/products/attributes").then(({ data }) => data);
  }
  export function GetAttributesTerms(id: number) {
    return Http.get(`/products/attributes/${id}/terms`).then(({ data }) => data);
  }
  export function GetDocumentTerms() {
    return Http.get('/products/attributes/59/terms').then(({ data }) => data);
  }
  export function GetElevatorTerms() {
    return Http.get('/products/attributes/53/terms?per_page=90').then(({ data }) => data);
  }
  export function GetFloorTerms() {
    return Http.get('/products/attributes/55/terms').then(({ data }) => data);
  }
  export function GetNeighborhoodTerms() {
    return Http.get('/products/attributes/51/terms?per_page=90').then(({ data }) => data);
  }
  export function GetTotalAreaTerms() {
    return Http.get('/products/attributes/49/terms?per_page=100').then(({ data }) => data);
  }
  export function GetNumFloorTerms() {
    return Http.get('/products/attributes/54/terms').then(({ data }) => data);
  }
  export function GetNumUnitTerms() {
    return Http.get('/products/attributes/56/terms').then(({ data }) => data);
  }
  export function GetRoomTerms() {
    return Http.get('/products/attributes/50/terms').then(({ data }) => data);
  }
  export function GetYearTerms() {
    return Http.get('/products/attributes/58/terms?per_page=90').then(({ data }) => data);
  }
  export function GetParkingTerms() {
    return Http.get('/products/attributes/52/terms').then(({ data }) => data);
  }
  export function GetOtherFeaturesTerms() {
    return Http.get('/products/attributes/57/terms?per_page=50').then(({ data }) => data);
  }
  export function GetAttributeById(id : number) {
    return Http.get(`/products/attributes/${id}`).then(({ data }) => data);
  }