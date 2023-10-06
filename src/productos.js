import imagenes from "./imagenes";

const losProductos = [
    {
      id: 1,
      foto: imagenes.img1,
      nombre: "Remera Titular de San Lorenzo de Almagro",
      precio: 26999,
      categoria: "Remeras",
      cantidad: 1,
      descripcion: "La Remera Titular de San Lorenzo esta en todas las tallas y de calidad Original. Aprovecha este descuento a tan solo 26,999$ !!!",
    },
  
    {
        id: 2,
        foto: imagenes.img2,
      nombre: "Remera Suplente de San Lorenzo de Almagro",
      precio: 26999,
      categoria: "Remeras",
      cantidad: 1,
      descripcion: "La Primera Remera Suplente de San Lorenzo esta en todas las tallas y de calidad Original. Aprovecha este descuento a tan solo 26,999$ !!!",
    },
    {
        id: 3,
        foto: imagenes.img3,
      nombre: "Segunda Remera Suplente de San Lorenzo de Almagro",
      precio: 26999,
      categoria: "Remeras",
      cantidad: 1,
      descripcion: "La Segunda Remera Suplente de San Lorenzo esta en todas las tallas y de calidad Original. Aprovecha este descuento a tan solo 26,999$ !!!",
    },
  
    {
        id: 4,
        foto: imagenes.img4,
      nombre: "Buzo Frizado Blanco de San Lorenzo de Almagro",
      precio: 16800,
      categoria: "Buzos de San Lorenzo de Almagro",
      cantidad: 1,
      descripcion: "El Buzo Frizado de San Lorenzo esta en todas las tallas y de la maxima calidad. Aprovecha este descuento a tan solo 16,900$ !!!",
    },
    {
      id: 5,
      foto: imagenes.img5,
      nombre: "Campera Combinada Con Capucha San Lorenzo de Almagro",
      precio: 20900,
      categoria: "Buzos de San Lorenzo de Almagro",
      cantidad: 1,
      descripcion: "El Buzo Combinado con Capucha de San Lorenzo esta en todas las tallas y de la maxima calidad. Aprovecha este descuento a tan solo 20,900$ !!!",
    },
    {
      id: 6,
      foto: imagenes.img6,
      nombre: "Buzo Combinado San Lorenzo",
      precio: 9520,
      categoria: "Buzos de San Lorenzo de Almagro",
      cantidad: 1,
      descripcion:
        "El Buzo Combinado de San Lorenzo esta en todas las tallas y de la maxima calidad. Aprovecha este descuento a tan solo 9,520$ !!!",
    },
    {
      id: 7,
      foto:imagenes.img7,
      nombre: "Remera Casual con Diseño Azul de San Lorenzo de Almagro",
      precio: 7900,
      categoria: "Remeras",
      cantidad: 1,
      descripcion:
        "La Remera Casual Simple de San Lorenzo esta en todas las tallas y de la maxima calidad. Aprovecha este descuento por el dia del Progamador (que tenia que ver) a solo 5,600$ !!!",
    },
    {
      id: 8,
      foto: imagenes.img8,
      nombre: "Remera Casual Simple Negra de San Lorenzo de Alamgro ",
      precio: 5600,
      categoria: "Remeras",
      cantidad: 1,
      descripcion:
        "La Remera Casual Simple de San Lorenzo esta en todas las tallas y de la maxima calidad. Aprovecha este descuento por el dia del Progamador (que tenia que ver) a solo 5,600$ !!!",
    },
  
    {
      id: 9,
      foto: imagenes.img9,
      nombre: "Pelota Dribbling San Lorenzo Mundial 2.0",
      precio: 6200,
      categoria: "Pelotas",
      cantidad: 1,
      descripcion:
        "La pelota Driblling Mundial 2.0 de San Lorenzo es perfecta para practicar tus habilidades con el balon y es de la maxima calidad. Original del equipo de Futsal de San Lorenzo. Aprovecha este descuento a tan solo 6,200$ !!!",
    },
    {
      id: 10,
      foto: imagenes.img10,
      nombre: "Pelota Dribbling San Lorenzo",
      precio: 6200,
      categoria: "Pelotas",
      cantidad: 1,
      descripcion: "La Pelota Dribbling de San Lorenzo es perfecta para practicar tus habilidades con el balon y es de la maxima calidad. Original del equipo de Futsal de San Lorenzo. Aprovecha este descuento a tan solo 6,200$ !!! ",
    },
    {
      id: 11,
      foto: imagenes.img11,
      nombre: "Conjunto de Entrenamiento Campera Y Pantalon de San Lorenzo de Almagro",
      precio: 14500,
      categoria: "Conjunto",
      cantidad: 1,
      descripcion: "El conjunto deportivo de entrenamiento de la temporada 2018/2019, vienen incluido la campera y el pantalon, estan todos los talles y es de calidad original.  Aprovecha este descuento a tan solo 14,500$ !!! ",
    },
    {
        id: 12,
        foto: imagenes.img12,
      nombre: "Conjunto de Entrenamiento Campera Y Pantalon de San Lorenzo de Almagro",
      precio: 14500,
      categoria: "Conjunto",
      cantidad: 1,
      descripcion:
        "El conjunto deportivo de entrenamiento de la temporada 2020/2021, vienen incluido la campera y el pantalon, estan todos los talles y es de calidad original. Aprovecha este descuento a tan solo 14,500$ !!!",
    },
  ];

  export const misProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(losProductos)
        }, 3000)
    })
  }

  export const misProductosId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
           const productos = losProductos.find((prod) => prod.id === id)
           if(productos) return resolve(productos)
           return reject({error: 'Lo sentimos, pero el producto que buscas no existe o no ha sido encontrado 😢😢'})
        }, 3000)
    })
  }