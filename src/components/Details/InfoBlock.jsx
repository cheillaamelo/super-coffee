import styles from "./Details.module.scss";

export const InfoBlock = ({ title, content }) => {
  return (
    <div className={styles.info}>
      <h3>{title}</h3>
      <h4>{content}</h4>
    </div>
  );
};
