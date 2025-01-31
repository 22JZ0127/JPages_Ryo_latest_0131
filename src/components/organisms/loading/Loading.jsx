import style from './Loading.module.scss'
function Loading() {
  console.log('--Loading');
  return (
    <div className={style.spinnerBox}>
      <img src="/assets/img/loading.gif" alt="loading" />
    </div>
  )
}

export default Loading;