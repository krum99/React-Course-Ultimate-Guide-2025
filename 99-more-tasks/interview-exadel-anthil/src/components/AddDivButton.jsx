import { useRef } from 'react';

export default function AddButton({ onCLickHandler }) {
  let input_ref = useRef();

  return (
    <>
      <input ref={input_ref} />
      <button onClick={() => onCLickHandler(input_ref.current.value)}>
        Add
      </button>
    </>
  );
}
