import React from 'react';
import styles from './HelpModal.module.scss';
import { AppContext } from '../../AppContextProvider';
import { useContext } from 'react';

const HelpModal = () => {
  console.log('--HelpModal');
  const {
    appState,
    setHelpModalIsOpen
  } = useContext(AppContext);

  const pageInfo = {
    'studentLogin' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
    'visitorLogin' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
		'home' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
		'ranking' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
		'teamTop' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
		'profile' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
		'review' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
		'getReview' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
		'levelup' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    },
    'question' : {
      body : '説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です説明です'
    }
	}
  return (
    <div className={styles.HelpModalBack} onClick={() => setHelpModalIsOpen(false)}>
      <div className={styles.HelpModal}>
        <figure className={styles.image}><img src={`/assets/img/page/${appState}.png`} alt="" /></figure>
        <p className={styles.body}>{pageInfo[appState].body}</p>
        <button type="button" className={styles.btnClose}>閉じる</button>
      </div>
    </div>
  )
}

export default HelpModal