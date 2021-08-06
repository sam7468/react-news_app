import React,{useState} from 'react'

const ArticleTwo =()=>{
    const [api_data,setapi] = useState([]); //state
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1b13910320bf45e9a637203283ea2791')
    .then((response) => response.json())
    .then((data) => setapi(api_data=>data.articles[1]))

    return(

        <div  className="hover1">
            <a href={api_data.url}  target="_blank">
            <div className="card bg-dark text-white" style={{height: 300,width: 500}}>
                <img className="card-img" src={api_data.urlToImage} style={{height: 300,width: 500}} alt="Card image"/>   
                <div className="card-img-overlay">
                    <h3 className="card-title">{api_data.title}</h3>
                    <h5 className="card-text">{api_data.author}</h5>
                    <p className="card-text">{api_data.publishedAt}</p>
                </div>
            </div>
            </a>
            </div> 
        )

}
export default ArticleTwo


