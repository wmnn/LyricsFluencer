import React, {useState, useEffect} from "react";
import {AiOutlineMenu} from "react-icons/ai" //IONIICONS
import { useRouter } from "next/router";
import Link from "next/link";

import {auth} from '../src/util/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'

const Header = () => {
    const router = useRouter()
    const [menu, setMenu] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)

    const handleNavigate = (path) => {
        if (path === "pricing") {
            router.push("/pricing")
        }else if (path == "login"){
            router.push("/login")
        }
        setMenu(false)
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null);
            }
        })
            return () => { //on Unmount this will be called
                listen();
            }
        }, []);

        const userSignOut = () => {
            signOut(auth).then(() => {
                console.log('Signed out')
            }).catch(error => console.log(error))
        }

    return (
        <div className="flex flex-row justify-around items-center p-8">
            <div className="grow basis-0">

            </div>
            { 
                currentUser? <>               
                <div className="grow basis-0 flex flex-col items-center text-center">
                <h1 className='text-4xl font-bold'>LyricsFluencer</h1>
                <h2 className='text-2xl'>Learn lanugages with music on IOS</h2>
                </div>
                </> : <>
                <div className="grow basis-0 flex flex-col items-center hover:cursor-pointer text-center" onClick={() => router.push("/")}>
                <h1 className='text-4xl font-bold'>LyricsFluencer</h1>
                <h2 className='text-2xl text-center'>Learn lanugages with music on IOS</h2>
                </div>
                </>

            }
            
            <div className="grow basis-0 flex justify-center">
                <AiOutlineMenu className="hover:cursor-pointer" size="48" onClick={() => setMenu((prev) => !prev)}/>
            </div>
            {

                menu == true ? <div className="absolute h-full bg-white w-[100%] top-[-100%] translate-y-[100%] transition-all transform text-black">
                    <div className="flex flex-row justify-around items-center p-8">
                        <div className="grow basis-0">
                        </div>
                        <div className="grow basis-0 text-white">
                            <h1 className='text-6xl font-bold'>LyricsFluencer</h1>
                            <h2 className='text-2xl'>Learn lanugages with music on IOS</h2>
                        </div>
                        <div className="grow basis-0 flex justify-center">
                            <AiOutlineMenu className="hover:cursor-pointer" size="48" onClick={() => setMenu((prev) => !prev)}/>
                        </div>
                    </div>
                        <ul className="flex flex-col items-center text-2xl space-y-8">
                            {
                                currentUser? <>
                                    <li className="hover:cursor-pointer" onClick={() => {
                                        router.push("/settings")
                                        setMenu(false)
                                    }}>Settings</li>
                                    <li className="hover:cursor-pointer" onClick={() => {
                                        userSignOut();
                                        router.push("/")
                                        setMenu(false)
                                    }}>Logout</li>
                                </>: <>
                                    {/* <li className="hover:cursor-pointer" onClick={() => handleNavigate("pricing")}>Pricing</li> */}
                                    <li className="hover:cursor-pointer" onClick={() => handleNavigate("login")}>Login</li>
                                </>
                            }
                        </ul>
                
            </div>    :""
            }
        </div>
    )
}
  
const Footer = () => {
  return (
    <div>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
    </div>
  )
}
  
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
      <div className='flex justify-center space-x-8 h-8 mt-24 mb-4'>
        <Link href="/imprint">Imprint</Link>
        <Link href="/terms">Terms and Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
    </div>
    </>
  )
};
  
export default Layout;