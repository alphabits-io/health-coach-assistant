import Link from 'next/link';
import { useState, useEffect } from 'react';
import MyModal from '../components/Modal';
import SignupModal from '../components/SignupModal';

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
  let [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  // let [email, setEmail] = useState('');

  // async function handleAddToWaitlist(event) {
  //   const success = await validateFormWithJS(event);

  //   if (success) {
  //     // clearEmail();
  //     openConfirmationModal();
  //   }
  // }

  function handleSignUpClick() {
    openSignupModal();
  }

  function closeModal() {
    setIsOpen(false)
  }

  // function openConfirmationModal() {
  //   setIsOpen(true)
  // }

  function openSignupModal() {
    setSignupModalIsOpen(true);
  }

  function closeSignupModal() {
    setSignupModalIsOpen(false);
  }

  // function handleUserInput(e) {
  //   setEmail(e.target.value);
  // };

  // function clearEmail() {
  //   setEmail('');
  // }

  useEffect(() => {
    const footer = document.querySelector('footer');
    const button = document.querySelector('.main-cta-button');
    const observer = new IntersectionObserver(callback);

    observer.observe(button);

    function callback(entries) {
      if (!entries[0].isIntersecting) {
        footer.classList.add('fixed');
        footer.classList.remove('hidden');
      } else {
        footer.classList.remove('fixed');
        footer.classList.add('hidden');
      }
    }

    return () => {
      observer.unobserve(button);
    }

  }, []);

  return (
    <>
    <div className='flex flex-col h-screen justify-between'>
      <header className="sticky top-0 z-30 w-full p-6 bg-white sm:px-4 shadow font-Josefin">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
            <Link href="/">
                <span className="text-2xl font-bold" style={{ color: '#642e59' }}>HeyCoach</span>
            </Link>
            <div className="flex items-center space-x-1">
                {/* <ul className="space-x-2 inline-flex">
                    <li>
                      <button className="border px-4 py-3 text-sm md:text-base md:px-8 md:py-4"
                        style={{
                          background: '#f4f4f4',
                          padding: '14 20px',
                          borderRadius: '4px',
                        }}
                        onClick={handleSignUpClick}
                      >
                        Book a Free 15-Minute Call
                      </button>
                    </li>
                </ul> */}
                {/* <div className="inline-flex md:hidden">
                    <button className="flex-none px-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div> */}
            </div>
        </div>
      </header>

      <main className='pb-40 md:pb-16'>
        <div className='max-w-screen-lg mx-auto px-3 font-Josefin h-screen'>
          <div className="container px-5 py-5 md:py-14">
            <h1 className='font-black text-5xl md:text-6xl'>
              Too busy to get healthy?
            </h1>
            <p className='max-w-md mx-auto font-extrabold md:text-2xl md:mb-8 md:max-w-lg'>
              Discover the tools to improve your health without adding extra time to your busy schedule
            </p>
            <img src="/prathna.png" alt="profile pic" className='w-40 md:w-48' style={{ borderRadius: '50%', margin: 'auto' }} />

            <p className='max-w-md mx-auto text-sm mt-1 md:text-base md:mt-3 md:mb-8'>
              I'm Prathna Patel, a certified integrative health coach and I help people like you achieve their health goals.
            </p>

            <button className="border px-8 py-4 text-sm md:text-base md:px-8 md:py-4 main-cta-button text-white rounded font-bold"
              style={{
                background: '#642e59',
              }}
              onClick={handleSignUpClick}
            >
              Book a Free 15-Minute Call
            </button>
            
            <MyModal 
              isOpen={isOpen}
              closeModal={closeModal}
            />
            <SignupModal
              isOpen={signupModalIsOpen}
              closeModal={closeSignupModal}
              validateFormWithJS={validateFormWithJS}
            />
          </div>
        </div>

        <div className='px-5 font-Josefin bg-slate-800'>
          <div className="max-w-screen-lg mx-auto text-center py-5 px-5 md:py-14">
            {/* <h1 className='text-slate-300 font-black'>What is Health Coaching?</h1> */}
            <p className='max-w-md mx-auto my-5 text-slate-300 md:text-xl md:max-w-lg'>
              Health coaching is a partnership between you and me to help you achieve your health goals.
              I help you identify your goals, create a plan to achieve them, and provide support along the way.
            </p>
          </div>
        </div>

        <div className='px-3 font-Josefin bg-white'>
          <div className="max-w-screen-lg mx-auto text-center pt-16 px-5">
            <h1 className='font-black mb-8'>How it Works</h1>
            <div>
              <div className='sm:flex sm:flex-row sm:-mb-24'>
                <div className='flex-1 flex flex-col justify-center text-left'>
                  <p className='text-sky-800 mb-1 font-black'>Identify</p>
                  <h2 className='mb-1'>We start with you</h2>
                  <p>
                    First, we'll get to know each other and I'll learn about your health goals.
                    I offer a free 15 minute consultation to see if we're a fit, and then we'll
                    schedule an initial 1 hour session to learn about your likes, dislikes, strengths, weaknesses
                    and goals.
                  </p>
                </div>
                <div className='flex-1 -mt-10 sm:mt-0'>
                  <img src="/429-Daydreaming-of-Food.svg" alt="weight" style={{ margin: 'auto', maxHeight: 450 }} />
                </div>
              </div>

              <div className='sm:flex sm:flex-row sm:-mb-24'>
                <div className='sm:order-2 flex-1 flex flex-col justify-center text-left'>
                  <p className='text-sky-800 mb-1 font-black'>Plan</p>
                  <h2 className='mb-1'>We create a plan</h2>
                  <p>
                    Next, we'll create a personalized health plan to help you achieve your goals.
                    I'll help you leverage your likes and strengths, and provide solutions you might not have thought of.
                    You'll also have 24/7 access to me via the HeyCoach chat app, and to my library of resources to help you along the way.
                  </p>
                </div>
                <div className='sm:order-1 flex-1 -mt-10 sm:mt-0'>
                  <img src="/148-Under-construction.svg" alt="plan" style={{ margin: 'auto', maxHeight: 450 }} />
                </div>
              </div>

              <div className='sm:flex sm:flex-row'>
                <div className='flex-1 flex flex-col justify-center text-left'>
                  <p className='text-sky-800 mb-1 font-black'>Measure</p>
                  <h2 className='mb-1'>We measure progress</h2>
                  <p>
                    Finally, I'll hold you accountable to make progress against your goals. Along with your personalized plan, I provide
                    a schedule of check-ins to stay updated on your progress and make changes based on our collective feedback.
                  </p>
                </div>
                <div className='flex-1 -mt-10 sm:mt-0'>
                  <img src="/424-Setting-goals.svg" alt="goals" style={{ margin: 'auto', maxHeight: 450 }} />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='max-w-screen-lg mx-auto px-3 font-Josefin relative'>
          <img src="/prathna-about.png" alt="about pic" className='sm:hidden absolute inset-0 h-full w-full object-cover' />
          <div className="sm:hidden absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="relative text-center py-16 px-5">
            <h1 className='text-white sm:text-slate-600 font-black'>My Story</h1>
            <div className="sm:flex sm:flex-row">
              <div className="flex-1 flex flex-col justify-center text-left">
                <p className='text-white sm:text-slate-600'>
                  I went to grad school to become a physician assistant because I’m interested in helping people live long and healthy lives. But while I was there what I witnessed shocked me - patients were barely managing their chronic disease and our medical system faces systemic barriers that make it impossible to support holistic wellness.
                </p>
                <p className='text-white sm:text-slate-600'>
                  <b>At the same time I was going through my own personal wellness journey that taught me that true change begins from within, from adjusting our behaviors and mindsets and believing we are deserving of this healthful life.</b>
                </p>
                <p className='text-white sm:text-slate-600'>
                  Those experiences motivated me to explore the world beyond traditional clinical care. I transitioned into healthcare management, and then into health tech, and finally into my career and passion now - Integrative Health Coaching.
                </p>
                <p className='text-white sm:text-slate-600'>
                  I’m excited about being able to harness my unique experience in clinical science and health behavior change to build a toolbox that will assist you in reaching and maintaining your health goals. So let’s create a space of non-judgement where you can achieve a life of healthful balance on your own terms!
                </p>
              </div>
              <div className='hidden sm:flex flex-1 justify-center'>
                <img src="/prathna-about.png" alt="about pic" style={{ height: 550 }} />
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-lg mx-auto px-3 font-Josefin'>
          <div className="text-center pt-16 px-5">
            {/* <h1>Exceptional value, simple pricing</h1> */}
            <h1 className='font-black'>Invest in your health today</h1>
            <h3>Not sure yet? Book a free 15 minute consultation to learn more.</h3>
            {/* <button className="border px-4 py-3 mb-8 md:px-8 md:py-4"
                          style={{
                            background: 'white',
                            padding: '14 20px',
                            borderRadius: '4px',
                          }}
              onClick={handleSignUpClick}>
                Book a Free 15-Minute Call
            </button> */}

            <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8"> {/* dark:bg-gray-800 dark:border-gray-700 */}
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Monthly plan</h5>
              <div className="flex items-baseline text-gray-900 dark:text-zinc-900">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">50</span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" style={{ color: '#642e59' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Unlimited chat via HeyCoach app</span>
                  </li>
                  <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" style={{ color: '#642e59' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">1 hour intro session</span>
                  </li>
                  <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" style={{ color: '#642e59' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Personalized plan custom made for you</span>
                  </li>
                  <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" style={{ color: '#642e59' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      {/* <span className="text-base font-normal leading-tight text-gray-500">Personalized check-in schedule for feedback</span> */}
                      <span className="text-base font-normal leading-tight text-gray-500 text-left">Personalized check-in schedule to measure progress</span>
                  </li>
                  <li className="flex space-x-3">
                      {/* <!-- Icon --> */}
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5" style={{ color: '#642e59' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      {/* <span className="text-base font-normal leading-tight text-gray-500">Personalized check-in schedule for feedback</span> */}
                      <span className="text-base font-normal leading-tight text-gray-500 text-left">Schedule in-person sessions any time - $50 / half hour</span>
                  </li>
              </ul>
              <a type="button" target="_blank" href="https://buy.stripe.com/fZecQa2aO0lygbm145" style={{ background: '#642e59' }} className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</a>
            </div>

          </div>
        </div>
      </main>

      <footer className='hidden h-16 flex bg-white w-screen bottom-0 md:hidden'>
        <button className="border w-screen px-4 py-3 text-sm md:text-base md:px-8 md:py-4 main-cta-button text-white font-bold rounded"
          style={{
            background: '#642e59',
          }}
          onClick={handleSignUpClick}
        >
          Book a Free 15-Minute Call
        </button>
      </footer>
    </div>
    </>
  )
}
export default Index;


//  bg-no-repeat bg-cover bg-center bg-[url('/prathna-about.png')] sm:bg-none