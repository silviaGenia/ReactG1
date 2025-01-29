import React from 'react'


export const StoreApp = ({ nombre, direccion, contacto }) => {
  return (
    <>
      <h1>Mi tienda</h1>
      <div>Mi tienda de Frutas</div>

      <div>Tienda de verduras</div>

      <p>Direccion: {direccion}</p>
      <p>Contacto: {contacto}</p>

      <p>Es la mejor tienda, {nombre}</p>

    </>
  )
}

