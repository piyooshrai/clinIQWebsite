'use client'
import { useEffect } from 'react'
import { captureIntakeContext } from '@/lib/intake-context'
export default function IntakeContext() {
  useEffect(() => { captureIntakeContext() }, [])
  return null
}
