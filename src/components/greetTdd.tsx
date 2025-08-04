// type GreetProps = {
//   name?: string;
// };

import { type GreetProps } from './greet.types'

export const GreetTdd = (props: GreetProps) => {
  //   return <div>Hello {props.name}</div>;
  return <div>Hello {props.name ? props.name : 'Guest'}</div>
}
