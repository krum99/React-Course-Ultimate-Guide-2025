export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button class={isSelected ? 'active' : null} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
