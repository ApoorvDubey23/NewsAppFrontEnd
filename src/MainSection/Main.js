import React, { useState, useEffect } from 'react';
import Box from './Box';
import './main.css';
import Loading from '../Loading/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Fade } from 'react-awesome-reveal';
import { Form } from 'react-bootstrap';
function Main({category, country}) {

  const [mode, setmode] = useState(true);
  const [news, setNews] = useState({ "articles": [] });
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    fetchMoreData(true);
  }, [page]);
  useEffect(()=>{
    fetchMoreData(false);
  },[category, country])
  useEffect(()=>{
    document.title = category.charAt(0).toUpperCase() + category.slice(1) + "-NewsX";
    fetchMoreData(false);
  },[])

  const fetchMoreData = async (append) => {
    try {
      const scope={category,country, page};
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/news",{
        method:"POST",
        body:JSON.stringify(scope),
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data = await response.json();
      if(data.articles.length === 0) {
        setHasMore(false);
      }
      if(append)
      setNews((prevNews) => ({
        ...prevNews,
        articles: [...prevNews.articles, ...data.articles],
        totalResults: data.totalResults
      }));
      else {
        setNews(data)
      }
    } catch (error) {
      console.log("Error fetching more data", error);
    }
  };




  // console.log(news.articles);

  return (<div className={`${mode?"bg-white text-black":' bg-gray-900 text-white'}`} style={{marginTop:"4rem"}}>
    <div style={{ margin: "1rem" }}>
      
      <div style={{ fontSize: "3rem", fontWeight: "900", fontStyle: "italic", textDecoration: "underline" }}>-:NewsX:-</div>
      <div className=' flex justify-end right-3'>
      <Form className=' shadow-lg shadow-black'>
      <Form.Check 
        type="switch"
        id="custom-switch"
        className=' font-bold'
        label="Light/dark"
        onClick={()=>{setmode(!mode)}}
      />
      
    </Form>
      </div>
      <div style={{ fontSize: "1rem" }}>Timely Updates . Trusted News</div>
    </div>
    <InfiniteScroll
      dataLength={news.articles.length}
      next={()=>{
        setpage(p=>p+1)
        console.log("newpage!!!")
      }}
      hasMore={hasMore}
      loader={<Loading />}
    >
      <div className='main'>
        <Fade>

        {news.articles && news.articles.map((newsItem) => (
            <Box key={newsItem.url} {...newsItem} mode={mode} />
            
           
        ))}
       
      </Fade>
      </div>
    </InfiniteScroll>

  </div>


  );
}

export default Main;
