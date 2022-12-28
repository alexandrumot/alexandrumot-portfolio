import '../styles/globals.css';
import { useState, useEffect } from 'react'
import { ThemeProvider } from "next-themes";
import Loading from '../components/sections/Loading';

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return (
      <Loading />
    );
  }
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
