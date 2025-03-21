// // AuthForm.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { useCartContext } from '../../store/ContextStore';
// // import { auth } from './firebase'; // Import Firebase auth
// // import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// // const conf={ apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY}
// const conf=import.meta.env.VITE_API_KEY
// function AuthForm() {
//     const navigate = useNavigate()
//     console.log(conf)
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(true);
//   const [error, setError] = useState('');
//   const [isloading, setIsloading]= useState(false)
//   const cartcnxt =useCartContext()
//   const handleSubmit = (e) => {
//     setError("")
//     let url=null
//     e.preventDefault();
//     setIsloading(true)

//     if (isSignUp) {
//       // Sign up user
//       url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${conf}`
      
//     } else {
//         url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${conf}`
//       // Sign in user
//     //   fetch(url,{
//     //     method:"POST",
//     //         body:JSON.stringify({
//     //             email: email,
//     //             password: password,
//     //             returnSecureToken: true
//     //         }),
//     //         headers:{
//     //             "Content-Type":"application/json"
//     //         }
//     //   })
//     //     .then((res) => {
//     //         setIsloading(false)
//     //         navigate("home")
//     //       console.log('User signed in:', res.ok);
//     //     //   alert('Logged in successfully!');
//     //     })
//     //     .catch((error) => {
//     //         setIsloading(false)
//     //       setError(error.message);
//     //     });
//     }
//     fetch(url,
//         {
//             method:"POST",
//             body:JSON.stringify({
//                 email: email,
//                 password: password,
//                 returnSecureToken: true
//             }),
//             headers:{
//                 "Content-Type":"application/json"
//             }
//         }
//       )
//         .then((res) => {
//             setIsloading(false)
//             // navigate("")
//           console.log('User signed up:', res.ok);
//           if(res.ok){
//             setEmail("")
//             setPassword("")
//             return res.json()
//           }else{
//             res.json().then(data=>{
//                 throw new Error(data.error.message)
                
//             })
//             // throw new Error("Auth Fail")
//           }
//         //   alert('Account created successfully!');
//         }).then(data=>{
//           cartcnxt.login(data.idToken)
//             console.log(data);
            
//         })
//         .catch((error) => {
//           setError(error.message);
//         });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-sky-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//         <h2 className="text-center text-2xl font-semibold text-sky-600 mb-6">
//           {isSignUp ? 'Sign Up' : 'Sign In'}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
//               required
//             />
//           </div>

//           {isloading && "Sending data....."}
//           {!isloading && <button
//             type="submit"
//             className="w-full py-3 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition duration-200"
//           >
//             {isSignUp ? 'Sign Up' : 'Sign In'}
//           </button>}
//         </form>

//         {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

//         <div className="mt-4 text-center">
//           <button
//             onClick={() => setIsSignUp(!isSignUp)}
//             className="text-sky-500 hover:underline text-sm"
//           >
//             {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../store/ContextStore';

// Ensure API key is available
const API_KEY = import.meta.env.VITE_API_KEY || '';

function AuthForm() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const cartContext = useCartContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const url = isSignUp
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Authentication failed');
      }

      // ✅ Save token and redirect
      cartContext.login(data.idToken);
      localStorage.setItem("token",data.idToken)
      setEmail('');
      setPassword('');
      // navigate('',{ replace: true });
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (cartContext.islogged) {
        navigate('/', { replace: true });
    }
}, [cartContext.islogged, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-sky-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-center text-2xl font-semibold text-sky-600 mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>

          {isLoading ? (
            <p className="text-center text-gray-600">Processing...</p>
          ) : (
            <button
              type="submit"
              className="w-full py-3 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition duration-200"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          )}
        </form>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sky-500 hover:underline text-sm"
          >
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
