import { useState } from 'react'
import DropdownList from '../DropdownList/DropdownList'
import dropdownItems from './dropdownItems'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  const onSelectedItem = (item) => {
    setSelectedItem(item)
    setIsOpen(false)
  }

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.button}
        onClick={onClick}
      >
        account settings
      </button>
      {isOpen && (
        <DropdownList
          items={dropdownItems}
          selectedItem={selectedItem}
          onSelectedItem={onSelectedItem}
        />
      )}
    </div>
  )
}

export default Dropdown
