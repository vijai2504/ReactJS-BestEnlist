import React, { useState, useEffect} from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import db from '../firebase';
import AddBoxIcon from '@material-ui/icons/AddBox';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function SidebarAd() {
  const [quiz, setQuiz] = useState([]);
    

    useEffect(() => {
        db.collection("quiz").onSnapshot((snapshot) =>
            setQuiz(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        );
    }, []);

    function Dashboard() {
      localStorage.clear();
      window.location.href = '/Dashboard';
  }
    
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__info">
            <h2>Admin</h2>
          </div>
          <CreateIcon />
        </div>
        <SidebarOption onClick={Dashboard} Icon={DashboardIcon} title="Dashboard" />
        <SidebarOption Icon={SettingsIcon} title="Settings" />
        <SidebarOption Icon={EmojiEventsIcon} title="Leaderboard" />
        <SidebarOption Icon={AddBoxIcon} addQuizOption title="Create" />
        <SidebarOption Icon={UpdateIcon} title="Update" />
        <SidebarOption Icon={DeleteForeverIcon}  title="Delete" />
        <hr />
        {quiz.map(quiz => (
                <SidebarOption title={quiz.name} id={quiz.id} />
            ))}
      </div>
    );
  }

export default SidebarAd;
