import React, { useState } from 'react'
import Count from './components/Count'
import Counter from './components/Counter'
import Modal from './components/Modal'
import Card from './components/Card'
export default function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <Modal/>
      <Card/>
      {/* <Count/> */}
      {/* <Counter/> */}
    </div>
  )
}
