import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function SignupModal({ isOpen, closeModal, validateFormWithJS }) {
    let [email, setEmail] = useState('');
    let [didSubmitSignupForm, setDidSubmitSignupForm] = useState(false);

    function handleUserInput(e) {
        setEmail(e.target.value);
    };

    function clearEmail() {
        setEmail('');
    }

    async function handleAddToWaitlist(event) {
        const success = await validateFormWithJS(event);

        if (success) {
            clearEmail();
            setDidSubmitSignupForm(true);
        }
    }
    return (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 py-12 md:py-12 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-center font-black"
                      >
                        You'll get an email with a link to book your free 15 minute consultation.
                      </Dialog.Title>
                      
                        {didSubmitSignupForm ? (
                            <>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                      Check your inbox for a link to book a free 15 minute consultation.
                                    </p>
                                </div>
                
                                <div className="mt-4">
                                    <a
                                    //   type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent cursor-pointer text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                    >
                                    OK!
                                    </a>
                                </div>
                            </>
                        ) : (
                            <div className="mt-2">
                                <form className="verticalForm" onSubmit={(event) => handleAddToWaitlist(event)}>
                                    <input type="email" placeholder="Enter email address" value={email} onChange={handleUserInput} />
                                    <button type="submit">Sign Up</button>
                                </form>
                            </div>
                        )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )
}