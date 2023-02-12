const express = require("express");
const router = new express.Router();
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const Question = require("../models/questionSchema");
const Answer = require("../models/answerSchema");


//signup
router.post("/signup",async(req,res)=>{
    console.log(req.body);

    const {name,email,password,cpassword} =req.body;
    if(!name||!email||!password||!cpassword)
    {
        res.status(422).json({error:"fill all field"});

    };
    try{
        const preuser = await USER.findOne({email:email});
        if(preuser){
            res.status(422).json({error:"this user is already present"})
        }
        else if(password !== cpassword){
            res.status(422).json({error:"the password doesn't match"})
        }
        else{
            const finaluser =new USER({
                name,email,password,cpassword
            });

            const storedata =await finaluser.save();
            res.status(201).json(storedata);
        }

    }
    catch(error){

    }
});
    //signin
    router.post("/signin",async(req,res)=>{
        const {email,password} = req.body;
        if(!email || !password){
            res.status(400).json({error:"fill all the field"})
        };
        try{
            const userlogin = await USER.findOne({email:email})
            console.log(userlogin+"user value");
    
            if(userlogin){
                const isMatch = await bcrypt.compare(password,userlogin.password);
                //console.log(isMatch);
                if(!isMatch){
                    res.status(400).json({error:"invalid details"})
    
                }else{
                    res.status(201).json(userlogin);
                }
            }
        }catch(error){
             res.status(400).json({error:"invalid details"})
           
    
        }
    });
//ask question
router.post("/askquestion",async(req,res)=>{
    console.log(req.body);
    const currentDate = new Date();

    const {title,desc,tags} =req.body;
    if(!title ||!desc ||!tags)
    {
        res.status(422).json({error:"fill all field"});

    };
    try{
        const preuser = await Question.findOne({title:title});
        if(preuser){
            res.status(422).json({error:"this title is already present"})
        }
        else{
            const finaluser =new Question({
                title,desc,tags
            });

            const storedata =await finaluser.save();
            res.status(201).json(storedata);
        }




    }
    catch(error){
        
    }
});

router.get("/question",async(req,res) =>{
    try{
        const allquestion = await Question.find({});
        res.send({status:"ok",data:allquestion});
    }
    catch(error){
        console.log(error)
    }
});

router.get("/fullquestion/:_id",async(req,res)=>{
    try{
        const {_id} = req.params;
        //console.log(title);

        const fullquestion = await Question.findOne({_id:_id});
        console.log(fullquestion +"full question");

        res.status(201).json(fullquestion);
    }
    catch(error){
        consol.log(400).json(fullquestion);
        console.log("error" + error.message);

    }
});


router.post("/postanswer",async(req,res)=>{
    console.log(req.body);

    const {answer,questionid} =req.body;
    if(!answer)
    {
        res.status(422).json({error:"fill all answer"});

    };
    try{
        const preuser = await Answer.findOne({answer:answer});
        if(preuser){
            res.status(422).json({error:"this answer is already present"})
        }
        else{
            const finaluser =new Answer({
                answer,questionid
            });

            const storedata =await finaluser.save();
            res.status(201).json(storedata);
        }

    }
    catch(error){
        
    }
});

router.get("/postanswer/:questionid",async(req,res) =>{
    try{
        const {questionid} = req.params;
        const allanswer = await Answer.find({questionid:questionid});
         //console.log(allanswer +"all answer for this ");

        res.status(201).json(allanswer);
    }
    catch(error){
        console.log(error);
    }
});

router.get("/fullanswer",async(req,res) =>{
    try{
        const fullanswer = await Answer.find({});
        console.log(fullanswer +"fullanswer");
        res.send({status:"ok",data:fullanswer});
    }
    catch(error){
        console.log(error)
    }
});





module.exports = router;