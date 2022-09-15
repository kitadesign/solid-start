import { Title } from 'solid-start'
import Counter from '~/components/Counter'

export default () => {
  return (
    <main>
      <Title>ハローワールド</Title>
      <h1>ハローワールド！</h1>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://docs.solidjs.com/start" target="_blank">
          docs.solidjs.com/start
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  )
}
