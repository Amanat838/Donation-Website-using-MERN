import React, { useState } from 'react'

const Donate = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [amount, setAmount] = useState("")
    const [disableBtn, setDisableBtn] = useState(false)
    return (
        <section className='donate'>
            <form>
                <div>
                    <img src="/logo.png" alt="logo" />
                </div>
                <div>
                    <label>Express your support for the less fortunate</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter your donation amount (USD)' />
                </div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your message' />
                <button type='submit' className='btn' disabled={disableBtn}>Donate {amount ? `$${amount}` : "$0"}</button>
            </form>
        </section>
    )
}

export default Donate
