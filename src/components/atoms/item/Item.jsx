import { useContext, useRef } from "react";
import style from './Item.module.scss';
import Draggable from 'react-draggable';
import Ajax from "../../../lib/Ajax";
import { AppContext } from "../../AppContextProvider";
function Item(props) {
  console.log('--Item');
  // props
  const { data, wrapTop, init, characterGet } = props;
  
  // data
  const point = data.point.design + data.point.plan + data.point.present + data.point.skill;
  
  // ref
  const draggableRef = useRef(null);
  // useContext
  const {
    setAppState,
    loginToken,
    setLoginToken,
    setLoginTeamId,
    setLoading,
    activeTeam,
    setToast
  } = useContext(AppContext);

  /**
   * ドラッグが終わった時の処理
   * @param event　//ドラッグが終わったら 
   */
  const onStop = (event) => {
    // 現在の位置を取得する
    const currentY = event.clientY || event.changedTouches[0].clientY;

    // Item表示領域より上なら成長させる
    if(currentY < wrapTop) {
      setLoading(true);
      const req = {
        rating_id : data.id,
        point: point
      }
      Ajax(loginToken, `character/${activeTeam.id}`, 'PUT', req)
      .then((data) => {
        if(data.status === 'ParameterError') {
          setToast({toast: true, state: 'levelup', message: 'エラーが発生しました。もう一度お願いします。'})
        }
        else if(data.status === 'failure') {
          // 失敗
          setToast({toast: true, state: 'teamTop', message: 'エラーが発生しました。'})
        }
        else if(data.status === 'TokenError') {
          // 失敗
          setToast({toast: true, state: 'visitorLogin', message: '認証エラーです。もう一度ログインしてください。'})
        }
        else {
          init();
          characterGet();
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("アイテムをあげられませんでした", error);
        setAppState('visitorLogin');
        setLoginToken('');
        setLoginTeamId('');
        setLoading(false);
      });
    }
  }
  
  return (
    <Draggable nodeRef={draggableRef} onStop={onStop} enableUserSelectHack={false}> 
      <li ref={draggableRef} className={style.item}>
        <figure>
          <img src="https://placehold.jp/60x60.png" alt="アイテム"/>
        </figure>
      </li>
    </Draggable>
  );
}

export default Item;
