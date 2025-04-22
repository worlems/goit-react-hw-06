import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <label className={styles.wrapper}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />
      </label>
    </div>
  );
}
