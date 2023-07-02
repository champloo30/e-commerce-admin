'use client'

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/useStoreModal"
import { useEffect } from "react"



export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className='p-20'>
      Root Page
    </div>
  )
}
