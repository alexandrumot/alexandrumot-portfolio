import styles from "../../styles/Home.module.css";


function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen scale-300">
      <div className={styles.dotsfalling}></div>
    </div>
  );
}

export default Loading;