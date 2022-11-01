export const createProdAdaptedFirestore = (doc) => {

    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        name: data.name,
        price: data.price,
        stock: data.stock,
        description: data.description,
        category: data.category,
        subcategory: data.subcategory,
        keywords: data.keywords,
        info: data.info,
        img: data.img,
        img2: data.img2

    }

    return productAdapted

}