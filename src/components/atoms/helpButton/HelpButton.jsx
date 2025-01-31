import React, { useContext } from 'react';
import styles from './HelpButton.module.scss';
import { AppContext } from '../../AppContextProvider';
const HelpButton = () => {
  console.log('--HelpButton');
  const {
    setHelpModalIsOpen
  } = useContext(AppContext);
  return (
    <button type='button' className={styles.help} onClick={() => setHelpModalIsOpen(true)}>?</button>
  )
}

export default HelpButton;