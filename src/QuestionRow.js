import React from 'react'

class QuestionRow extends React.Component {

    viewQuestion(){
        console.log("Trying view")
    }
    
    render() {
        var myDate = new Date( this.props.question.creation_date *1000);
        return <table key={this.props.question.id} style={{
            paddingLeft: 12,
          }}>
            <tbody>
              <tr>
                <td style={{paddingRight: 24}}>
                  <p>{this.props.question.score}</p>
                  <p>Votes</p>
    
                </td>
                <td style={{paddingTop: 16}}>
                  {this.props.question.title}
                  <p style={{textAlign: 'left'}}>Creation date: {myDate.toUTCString()}</p>
                  <input type="button" onClick={this.viewQuestion} value="View" />
                </td>
                
              </tr>
            </tbody>
          </table>
    }
}

export default QuestionRow