'use client';

import Image from 'next/image';
import Chat from './components/Chat';

export default function Home() {
  return (
    <main className="App">
      <div className='container'>
        <div className='logoBox'>
          <Image src="/Logo_small.png" alt="SuperViral.ai logo" width="250" height="250" />
          <h2>Your Personal AI Genius Awaits</h2>
          <h4>Ask it anything—from bugs to big ideas...</h4>
        </div>
        <Chat />
      </div>
    </main>
  )
}