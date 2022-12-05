import { component$ } from '@builder.io/qwik'

export interface ButtonProps {
  text: string
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <button onClick$={(ev) => {}}>
      {props.text}
    </button>
  );
});
