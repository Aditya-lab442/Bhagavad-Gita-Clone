import React from "react";

function Quotes() {
  const quote = [
    {
      quote_number: 1,
      quote:
        "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.",
    },
    {
      quote_number: 2,
      quote:
        "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    },
    {
      quote_number: 3,
      quote:
        "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself on earth.",
    },
    {
      quote_number: 4,
      quote:
        "Abandon all varieties of righteousness and simply surrender unto Me. I shall deliver you from all sinful reactions; do not fear.",
    },
  ];

  return (
    <>
      <section>
        <div className="container banner">
          <img
            src="/arjunKrishna.webp"
            alt=""
            style={{ position: "absolute", zIndex: -1, opacity: 0.95 }}
          />
          <div className="content">
            <div style={{ color: "white", fontWeight: 900, fontSize: "4rem" }}>
              Bhagavad Gita Quotes By
            </div>
            <div
              style={{ color: "#fedf89", fontWeight: 900, fontSize: "4rem" }}
            >
              Lord Krishna
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-sm mt-5 mb-5">
          <div id="carouselExample" class="carousel slide position-relative">
            <div class="carousel-inner p-4">
              {quote.map((quo) => {
                <div className="carousel-item active">
                  <p className="h5 mb-3 text-warning text-center">
                    QUOTE {quo.quote_number}
                  </p>
                  <p className="h4 text-center px-3">{quo.quote}</p>
                </div>;
              })}
            </div>

            <button
              class="carousel-control-prev position-absolute top-50 start-0 translate-middle-y"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <i class="bi bi-arrow-left-circle fs-1 text-dark"></i>
              <span class="visually-hidden">Previous</span>
            </button>

            <button
              class="carousel-control-next position-absolute top-50 end-0 translate-middle-y"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <i class="bi bi-arrow-right-circle fs-1 text-dark"></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quotes;
