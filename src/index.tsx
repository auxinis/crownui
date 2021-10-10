import * as React from 'react'
import styles from './styles.module.css'
interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.example}>Example Component: {text}</div>
}

export type { ButtonProps } from './components/Button';
export { default as Button} from './components/Button';
