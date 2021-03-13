import { Component } from 'react';
import './App.css';
import QuestionRow from './QuestionRow.js'
import $ from 'jquery'
// import { Dimensions } from 'react-dimensions';

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {}
    this.tagSearch("java");
  }

  tagSearch(searchTag) {

    console.log("Trying tag search")
    var now = Math.floor(new Date().getTime()/1000.0)
    const oneWeek = 604800
    const weekAgo = now - oneWeek
    console.log(weekAgo)
    const baseUrl = "https://api.stackexchange.com/2.2/questions?pagesize=10&order=asc&sort=creation&site=stackoverflow&tagged=" + searchTag
    
    $.ajax({
      url: baseUrl,
      success: (searchResults) => {
        console.log('Fetced.')
        console.log(searchResults)
        const items = searchResults.items
        
        var questionRows = []

        items.forEach((question) => {
          console.log(question.title)
          const questionRow = <QuestionRow key={question.id} question={question}/>
          questionRows.push(questionRow)
        })

        this.setState({rows: questionRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch.")
      }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObj = this
    const tag = event.target.value
    boundObj.tagSearch(tag)
  }
  
  render(){
    // const windowWidth = Dimensions.get('window').width;
    return (
      <div className="App">
        <table className="App-title">
          <tbody>
            <tr>
              <td>
                <img width="50" src="sofavicon.ico" alt="StackOverflow Logo" />
              </td>
              <td>
                <h1>StackOverflow Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
  
        
        <input style={{
          fontSize: 24,
          display: 'inline-block',
          width: 'flex',
          paddingLeft: 12,
          paddingBlock: 5
          }}  
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter Search Tag" />

        <input type="button" value="Submit" style={{
          fontSize: 24, 
          display: 'inline-block',
          padding: 5,
          }} 
          // onInput={this.searchChangeHandler.bind(this)}
          />

        {this.state.rows}

      </div>
    );
  }

}


export default App;
