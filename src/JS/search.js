import React, { useState, useEffect } from 'react';
import '../App.scss'

const SearchBox = () => {
  const [searchTexe, searchSearchTexe] = useState('');
  const [debounced, setDebounced] = useState(searchTexe);

  //防抖
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(searchTexe);
      //這裡發ajax
      if (searchTexe) {
        fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
          .then((response) => response.json())
          .then((data) => {
            console.log('AJAX response:', data);
          })
          .catch((error) => {
            console.error('Error during AJAX call:', error);
          });
      }
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTexe]);

  //測試
  useEffect(() => {
    if (debounced) {
      console.log(`發ajax${debounced}`);
    }
  }, [debounced]);

  //輸入的值
  const handleOnChange = (event) => {
    searchSearchTexe(event.target.value);
  };

  return (
    <div className='wrap-searchBar'>
        <div>Search</div>
        <input type="search" name="searchBar" className='search' onChange={handleOnChange} />
        <div>輸入：{debounced}</div>
    </div>
    
  );
};

export default SearchBox;
