import React from 'react';

function Food({ name, picture }) {
    return <div>
    <h2>I like {name}</h2>
    <img src= {picture} alt={name} />
    </div>
}

const foodILike = [
    {
        id:1,
        name: "Kimchi",
        image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7-rpW2ynK3Mq89GWd2Q36QHaE8%26pid%3DApi&f=1"
    },
    {
        id:2,
        name: "Samgyeopsal",
        image:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.news.zumst.com%2Fimages%2F2%2F2017%2F02%2F26%2F2030c76e427f4c278c16ab0eb81bd45d.jpg&f=1&nofb=1"
    },
    {
        id:3,
        name: "Bibimbap",
        image: 
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.B3ddBez0ci1Fga_TDPmFhwHaEK%26pid%3DApi&f=1"
    },
    {
        id:4,
        name: "Doncasu",
        image: 
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CjPaLIAcKIH3n7_xK3dK7AAAAA%26pid%3DApi&f=1"
    },
    {
        id:5,
        name: "Kimbap",
        image: 
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.muoVibDUIawORHUPymUWfQHaEK%26pid%3DApi&f=1"
    }
];

function App() {
  return (
      <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
      </div>
  );
}

export default App;