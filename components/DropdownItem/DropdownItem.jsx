import PropTypes from 'prop-types'
import styles from './DropdownItem.module.css'

const DropdownItem = ({ title, onSelectedItem, selected }) => {
  return (
    <li
      className={styles.item}
      style={selected ? { color: '#5890e0' } : null}
      onClick={() => onSelectedItem(title)}
    >
      {title}
    </li>
  )
}

DropdownItem.propTypes = {
  title: PropTypes.string,
  onSelectedItem: PropTypes.func,
  selected: PropTypes.bool,
}

export default DropdownItem
