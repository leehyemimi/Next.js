import { useState } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  }
  const [enteredName, setEnteredName] = useState('');
  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  }
  return (
    <>
      <NewPost changeBodyHandler={changeBodyHandler} changeNameHandler={changeNameHandler}/>
      <ul className={classes.posts}>
          <Post author={enteredName} body={enteredBody}/>
          <Post author="Jane" body="React.js is not awesome!"/>
      </ul>
    </>
  )
}

export default PostsList;