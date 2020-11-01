import React, { useEffect, useState } from 'react'
import NewTweet from '../NewTweet/NewTweet'
import Tweet from '../Tweet/Tweet'
import * as api from '../../../api/apiService'

export default function Tweets() {
  const [tweetDefinition] = useState({
    maxLength: 140,
    alertLength: 9
  })
  const [allTweets, setAllTweets] = useState([]);

  const loadTweets = async () => {
    const result = await api.getAllTweets();
    setAllTweets(result);
  }

  useEffect(() => {
    loadTweets();
  }, [])

  const handleDeleteClick = async (id) => {
    const res = await api.deleteTweet(id);
    if (res) loadTweets();
  }

  const handleAddClick = async (newTweet) => {
    const res = await api.postNewTweet(newTweet);
    if (res) loadTweets();
  }

  return (
    <div className="row">
      <div className="col s12">
        <NewTweet onAdd={handleAddClick} definitions={tweetDefinition} />
      </div>
      <div className="col s12">
        {allTweets.length > 0 && <ul>
          {allTweets.map(tweet => {
            return <li key={tweet.id}><Tweet tweet={tweet} onDelete={handleDeleteClick} /></li>
          })}
        </ul>}
        {allTweets.length === 0 &&
          <div className="progress">
            <div className="indeterminate"></div>
          </div>}
      </div>
    </div>
  )
}
