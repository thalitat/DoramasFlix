var listaImagens = [];

listaImagens.push(
  "https://www.themoviedb.org/t/p/w500/c2gon6zbqzL73DOl8mPQMMUJXvE.jpg"
);
listaImagens.push(
  "https://www.globalgeek.com.br/wp-content/uploads/2019/12/hwayugi_poster06-707x1024.jpg"
);
listaImagens.push(
  "https://pm1.narvii.com/6368/f688613e111dcb8b50c742f5d4d9856208a020d6_hq.jpg"
);
listaImagens.push(
  "https://pm1.narvii.com/7242/4d4c4e4c95faee1d42a18c7560eb4e0ff34d0e56r1-1121-1591v2_hq.jpg"
);
listaImagens.push(
  "https://momentokdrama.com.br/wp-content/uploads/2021/11/v4WmA90kL8MFa9lySXFUjtwfgC2-768x1152.jpg"
);
listaImagens.push(
  "https://pictures.betaseries.com/fonds/poster/5e5d8c3120b904d62f1193ee02a8f4e8.jpg"
);

var listaNomes = [];

listaNomes.push(
  "Goblin",
  "Hwayugi",
  "Oh Minha Vênus",
  "Hotel Del Luna",
  "Hometown Cha-Cha-Cha",
  "While You Were Sleeping "
);

var genero = [];

genero.push(
  "Fantasia/Romance",
  "Fantasia/Romance",
  "Comédia/Romance",
  "Romance/Fantasia",
  "Roamnce/Drama",
  "Drama/Romance"
);

var ids = [];

ids.push("1", "2", "3", "4", "5", "6");

var trailers = [];

trailers.push(
  "https://www.youtube.com/watch?v=S94ukM8C17A",
  "https://www.youtube.com/watch?v=n2Y8EeHEkDE",
  "https://www.youtube.com/watch?v=uMtaHlC49jk",
  "https://www.youtube.com/watch?v=lJ3_1v8sB48&t=125s",
  "https://www.youtube.com/watch?v=jnd2RtVB980&t=22s",
  "https://www.youtube.com/watch?v=TBh6XJBDtqs"
);

var hora = [];

hora.push("16 eps", "16 eps", "16 eps", "16 eps", "16 eps", "16 eps");

var Ano = [];

Ano.push(
  "<b>2016</b>",
  "<b>2017</b>",
  "<b>2015</b>",
  "<b>2019</b>",
  "<b>2021</b>",
  "<b>2017</b>"
);

var img = document.querySelector("#filmes");
for (var i = 0; i < listaImagens.length; i++) {
  document.write(
    "<div class='base' id='filmes'><div class='filme'><img data-toggle='modal' data-target='#" +
      ids[i] +
      "' src=" +
      listaImagens[i] +
      "><p class='nome'>" +
      listaNomes[i] +
      "</p><p class='data'>Ano " +
      Ano[i] +
      "<div class='imghover'><div class='info'><span>" +
      genero[i] +
      "</span><span>Duração: " +
      hora[i] +
      "</span></div></div></div></div><div class='modal fade' id='" +
      ids[i] +
      "' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content'><div class='modal-body'><iframe style='border-radius: 10px;' width='100%' height='320' src=" +
      trailers[i] +
      " title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div></div></div>"
  );
}
