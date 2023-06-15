import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';

const Quote = () => {
  const [data, setdata] = useState(null);
  const [Isloading, setIsloading] = useState(false);
  const [ErrorFound, setErrorFound] = useState(false);
  const baseUrl = 'https://api.api-ninjas.com/v1/quotes?category=';
  const baseKey = 'rBDqy7ELDjojxG7nokSQNQ==9rgsnCov5opWqsS6';
  const category = 'intelligence';
  const fullUrl = useMemo(() => baseUrl + category, [baseUrl, category]);
  const init = useMemo(() => ({
    method: 'GET',
    headers: {
      'X-Api-Key': baseKey,
    },
    contentType: 'application/json',
  }), [baseKey]);

  const fetchData = useCallback(async () => {
    try {
      setIsloading(true);
      const request = await fetch(fullUrl, init);
      const response = await request.json();
      setdata(response);
      setIsloading(false);
    } catch (error) {
      setErrorFound(error);
    }
  }, [fullUrl, init]);

  useEffect(() => {
    fetchData();
    return () => {
      setdata(null);
    };
  }, [fetchData]);

  let content = '';
  const stableId = 1;

  if (Isloading) {
    content = <span className="loading generic">quote is loading...</span>;
  } else if (ErrorFound) {
    content = (
      <span className="error generic">
        <b>error found: </b>
        <i>{ErrorFound}</i>
      </span>
    );
  } else if (data === null) {
    content = <span className="noQuo generic">quote not found</span>;
  } else {
    content = data.map((item) => (
      <section className="quoteSection" key={stableId} data-testid="quotes">
        <span className="acQoute">{item.quote}</span>
        <h2 className="author">
          By
          {item.author}
        </h2>
      </section>
    ));
  }

  return content;
};

export default Quote;
