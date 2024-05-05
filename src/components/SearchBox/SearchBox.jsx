import css from "./SearchBox.module.css";

export default function Searchbox({ value, onSearch }) {
  return (
    <div className={css.searchBoxWrapper}>
      <p className={css.searchParagraph}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}
