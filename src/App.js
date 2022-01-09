import React, {useState} from 'react'
import './App.css';
import Header from './components/Header/Header'
import Login from './components/form/login';
import SignUp from './components/form/signup';
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import StreamPage from './components/Body/StreamPage/groupCard';
import SemesterPage from './components/Body/SemesterPage/groupOfSemester'
import CseSem1Sub from './components/Body/SemesterSubject/CSEsem1/cseSem1'
import Tutorialpage from './components/Body/SemesterSubject/CSEsem1/tutorialpage'
import ProfilePage from './components/Profile/ProfilePage'
import Mcq from './components/Profile/Users/Mcq'
import Score from './components/Profile/Users/score'
import ActivateTest from './components/Profile/Admin/activate'
import CreateQuestion from './components/Profile/Admin/createQuestion'
import Result from './components/Profile/Admin/result1'
import UploadVideo from './components/Profile/Admin/uploadVideo'
import CreateTest from './components/Profile/Admin/createTest'
import VideoTutorials from './components/Body/SemesterSubject/videoTutorials/groupVideoCard'
import CreateSubject from './components/Profile/Admin/createSubject'
import CreateAdmin from './components/Profile/Admin/createAdmin'
import Articles from './components/Body/Post/posts'
import PublicNewsFeed from './components/Profile/Admin/publicNewsfeed'
import AdminNewsFeed from './components/Profile/Admin/adminNewsfeed'
import ReviewArticles from './components/Profile/Admin/approveArticle'
import CreateArticle from './components/Profile/Users/Article'
import StudentList from './components/Profile/Admin/StudentList';
import AnswerPage from './components/Profile/Admin/AnswerPage';


const App = () => {

    const [isLogin, setIsLogin] = useState(localStorage.getItem("token")?true:false);
    const [userId,setUserId] = useState('');
    const [adminId,setAdminId] = useState('');
    console.log(adminId);

    return (
        <div className = 'App'>
            <Router>
                <Header state = {isLogin} changed = {setIsLogin} />
                <Switch>
                    <Route path = "/" exact component = {StreamPage}/>
                    <Route path = '/login' component = {() => <Login changed = {setIsLogin} />} />
                    <Route path = "/signup" component={SignUp}/>
                    <Route path = '/cseSem' component={SemesterPage}/>
                    <Route path = '/cseSem1Sub' component={CseSem1Sub}/>
                    <Route path = '/tutorialPage' component={Tutorialpage}/>
                    <Route path = "/profilePage" component={ProfilePage}/>
                    <Route path = '/mcq' component={Mcq}/>
                    <Route path = '/score' component = {Score}/>
                    <Route path = '/activateTest' component = {ActivateTest}/>
                    <Route path = '/createQuestion' component = {CreateQuestion}/>
                    <Route path = '/createTest' component = {CreateTest}/>
                    <Route path = '/result' component = {Result}/>
                    <Route path = '/uploadVideo' component = {UploadVideo}/>
                    <Route path = "/videoTutorials" component = {VideoTutorials}/>
                    <Route path = "/createSubject" component = {CreateSubject}/>
                    <Route path = "/createAdmin" component = {CreateAdmin}/>
                    <Route path = "/newsFeed" component = {() => <AdminNewsFeed getAdminId = {setAdminId} />}/>
                    <Route path = "/newsFeed1" component = {() => <PublicNewsFeed getUserId={setUserId}/> }/>
                    <Route path = "/articles" component = {()=><Articles publicId={userId} />}/>
                    <Route path = "/reviewArticle" component = {() => <ReviewArticles Id={adminId}/>}/>
                    <Route path = "/createArticle" component = {CreateArticle}/>
                    <Route path = "/studentList" component = {StudentList}/>
                    <Route path = "/answerPage" component = {AnswerPage}/>
                    <Redirect to = '/'/>
                </Switch>
                <Footer/>
            </Router>        
        </div>
    )
}

export default App
