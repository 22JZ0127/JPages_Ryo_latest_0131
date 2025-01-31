import React, { useContext, useState, useEffect } from "react";
import Header from "../../organisms/header/Header";
import LevelUpCharacter from "../../organisms/levelUpCharacter/LevelUpCharacter"
import Items from "../../organisms/Items/Items";
import Navigation from "../../organisms/navigation/Navigation";
import style from "./LevelUpPage.module.scss";
import { AppContext } from "../../AppContextProvider";
import Ajax from "../../../lib/Ajax";

function LevelUpPage() {
  console.log('-------------------------------');
  console.log('--LevelUpPage');
  // data
  const [character, setCharacter] = useState({});
  const [progress, setProgress] = useState(0);

  // useContext
  const {
    setAppState,
    setLoginToken,
    setLoading,
    activeTeam,
    setLoginTeamId,
    setToast
  } = useContext(AppContext);

  /**
   * キャラクター情報を取得する
   */
  const characterGet = () => {
    setLoading(true);
    Ajax(null, `character/${activeTeam.id}`)
    .then((data) => {
      if(data.status === 'failure') {
        // 失敗
        setToast({toast: true, state: 'levelup', message: 'エラーが発生しました。もう一度お試しください。'})
      }
      else {
        // キャラクター情報
        setCharacter(data.character);
        // バーの長さを取得
        setProgress(calculateProgress(data.character.point));
      }  
      setLoading(false);
    })
    .catch((error) => {
      console.error("キャラクターの取得に失敗しました", error);
      setAppState('visitorLogin');
      setLoginToken('');
      setLoginTeamId('');
      setLoading(false);
    });
  }

  /**
   * 現在のポイントからポイントバーの長さを取得する
   * @param point 現在のポイント
   * @returns ポイントバーの長さ
   */
  const calculateProgress = (point) => { // returnはprogressのwidth
    if (point >= 18000) {
      return 100;
    }
    else if (point >= 11000) {
      return ((point - 11000) / 7000) * 100; 
    }
    else if (point >= 7000) {
      return ((point - 7000) / 4000) * 100; 
    }
    else if (point >= 3500) {
      return ((point - 3500) / 3500) * 100; 
    }
    else if (point >= 1000) {
      return ((point - 1000) / 2500) * 100; 
    }
    return (point / 1000) * 100;
  };  
  
  // useEffect
  useEffect(() => {
    characterGet();
  },[]);

  return (
    <>
      <Header/>
      <section id="level-up" className={style.levelUp}>
        <LevelUpCharacter character={character} progress={progress}/>
        <Items characterGet={characterGet}/>
      </section>
      <Navigation/>
    </>
  );
}

export default LevelUpPage