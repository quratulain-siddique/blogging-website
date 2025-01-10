import { Fragment, useState } from "react";

function ContactPage(){
    const [enteredEmail, setEmail] = useState('');
    const [enteredName, setName] = useState('');
    const [enteredMessage, setMessage] = useState('');
    function sendHandler(event){
        event.preventDefault();
        fetch ('/api/contact', {
            method:'POST',
            body: JSON.stringify({
                email:setEmail,
                name:setName,
                message: setMessage
            }), 
            headers:{
                'Content-Type':'application/json',
            },
        });
    }
    return (
        <Fragment>
            <title>Contact Page</title>
    <div className='flex flex-col justify-center items-center p-10'>
    <h1 className="font-extrabold text-3xl p-3">How may I help you?</h1>
        
        <form className="flex flex-col justify-center bg-gray-200 m-5 p-5">
            <div className="flex flex-row">
                <div><label  htmlFor="email" className="p-2 font-extrabold">
                Your Email:</label>
            <input id="email" type="email" required value={enteredEmail} onChange={(event)=> setEmail(event.target.value)} className="bg-gray-100 h-8 m-3 font-bold "/>
</div>
        <div>
            <label htmlFor="name" className="p-2 font-extrabold">Your Name:</label>
            <input id="name" type="text" required value={enteredName} onChange={(event)=> setName(event.target.value)} className="bg-gray-100 h-8 m-3  font-bold "/>
</div>
            
            </div>
           

            <label htmlFor="messge " className="p-2 font-extrabold">Message:</label>
            <textarea id="message"  rows={7}  required value={enteredMessage} onChange={(event)=> setMessage(event.target.value)}  className="bg-gray-100 ml-2 mr-2 mb-2 font-bold "/>

            <button className="bg-purple-800 font-bold text-purple-100 p-3 m-2 ml-auto">Send Message</button>
        </form>
        </div>
        </Fragment>
    
    );
}
export default ContactPage;