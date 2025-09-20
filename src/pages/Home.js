import React from 'react';
import ChapterCard from '../components/ChapterCard';
import { Link } from 'react-router-dom';

function Home(){
  
  return (
    <div className="container">
      <section>
        <div className="banner">
          <img src="/banner2.webp" alt="" style={{position: 'absolute', zIndex: -1, opacity: 0.95}} />
          <div className="content">
            <div style={{color: 'white', fontWeight: 900, fontSize: '4rem'}}>Experience the Gita </div>
            <div style={{color: '#fedf89', fontWeight: 900, fontSize: '4rem'}}>Anywhere, Anytime</div>
            <Link to={"/chapter/1"} className="btn btn-light">Read now</Link>
          </div>
        </div>
      </section>
      <div className="back container-fluid"></div>
      <div className="back2-box container" style={{backgroundColor: 'white', height: '200px'}}>
        <h4 style={{color: 'orangered'}}>Verse of the day</h4>
        <p style={{color: 'grey', fontSize: '1.25rem'}}>With the senses,mind and intellect ever controlled, having liberation as
          their supreme goal, free from desire,fear,and anger,the sage is truly liberated forever.</p>
        <div style={{cursor: 'pointer', fontWeight: 700}}>SEE MORE</div>
      </div>
      <div className="fill-data container-fluid">
        <h1>Have the Shloka of the Day delivered to your <br />inbox each morning</h1>
        <div className="input-detail ">
          <input type="text" className="form-control " placeholder="Enter Your Name" aria-label="Username"
            aria-describedby="basic-addon1" />
          <input type="email" className="form-control " placeholder="Enter Your Email" aria-label="Email"
            aria-describedby="basic-addon2" />
          <button type="button" className="btn btn-warning ">Subscribe</button>
        </div>
      </div>
      <main>
        <h1>Chapters</h1>
        <div className="row">
          <ChapterCard/>
        </div>
      </main>
    </div>
  );
};

export default Home;