
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
        src: string,
        alt: string
    }[],
    attributes: {
        id: number,
        name: string,
        slug: string,
        options: string[],
    }[],
    related_ids: [],
}

export interface EstatesAttributesType {
    id: number,
    name: string,
    slug: string,
    options: string[],
}
export interface EstatesImagesType {
    id: number,
    src: string,
    alt: string
}