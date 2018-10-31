import React from 'react';

const SourceView = () => (
    <div className="sources">
        <p>RotorWind Schrift: <a href="https://fonts.google.com/specimen/Audiowide">Audiowide</a></p>
        <p>Allgemeine Schrift: <a href="https://fonts.google.com/specimen/Roboto">Roboto</a></p>
        <p>Bild in Navigationspanel: <a href="https://unsplash.com/photos/4NhqyQeErP8">Unsplash: Windmill by Zbynek Burival</a></p>
      <style jsx>{` 
        .sources {
            display:flex;
            flex-direction: column;
            margin-left: 300px;
            width: 100%;
            height: 100vh;
            background: #eeeeee;
        }
      `}</style>
    </div>
)

export default SourceView;