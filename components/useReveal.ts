'use client'

import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight
        const elementTop = el.getBoundingClientRect().top
        if (elementTop < windowHeight - 100) {
          el.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', reveal)
    reveal() // run on mount
    return () => window.removeEventListener('scroll', reveal)
  }, [])
}
