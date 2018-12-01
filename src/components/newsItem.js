import React from 'react';

const NewsItem = ({item}) => {
    return (
        <div className = "newsItem" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.feed}</p>
        </div>
    )
}

export default NewsItem;