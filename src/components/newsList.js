import React from 'react';
import NewsItem from './newsItem'

const NewsList = (probs) => {
    const item = probs.news.map((item)=>{
        return(
            <NewsItem item={item}/>
        )
    })
    return(
        <div>
            {item}
        </div>
    )
}

export default NewsList;