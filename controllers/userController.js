export const registerUser= (req,res) =>{
    const { name}= req.body;
    return res.status(200).json({
        status:'success',
        data:`user ${name}'s dummy created`
    })
}