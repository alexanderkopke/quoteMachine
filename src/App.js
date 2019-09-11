import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            content: "",
            author: "",
            
        }
        this.fetchQuote = this.fetchQuote.bind(this);
    }

    fetchQuote(){
        fetch('https://api.quotable.io/random')
            .then(response =>{
            console.log(response);
            return response.json();
        } )
            .then(data => {
            console.log(data);
            this.setState({content: data.content, author: data.author})
        })
        .catch((error)=>console.log(error));
    }
    componentDidMount(){
       
            this.fetchQuote();
            
        
        
    }
    render(){
        const { content, author } = this.state;
        console.log(author + "hello");
        let tweetContent = content.replace(/\s+/g, "%20");
        let tweetAuthor = author.replace(/\s+/g, "%20");

        let tweet = "https://twitter.com/intent/tweet?text="+tweetContent+" - " + tweetAuthor;
        console.log(tweet);
        return (
    <div  className="App container">
        <div id="quote-box" class="row">
            <div className="col-sm-12">
            <p id="text" >{content}</p>

<p id="author" className="lead">{author}</p>
            </div>
            <div className="col-sm-12">
                    <button id="new-quote" className="btn btn-outline-primary" onClick={this.fetchQuote}>New Quote</button>  
    <a style={{marginLeft: 20}} className="btn btn-primary" id="tweet-quote" href={tweet} target="_blank" rel="noopener noreferrer">Tweet the Quote</a> 
            </div>
       

    </div>
     </div>
  );
    }
  
}

export default App;
