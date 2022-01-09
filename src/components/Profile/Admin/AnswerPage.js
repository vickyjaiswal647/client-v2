import { Button, TextField } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify'
import React,{useState} from 'react'
import './AnswerPage.css'

const AnswerPage = () =>{
    const [enable,setEnable] = useState()
    const [score,setScore] = useState(10)
    const [quesList,setQuesList] = useState([
        {Ques: "", Ans: "", quesType: 1},
        {Ques: "", Ans: "", quesType: 2}
    ])

    const getQuestion = async() => {
        // const response = await fetch(`/users/student/attempt-test/${localStorage.getItem('stuId')}`,{
        //     mode:'cors',
        //     headers : {
        //         "Content-Type" : "application/json",
        //         'Accept': 'application/json',
        //         'x-auth-token':localStorage.getItem('token')
        //     },
        // });
        // const data = await response.json();
        // if(data.status.code === 200){
        //     setQuesList(data.info);
        //     setScore(data.info);
        // } else {
        //     setEnable(false);
        //     diffToast(data.status.message)
        //     setTimeout(function(){ history.push('/profilePage'); }, 3000);
        // }
    }
    
    // const diffToast = (message) => {
    //     toast.success(message,{
    //         position:"top-right",autoClose: 3000
    //     })
    // }

    const handleEditBUtton = () =>{
        setEnable(!enable);
        //const testScore = score;
        // const response = await fetch(`/users/student/attempt-test/${localStorage.getItem('stuId')}`,{
        //     method:'POST'
        //     mode:'cors',
        //     headers : {
        //         "Content-Type" : "application/json",
        //         'Accept': 'application/json',
        //         'x-auth-token':localStorage.getItem('token')
        //     },
        //     body:JSON.stringify({testScore})
        // });
        // const data = await response.json();
        // if(data.status.code === 200){
        //     diffToast(data.state.message);
        //     setQuesList(data.info);
        //     setScore(data.info);
        // } else {
        //     setEnable(false);
        //     diffToast(data.status.message)
        //     setTimeout(function(){ history.push('/profilePage'); }, 3000);
        // }

    }

    const changeScore = (e) =>{
        setScore(e.target.value);
        
    }

    React.useEffect(()=>{
        getQuestion();
        //console.log()
    },[])
    return(
        <div className='ansContainer'>
            <div className='editScore'>
                <TextField disabled={!enable} onChange={changeScore} value={score} label="Score"></TextField>
                <Button style={{height:"35px", marginTop:"10px", marginLeft:"5px"}} type='button' onClick={handleEditBUtton} variant='contained' color={!enable? "primary":"secondary"}>{!enable ? "Edit Score": "Save Score"}</Button>
            </div>
            {quesList.map( data =>{
                return(
                    <div className='questions'>
                        <div className='quesType'>
                            { data.quesType === 1 ? <p>Short Answer Type</p> : <p >Long Answer Type</p> }
                        </div>
                        <h2>Question:</h2>
                        <p className='quesPara'>{data.Ques}</p>
                        <hr/>
                        <h2>Answer:</h2>
                        <p className='ansPara'>{data.Ans}</p>
                    </div>
                )
            })}            
        </div>
    )

}

export default AnswerPage