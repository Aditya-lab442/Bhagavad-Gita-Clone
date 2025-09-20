import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Chapter() {
  const { id } = useParams();
  const apiKey = "7d1972a531mshf93cf47910e3462p19fa06jsn545665cd6ec2";
  const apiChapterUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/" + id + "/";
    
  const [data, setData] = useState({});

  const apiVersesUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/" + id + "/verses/";
    
  const [verses, setVerses] = useState([]);

  useEffect(() => {
    fetch(apiChapterUrl, {
      headers: {
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));

    fetch(apiVersesUrl, {
      headers: {
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((res) => setVerses(res));
  }, []);

  return (
    <div className="container">
      <section
        style={{
          textAlign: "center",
          borderBottom: "2px solid rgb(215, 212, 212)",
        }}
      >
        <h3 className="fw-bold" style={{ marginBottom: "10px", color: "orange" }}>
          Chapter {data.id}
        </h3>
        <h1 style={{ marginBottom: "10px" }}>{data.name_translated}</h1>
        <p
          className="container fw-bold"
          style={{ fontSize: "1rem", color: "black", lineHeight: "2rem" }}
        >
          {data.chapter_summary}
        </p>
      </section>
      <section style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            borderBottom: "2px solid rgb(215, 212, 212)",
          }}
        >
          <h3>{data.verses_count} verses</h3>
          <div className="serach-bar" style={{ width: "500px" }}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Go To Verse"
                aria-label="Recipient’s username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="fa-solid fa-sort"></i>sort
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, perferendis tenetur molestias aut officia sunt ipsam odit, similique, velit enim illo quam magni dolorum voluptatum.</p>
        </div>
      </section> */}
      <div className="row">
      {verses.map((vr,idx) => {
        return (
          <>
          <div className="col-3">
            <h5 style={{ color: 'orange'}}>VERSE {idx+1}</h5>
          </div>
          <div className="col-9 fw-bold">
            {vr.text}
          </div>
          </>
        )
      })}
      </div>
    </div>
  );
}

export default Chapter;
