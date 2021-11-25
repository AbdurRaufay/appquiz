import React, { Component } from 'react'
import arrayShuffle from 'array-shuffle';

export default class Question extends Component {
    constructor(props){
        super(props)

        const concatBoth=this.props.question.incorrect_answers.concat(this.props.question.correct_answer)
        const shuffleBoth=arrayShuffle(concatBoth)
     
        this.state={ 
            disable:false,
            shuffleBoth:shuffleBoth
        }
        this.check=this.check.bind(this)
    }
    check(text){
        this.setState({disable:true});
        this.props.countResponse();
        if(text===this.props.question.correct_answer){
            this.props.countScore();
        }
    }
   
    render(){
        return(
            <div>
                 <li style={{fontSize:20,color:'blue',margin:10}}>
                    <ol>
                        {this.props.question.question} 
                        {this.state.shuffleBoth.map((answer,key)=>{
                            return (
                                <div key={key}>
                                    <li style={{fontSize:15,color:'black'}}>
                                        <button style={{margin:3}} 
                                         onClick={(e)=>this.check(answer)} 
                                         disabled={this.state.disable}
                                         >
                                            {answer}
                                        </button>
                                    </li>
                                 </div>
                            )
                        })}
                    </ol>
                 </li> 
            </div>
        )
    }
}