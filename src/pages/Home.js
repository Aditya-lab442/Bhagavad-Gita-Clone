import React from 'react';
import ChapterCard from '../components/ChapterCard';
import { Link } from 'react-router-dom';

function Home(){
  
  return (
    <div className="container-fluid p-0">
      <section>
        <div className="banner mx-auto">
          <img src="/banner2.webp" alt="" />
          <div className="content text-center w-100">
            <div className="display-4 fw-bold" style={{color: 'white'}}>Experience the Gita </div>
            <div className="display-4 fw-bold" style={{color: '#fedf89'}}>Anywhere, Anytime</div>
            <Link to={"/chapter/1"} className="btn btn-light mt-4 px-4 py-2 fs-5">Read now</Link>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <div className="back2-box">
          <h4 style={{color: 'orangered'}}>Verse of the day</h4>
          <p style={{color: 'grey', fontSize: '1.25rem'}}>With the senses,mind and intellect ever controlled, having liberation as
            their supreme goal, free from desire,fear,and anger,the sage is truly liberated forever.</p>
          <div style={{cursor: 'pointer', fontWeight: 700}}>SEE MORE</div>
        </div>
      </div>
      <div className="container">
        <div className="fill-data w-100 mx-auto">
          <h1 className="mb-4">Have the Shloka of the Day delivered to your <br className="d-none d-md-block" />inbox each morning</h1>
          <div className="input-detail">
            <input type="text" className="form-control" placeholder="Enter Your Name" aria-label="Username"
              aria-describedby="basic-addon1" />
            <input type="email" className="form-control" placeholder="Enter Your Email" aria-label="Email"
              aria-describedby="basic-addon2" />
            <button type="button" className="btn btn-warning">Subscribe</button>
          </div>
        </div>
      </div>
      <main className="container">
        <h1 className="mb-4">Chapters</h1>
        <div className="row">
          <ChapterCard/>
        </div>
      </main>
    </div>
  );
};

export default Home;
