const userModel = require("../models/users.model")


let create = async (req, res) =>{
    try{
        console.log('User Creating')
        let {name, email} = req.body

        const emailVerification = await userModel.findOne({
            email,
          });

          if (emailVerification) {
            return res.status(200).json({
              success: false,
              message: "User Exist already",
            });
        }

        let user = new userModel({ // returns stored data from mongodb
            name: name,
            email: email
        })

        console.log("callback from model: " + user)
        await user.save()
        res.status(201).json({ message: "User saved successfully!" });

        console.log('User Created')
    }
    catch (error) {
        res.status(500).json({ error: "Failed to save user" + error });
        console.log('Error creating user')
    } 
}

// app.post('/user', (req, res) =>{
//     res.send('User Created')
//     let {name, email} = req.body
//     let user = new userModel({
//         name: name,
//         email: email
//     })
//     console.log(user)
//     user.save()
//     .then(() => {
//         console.log('User Created')
//     })
//     .catch((err) => {
//         console.log('Error creating user')
//     })
// })

let read = async (req, res) => {
    try{
       const data = await userModel.find()
       res.send(data)
    }
    catch(err) {
        res.send('Error fetching data')
    }
}

// app.get('/user/data', (req, res) => {
//     userModel.find()
//     .then((data) => {
//         res.send(data)
//     })
//     .catch((err) => {
//         res.send('Error fetching data')
//     })
// })

let del = async (req, res) => {
    try{
        let id = req.params.id
       // await userModel.findByIdAndDelete(id)
         await userModel.deleteOne({_id: id})
        res.send({
            status: 1,
            message: 'User deleted successfully'
        })
    }
    catch(err){
        res.send('Error deleting user')
    }
}

let update = async (req, res) => {
    try{
        let id = req.params.id
        let {name, email} = req.body
        await userModel.updateOne({_id: id}, {name: name, email: email})
        res.send({
            status: 1,
            message: 'User updated successfully'
        })
    }
    catch(err){
        res.send({
            status: 0,
            message: 'User update Failed'
        })
    }
}

module.exports = {create, read, del, update}