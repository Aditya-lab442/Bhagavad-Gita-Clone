import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ChapterCard() {
  const apiKey = "7d1972a531mshf93cf47910e3462p19fa06jsn545665cd6ec2";
  const apiUrl =
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        "x-rapidapi-key": apiKey
      }
    })
    .then((res) => res.json())
    .then((res) => setData(res));
  }, []);
  return (
    <>
      {data.map((d) => {
        return (
          <Link to={`/chapter/${d.id}`} className="nav-link col-md-6 col-sm-12">
            <div className="card-body">
              <h6 className="card-title">
                Chapter {d.chapter_number}
                <h5 className="title pt-3" style={{ fontWeight: 600 }}>
                  {d.name_translated}
                </h5>
              </h6>
              <p className="card-text text-truncate-3">{d.chapter_summary}</p>
              <div>
                <span className="ms-3">{d.verses_count} Verses</span>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default ChapterCard;
