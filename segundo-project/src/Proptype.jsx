import PropTypes from "prop-types"

export const Proptype = ({ title, description = 13123123 }) => {
  return (
    <>
      <h1>Tienda</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  )
}


Proptype.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.number
}

/* Proptype.defaultProps = {
  description: 13123123
}*/


//Practica
// <h1><h1/>
//<h2>{value}<h2/>