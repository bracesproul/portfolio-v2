import Head from 'next/head';
import { Text } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`Brace's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text className={'text-white'} type={'4xl'} isBold={true}>text</Text>
    </div>
  )
}