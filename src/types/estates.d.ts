
export interface EstatesListType {
    id: number,
    name: string,
    slug: string,
    date_created: string,
    sku: string,
    price: string,
    stock_quantity: null | number,
    categories: {
        id: number,
        name: string,
        slug: string,
    }[],
    images: {
        id: number,
        date_created: string,
        src: string,
        alt: string
    }[],
    attributes: {
        id: number,
        name: string,
        slug: string,
        options: [],
    }[],
    related_ids: [],
}