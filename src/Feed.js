import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import PhotoIcon from '@mui/icons-material/Photo';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FeedIcon from '@mui/icons-material/Feed';
import "./css/feed.css"
import Post from './Post';
import { collection, getDocs, addDoc, QuerySnapshot, query, orderBy } from "firebase/firestore";
import {db} from './Firebase'


function Feed() {
  const [posts,setPost] = useState([]);
  const [input, setInput] = useState();
  const submitPost=async(e)=>{
    e.preventDefault();
    try{
     await addDoc(collection(db, "posts"), {
      name:"Shubham Priyam Patel",
      description:"Frontend Developer",
      message:input,
      photoURL:"https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k",
      
      })
      getDocs(collection(db,"posts")).then((QuerySnapshot)=>{
        const newData = QuerySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));
        setPost(newData);
          // console.log(posts,newData)
       })
    } catch(e){
      console.log("e",e)
    }
  }
  
  useEffect(()=>{
     getDocs(collection(db,"posts")).then((QuerySnapshot)=>{
      const newData = QuerySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));
      setPost(newData);
        console.log(posts,newData)
     })
  },[])
  
  return (
    <div className="feed">
      <div className="feed_input">
        <div className="feed_form">
        <Avatar src="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_400_400/0/1668701295243?e=1682553600&v=beta&t=vC1xxdn7td9kWOWYgvpR1rOidXwdIupYKhiKlj9ALew"/>
        <form onSubmit={submitPost}>
            <input type="text" placeholder="Start a Post" value={input} onChange={e=>setInput(e.target.value)}/>
            <input type="submit"/>        
        </form>
        </div>


        <div className="feed_options">
          <div className="option">
            <PhotoIcon style={{color:'#70b5f9'}}/>
            <span>Photo</span>
          </div>
          <div className="option">
            <VideocamIcon style={{color:'red'}}/>
            <span>Video</span>
          </div>
          <div className="option">
            <EventNoteIcon style={{color:'burlywood'}}/>
            <span>Event</span>
          </div>
          <div className="option">
            <FeedIcon style={{color:'green'}}/>
            <span>Write Article</span>
          </div>
        </div>
      </div>

      {
        posts.map((post)=>{
            return <Post  name={post.name} description={post.description} message={post.message} photoURL={post.photoURL}/>
        })
      }



     {/* <Post name="Shubham Priyam Patel" description="Frontend Developer" message="Just Completed my project Linked in clone by using react js, css, material UI, redux, firebase." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
     <Post name="Shubham Priyam Patel" description="Frontend Developer" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
     <Post name="Shubham Priyam Patel" description="Frontend Developer" message="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
     <Post name="Shubham Priyam Patel" description="Frontend Developer" message="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
     <Post name="Shubham Priyam Patel" description="Frontend Developer" message="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc., redux, firebase." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
     <Post name="Shubham Priyam Patel" description="Frontend Developer" message="Just Completed my projThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
     <Post name="Shubham Priyam Patel" description="Frontend Developer" message="Just Completed my project LiThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
     <Post name="Shubham Priyam Patel" description="Frontend Developer" message="JusThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.roject Linked in clone by using react js, css, material UI, redux, firebase." photoURL="https://media.licdn.com/dms/image/D4D03AQEs3KunoXMnwg/profile-displayphoto-shrink_100_100/0/1668701295243?e=1682553600&v=beta&t=xPcZfwR6ZXE3QnI9HEuC9j0uReYxSXdUwNGvpEhO36k"/>
    */}


    </div>
  )
}

export default Feed
