import "./App.css";
import React from 'react'


function Arama({aramaMetni,onSearch}) {
  function handleChange(event){
    console.log(event);
    onSearch(event); 
  };
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={handleChange}
       value={aramaMetni}/>
     
    
    </div>
  );
}
function Yazi({url,baslik,yazar,yorum_sayisi,puan,id}){
  return(
    <li key={id}>
    <span>
      <a href={url}>{baslik}</a>,
    </span>
    <span>
      <b>Yazar:</b> {yazar},{" "}
    </span>
    <span>
      <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
    </span>
    <span>
      <b>Puan:</b> {puan}
    </span>
  </li>
  )
}
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return (
        <Yazi key={yazi.id} {...yazi}/>
        );
      })}{" "}
    </ul>
  );
}
function App() {
  const [aramaMetni,setAramaMetni] =React.useState(localStorage.getItem("aranan") || "");

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "Sıfırdan Eksiye Swift",
      url: "",
      yazar: "M Atakan İçel",
      yorum_sayisi: 844,
      puan: -1.3,
      id: 2,
    },
    {
      baslik: "Swift Desgin Patterns",
      url: "",
      yazar: "M Atakan İçel",
      yorum_sayisi: 2,
      puan: 4.5,
      id: 3,
    },
    {
      baslik: "Sfırdan Eksiye Flutter",
      url: "",
      yazar: "M Atakan İçel",
      yorum_sayisi: 343,
      puan: -2,
      id: 4,
    },

  ];
  const arananYazilar = yaziListesi.filter(function (yazi) {
    const kucukHarfAramaMetni = aramaMetni.toLowerCase();  const kucukHarfYazar = yazi.yazar.toLowerCase();  const kucukHarfBaslik = yazi.baslik.toLowerCase();
      return (
      kucukHarfYazar.includes(kucukHarfAramaMetni) || kucukHarfBaslik.includes(kucukHarfAramaMetni)
    );
  });


  React.useEffect(() => {
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);


function handleSearch(event){
  console.log(event.target.value);
  setAramaMetni(event.target.value);
}

  return (
    <React.Fragment>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />  
      <p>
        <strong>{aramaMetni} aranıyor...</strong>
      </p>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </React.Fragment>
  );
}
export default App;

//ÖDEV aramayı büyük küçük harf araması yapabilen ve alttaki isimleri (yazarda) arama yap.