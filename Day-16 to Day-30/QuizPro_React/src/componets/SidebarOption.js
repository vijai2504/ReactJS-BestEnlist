import React from 'react';
import "./SidebarOption.css";
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

function SidebarOption({Icon, title, id, addQuizOption}) {
    const history = useHistory();

    const selectQuiz = () => {
        if (id) {
            history.push(`/quiz/${id}`);
        } else {
            history.push(title);
        }
    };

    const addQuiz = () => {
        const quizName = prompt("Enter quiz name:");
        if (quizName) {
          db.collection('quiz').add({
              name: quizName
          })
      }};

    return (
        <div className='sidebarOption' onClick={addQuizOption ? addQuiz : selectQuiz}>
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h3 className="sidebarOption__quiz">
                <span className="sidebarOption__hash">
                <GraphicEqIcon /></span> {title}</h3>
            )}
        </div>
    );
}

export default SidebarOption;
