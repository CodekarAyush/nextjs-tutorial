'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
const route = useRouter()
  const apple =(s)=>{
    alert(s)
  }
  return (
    <main className={styles.main}>
      <User name="ayush" />
      <h1>Home Page</h1>
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to About page</Link>
      <Link href="/about/about-students">Go to About Students</Link>
      <button onClick={()=>{route.push('/login')}}>Login</button>
      <button onClick={()=>apple('fuit')}>Click </button>

    </main>
  );
}

const User = ({ name }) => {
  return <h1>User name is {name} </h1>;
};
