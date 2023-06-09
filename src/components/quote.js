import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [data,setdata] = useState(null);
  const [Isloading,setIsloading] = useState(false);
  const [ErrorFound,setErrorFound] = useState(false);
  const baseUrl = 'https://api.api-ninjas.com/v1/quotes?category=';
  const baseKey = 'rBDqy7ELDjojxG7nokSQNQ==9rgsnCov5opWqsS6';
  const category = 'intelligence';
  const fullUrl = baseUrl + category;
  const init = {
    method:'GET',
    headers: {
      'X-Api-Key': baseKey
    },
    contentType : 'application/json'
  }

  useEffect(() => {
    const fetchData = async() => {
      try{
        setIsloading(true)
        const request = await fetch(fullUrl,init);
        const response  = await request.json();
        setdata(response);
        setIsloading(false)
      }catch(error){
        setErrorFound(error.message)
      }
    }
    fetchData();
    return(() => {
      setdata(null)
    })
  },[]);

  return (
      Isloading ? (
        <span className='loading generic'>qoute is loading...</span>
      ):
      ErrorFound ? (
        <span className='error generic'><b>error found: </b> <i>{ErrorFound.message}
  </i></span>
      ):
      (data === null) ? (
        <span className='noQuo generic'>quote not found</span>
      ):
      data.map((item) => (
        <section className='quoteSection'>
          <span className='acQoute'>
            {item.quote}
            </span>
          <h2 className='author'>By 
          {item.author}
          </h2>
        </section>
      )))
      
};

export default Quote;
