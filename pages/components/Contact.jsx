import React, { useRef, useState } from 'react'
import Hero from './Hero'


export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [isFormEmpty, setIsFormEmpty] = useState('');





    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwYGia3v2_hkt_H0Oc-Adq1ATbcjuOdZJqFMNdwweKdcBbbnET1G_PBtoZbjF-148Yo/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        
        setLoading(true)

       
            fetch(scriptUrl, {
                method: 'POST',
                body: new FormData(formRef.current),

            }).then(res => {
                console.log("SUCCESSFULLY SUBMITTED")
                setIsFormEmpty("Submitted!")
                setLoading(false)
            })
                .catch(err => console.log(err))
        
       
        setName('');
        setSubject('');
        setCity('');
        setPhone('');
        setEmail('');
        setMessage('');
        
    }


    return (

        <div id='contact' className='max-w-[1240px] m-auto p-4 h-screen'>
            <h1 className='text-2xl font-bold text-center p-4'>Let&apos;s work together</h1>
            <form
                method="post"
                action='https://script.google.com/macros/s/AKfycbz0Jrlg6uSsmSd4UdZzaRjjOPGRkJOQCtkMp8htB2xlfRYuLqiaDCuhrcbb1JF31hEy/exec'
                ref={formRef}
                onSubmit={handleSubmit}
                name="google-sheet"
                className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input
                        className='border shadow-lg p-3'
                        name="name"
                        type="text"
                        required
                        placeholder='Name'
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        className='border shadow-lg p-3'
                        name="email"
                        type="email"
                        required
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='grid grid-cols-2 gap-2'>
                <input
                    className='border shadow-lg p-3 w-full my-2'
                    name="city"
                    type="text"
                    required
                    placeholder='Address'
                    value={city}
                    onChange={e => setCity(e.target.value)} />
                    <input
                    className='border shadow-lg p-3 w-full my-2'
                    name="phone"
                    type="number"
                    required
                    placeholder='Phone Number'
                    value={phone}
                    onChange={e => setPhone(e.target.value)} />
</div>
                <input
                    className='border shadow-lg p-3 w-full my-2'
                    name="subject"
                    type="text"
                    placeholder='How can we help?'
                    value={subject}
                    onChange={e => setSubject(e.target.value)} />
                     <input
                    className='border shadow-lg p-3 w-full my-2'
                    name="policy"
                    type="text"
                    placeholder='Insurance Policy or Company'
                    value={subject}
                    onChange={e => setSubject(e.target.value)} />
                <textarea
                    className='border shadow-lg p-3 w-full'
                    name="message"
                    type='text'
                    cols="30" rows="10"
                    placeholder="Description"
                    value={message}
                    onChange={e => setMessage(e.target.value)} />
                <p
                    className="p-4 text-red-600">{isFormEmpty}</p>
                <input
                    className='border shadow-lg p-3 w-full mt-2 hover:shadow-black'
                    value="Send"
                    type='submit'
                />
            </form>
        </div>


    )

}

export default Form