import React from 'react';
import Question from './Question';

class Questions extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                   <h1>Questions</h1>
                   <ol>
                       {this.props.questions.map((question,key)=>{
                           return (   
                               <Question 
                               question={question} key={key}
                               countScore={this.props.countScore}
                               countResponse={this.props.countResponse}
                               />
                           );
                       })}
                   </ol>
            </div>
        )
    }
}
export default Questions;