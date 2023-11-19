"use client"

import { Connection, PublicKey } from "@solana/web3.js"
import { useEffect, useState } from "react"

export default function Home() {
  const conn = new Connection("https://rpc")
  const wallet = "FU3ydCqr66Ksf6rYBM1XzKYEBMV1n9PAnAwQU3QxYxgm"

  const [balance, setBalance] = useState<number>(0)

  useEffect(() => {
    const loadBalance = async () => {
      const balance = await conn.getBalance(new PublicKey(wallet))
      setBalance(balance / 10 ** 9)
    }

    loadBalance()
  })

  return (
    <main>
      <div className="flex gap-2 items-center p-2">
        <span>Wallet:</span>
        <span className="text-red-500 font-bold p-10">{wallet}</span>
        <span>balance:</span>
        <span className="text-red-500 font-bold p-10">{balance} SOL</span>
      </div>
    </main>
  )
}
