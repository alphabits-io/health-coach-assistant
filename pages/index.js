import Link from 'next/link';
import { useState } from 'react';
import MyModal from '../components/Modal';

async function validateFormWithJS(event) {
  event.preventDefault();

  const email = event.target[0].value;
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });

  const { success } = await res.json();

  return success;
}

const Index = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [email, setEmail] = useState('');

  async function handleAddToWaitlist(event) {
    const success = await validateFormWithJS(event);

    if (success) {
      clearEmail();
      openModal();
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function handleUserInput(e) {
    setEmail(e.target.value);
  };

  function clearEmail() {
    setEmail('');
  }

  return (
    <>
      <header className="sticky top-0 z-30 w-full p-6 bg-white sm:px-4 shadow font-Josefin">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
            <Link href="/">
                <span className="text-2xl font-bold" style={{ color: '#642e59' }}>HeyCoach</span>
            </Link>
            <div className="flex items-center space-x-1">
                <ul className="hidden space-x-2 md:inline-flex">
                    <li><Link href="/" className="px-4 py-2 font-semibold text-gray-600 rounded">Sign Up to Save a Spot</Link></li>
                </ul>
                <div className="inline-flex md:hidden">
                    <button className="flex-none px-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      </header>

      <div className='max-w-screen-lg mx-auto px-3 font-Josefin'>
        <div className="container">
          <h1>
            Your Personal Chat-Based Health Coach
            {/* <br />
            Chat-Based
            <br />
            Health Coaching */}
          </h1>
          <img src="/prathna.png" alt="profile pic" style={{ borderRadius: '50%', width: '150px', height: '150px', margin: 'auto' }} />
          <p className="mt-1">👋🏼 Hi, I'm Prathna Patel 👋🏼</p>

          <p className='max-w-md mx-auto'>
            I'm a certified integrative health coach and I help people like you achieve their health goals.
            I've partnered with HeyCoach to provide you with a personalized, chat-based health coaching experience.
            Sign up to save your spot and hear from me when we're ready to accept new clients!
          </p>

          <form className="verticalForm" onSubmit={handleAddToWaitlist}>
            <input type="email" placeholder="Enter email address" value={email} onChange={handleUserInput} />
            <button type="submit">Sign Up to Save a Spot</button>
          </form>
          <MyModal 
            isOpen={isOpen}
            closeModal={closeModal}
            openModal={openModal}
          />
        </div>
      </div>

      <div className='px-3 font-Josefin bg-white'>
        <div className="max-w-screen-lg mx-auto text-center py-16 px-5">
          <h1>How we succeed together</h1>
          {/* <p className='max-w-lg mx-auto mb-16 text-2xl'>
            I'll help you set goals, create a plan, and hold you accountable to achieve your health goals.
          </p> */}
          <div>
            <div className='flex flex-row'>
              <div className='flex-1 flex flex-col justify-center text-left'>
                <p className='font-bold'>Identify</p>
                <h2>We start with you</h2>
                <p>
                  First, we'll get to know each other and I'll learn about your health goals.
                  I offer a free 15 minute consultation to see if we're a fit, and then we'll
                  schedule an initial 1 hour session to learn about your likes, dislikes, strengths, weaknesses
                   and goals.
                </p>
                {/* <ul>
                  <li>Free 15 min consultation to see if we're a fit.</li>
                  <li>Initial 1 hour session to learn about your likes, dislikes, and goals.</li>
                </ul> */}
              </div>
              <div className='flex-1'>
                <img src="/429-Daydreaming-of-Food.svg" alt="weight" style={{ margin: 'auto', maxHeight: 350 }} />
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='flex-1'>
                <img src="/148-Under-construction.svg" alt="plan" style={{ margin: 'auto', maxHeight: 350 }} />
              </div>
              <div className='flex-1 flex flex-col justify-center text-left'>
                <p className='font-bold'>Plan</p>
                <h2>We create a plan</h2>
                <p>
                  Next, we'll create a personalized health plan to help you achieve your goals.
                  I'll help you leverage your likes and strengths, and provide solutions you might not have thought of.
                  You'll also have 24/7 access to me via the HeyCoach chat app, and to my library of resources to help you along the way.
                </p>
                {/* <ul>
                  <li>Receive a personalized health plan based on your goals.</li>
                  <li>Follow the plan to make progress towards your goals.</li>
                </ul> */}
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='flex-1 flex flex-col justify-center text-left'>
                <p className='font-bold'>Measure</p>
                <h2>We measure progress</h2>
                <p>
                  Finally, I'll hold you accountable to make progress against your goals. Along with your personalized plan, I provide
                  a schedule of check-ins to stay updated on your progress and make changes based on our collective feedback.
                </p>
                {/* <ul>
                  <li>24/7 chat-based access to me for questions, support and check-ins.</li>
                  <li>Personalized schedule of check-ins to stay updated on your progress and make any changes.</li>
                </ul> */}
              </div>
              <div className='flex-1'>
              <img src="/424-Setting-goals.svg" alt="goals" style={{ margin: 'auto', maxHeight: 350 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-screen-lg mx-auto px-3 font-Josefin'>
        <div className="text-center py-16 px-5">
          <h2>Hear from my clients!</h2>
        </div>
      </div>

      <div className='max-w-screen-lg mx-auto px-3 font-Josefin'>
        <div className="text-center py-16 px-5">
          <h2>My Story</h2>
        </div>
      </div>
    </>
  )
}
export default Index;
