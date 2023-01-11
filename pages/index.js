// import Link from 'next/link';
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
    <div className="container">
      <h1 className="font-bold font-serif leading-tight">
        Personalized
        <br />
        On Demand
        <br />
        Chat-Based
        <br />
        Health Coaching
      </h1>
      <img src="/prathna.png" alt="profile pic" style={{ borderRadius: '50%', width: '150px', height: '150px', margin: 'auto' }} />
      <p className="font-serif mt-1">👋🏼 Hi, I'm Prathna Patel 👋🏼</p>

      <p className='text-sm text-gray-500'>Sign up to receive updates and save your spot. Seats are limited.</p>
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
  )
}
export default Index;
