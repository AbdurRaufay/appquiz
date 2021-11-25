import React from "react"
import axios from 'axios'
import Questions from './Questions';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      score: 0,
      response: 0,
      
    }
    this.countScore=this.countScore.bind(this);
    this.countResponse=this.countResponse.bind(this);
  }


async componentDidMount(){
  await axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
  .then(res=>{
    this.setState({
      questions:res.data.results
      
    })
  })
  
}
countScore=()=>{
  this.setState({score:this.state.score+1})
}
countResponse=()=>{
  this.setState({response:this.state.response+1})
}

render(){
  return (
    <div>    <h1 style={{textAlign:'center'}}>Quiz App</h1>
           <p style={{textAlign:'center',fontSize:30}}>Score:{this.state.score}/{this.state.response}
            :{this.state.response!=0 && (
          <span>Percentage:{(this.state.score / this.state.response)*100}%</span>)
          }
          </p>
        <Questions 
        questions={this.state.questions}
        countScore={this.countScore}
        countResponse={this.countResponse}
        />
    </div>
  )
}
}

export default App;
