import styles from  './Loading.module.css'

export const LoadingBox = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
        <p>Cargando...</p>
    </div>
  )
}

export default LoadingBox
