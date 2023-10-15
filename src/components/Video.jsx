import React from 'react'

const Video = () => {
  return (
    <section className="video">
      <div className="container">
        <div className="video-content">
          <h2>Как я работаю</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            fugiat rerum deserunt tempora cum porro quaerat nisi ea ex nobis
            cupiditate eos sapiente amet error, dolor at ipsum? At, ratione!
          </p>
          <iframe
            src="https://www.youtube.com/embed/9Wi4UA549A8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Video