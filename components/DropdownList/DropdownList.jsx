import PropTypes from 'prop-types'
import DropdownItem from '../DropdownItem/DropdownItem'
import styles from './DropdownList.module.css'

const DropdownList = ({ items, selectedItem, onSelectedItem }) => {
  return (
    <ul className={styles.dropdownList}>
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          title={item.title}
          onSelectedItem={onSelectedItem}
          selected={item.title === selectedItem}
        />
      ))}
    </ul>
  )
}

DropdownList.propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.string,
  onSelectedItem: PropTypes.func,
}

export default DropdownList
