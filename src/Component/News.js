import React, { useEffect, useState} from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props){
  
    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    /* document.title = `${this.capitalizeFirstLetter(props.category)}__News-Monkey App` */
     /* capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      } */

    const updateNews = async() =>{
      props.setProgress(10);
      setLoading(true);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ec02715ed2c340028c5c7b8693a97311&page=${page}&pageSize=${props.pageSize}`;
       console.log(url);  
      props.setProgress(40);
      let data = await fetch(url);
      let jsonData = await data.json();
         
        
      console.log("#### Update News ####");
      console.log(jsonData);
         
      props.setProgress(60);

      setArticle(jsonData.articles);
      setTotalResults(jsonData.totalResults);
      setLoading(false);

      props.setProgress(100);
         
      }
      
      useEffect(()=>{
        updateNews();
        
      }, [props.country]);
  
  
     const fetchMoreData = async() => {
      console.log("fetchMoreData method is running");
  
      setPage(page + 1);
      setLoading(true);
      console.log({page});
  
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ec02715ed2c340028c5c7b8693a97311&page=${page + 1}&pageSize=${props.pageSize}`;
      console.log(url);
  
      let data = await fetch(url);
      let jsonData = await data.json();
      console.log("#### Fetch more data ####");
      console.log(jsonData);
      
      setArticle((prevArticle) =>{
        return ([...new Set([...prevArticle, ...jsonData.articles])])
  
      })
  
      setTotalResults(jsonData.totalResults);
      setLoading(false)
  
    }

      
      return (
      <>

        <div className = "container my-5">
        <h2 className='text-center ' style={{marginTop: "20mm"}}>News-Monkey Top {props.category} Headline </h2>

          <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length !== totalResults}
            loader={<Spinner/>}
          >

            <div className='row my-2 '>

                {article.map((element) => {

                    return <div  className='col-md-4' key={element.url}>
                        <NewItem title={element.title ? element.title : " "} description={element.description ? element.description : ""}
                            imageUrl={element.urlToImage}
                            newsUrl={element.url} author={element.author? element.author:"Unknown"} 
                            date = {element.publishedAt?  element.publishedAt  :"Not Available"} 
                            source = {element.source.name}/>
                    </div>;
                  }
                )}

            </div> 

         </InfiniteScroll>

        </div>
    
      </>
  )
}

News.propTypes = {
  country : PropTypes.string,
      pageSize: PropTypes.number,
      category :PropTypes.string

}

News.defaultProps = {
country : "in",
pageSize : 5,
category : "general"
}

    


  

  

