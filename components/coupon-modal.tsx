"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, Copy, ExternalLink } from "lucide-react"
import Image from "next/image"

interface CouponModalProps {
  isOpen: boolean
  onClose: () => void
  coupon: {
    id: number
    store: string
    title: string
    description: string
    discount: string
    code: string
    logo?: string
  } | null
}

export function CouponModal({ isOpen, onClose, coupon }: CouponModalProps) {
  const [copied, setCopied] = useState(false)
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, countdown])

  useEffect(() => {
    if (!isOpen) {
      setCountdown(5)
      setCopied(false)
    }
  }, [isOpen])

  const copyToClipboard = () => {
    if (coupon) {
      navigator.clipboard.writeText(coupon.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  if (!coupon) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Your Coupon Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center p-4">
          <div className="mb-4">
            <Image
              src={
                coupon.logo || `/prepladder.jpg?height=300&width=300&text=${coupon.store.substring(0, 2).toUpperCase()}`
              }
              alt={coupon.store}
              width={80}
              height={80}
              className="rounded"
            />
          </div>
          <h3 className="font-bold text-lg mb-2 text-center">{coupon.title}</h3>
          <p className="text-sm text-gray-600 mb-6 text-center">{coupon.description}</p>

          {countdown > 0 ? (
            <div className="w-full flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">{countdown}</div>
              <p className="text-gray-600">Your coupon code will appear in a few seconds...</p>
            </div>
          ) : (
            <>
              <div className="w-full p-4 bg-gray-100 border-dashed border-2 border-gray-300 rounded-md flex items-center justify-between mb-6">
                <span className="font-mono text-lg font-bold">{coupon.code}</span>
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600" onClick={copyToClipboard}>
                  {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
                <Button  variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Go to Store
                </Button>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Use this code at checkout to get {coupon.discount}</p>
                <p className="mt-1">This coupon was last verified and worked for someone.</p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
