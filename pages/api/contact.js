function contacthandler(req, res){
    if (req.method === 'POST')
    {
        const {email, name, message} = req.body;
        if(!email || !name || !message
            || email.trim() === ''
            || name.trim() === ''
            || message.trim() === ''
            || !email.includes('@')
        )
        {
            res.status(422).json({message: 'Data entered is not correct.'});
            return;
        }
        const newMessage = {
            email, name, message
        };
        console.log(newMessage);
        res.status(422).json({message:'success'});
    }
}
export default contacthandler;