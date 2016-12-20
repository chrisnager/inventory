import React, {PropTypes} from 'react'
import './shoe.css'

const Shoe = ({shoe}) => {
  const {
    category,
    brand,
    color,
  } = shoe

  return (
    <tr>
      <td>{category}</td>
      <td>{brand}</td>
      <td
        style={{
          backgroundColor: color,
          color: color === 'Black' ? '#fff' : 'inherit',
        }}
      >
        {color}
      </td>
    </tr>
  )
}

Shoe.propTypes = {
  shoe: PropTypes.object,
}

export default Shoe
