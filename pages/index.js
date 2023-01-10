import Link from 'next/link'

// import .env file
// import '../.env';


// const Index = () => (
//   <div>
//     Hello World.{' '}
//     <Link href="/about">
//       <a>About</a>
//     </Link>
//   </div>
// )

/**
 * 
 * form css:
 * "display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    margin: auto;"
 */
export async function getStaticProps() {
  console.log(process.env.SS_TWO)
  console.log(process.env.NEXT_PUBLIC_SS_THREE)
  return { props: { name: 'John Doe' }};
}

function validateFormWithJS(event) {
  event.preventDefault();
  console.log('validateFormWithJS()', { event });
  const email = event.target[0].value;
  fetch('/api/waitlist', {
    method: 'POST',
    body: JSON.stringify({ email })
  })
}

const Index = () => (
  <div className="container">
      <h1 style={{fontFamily: 'Georgia'}}>
        Get Personalized
        <br />
        On Demand
        <br />
        Chat-Based
        <br />
        Health Coaching
      </h1>
      {/* circular profile pic */}
      <img src="/prathna.png" alt="profile pic" style={{borderRadius: '50%', width: '150px', height: '150px'}} />
      <h2 style={{fontFamily: 'Georgia'}}>Prathna Patel</h2>

      <p>Sign up to receive updates</p>
      <form className="verticalForm" onSubmit={validateFormWithJS}>
        <input type="email" placeholder="Enter email address" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
export default Index;
