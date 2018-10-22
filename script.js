var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        info: 'Gatunek: familijny, fantasy, przygodowy',
        a: 'https://ssl-gfx.filmweb.pl/po/05/71/30571/7253557.2.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        info: 'Gatunek: animacja, familijny',
        a: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/6999844.2.jpg'
    },
    {
        id: 3,
        title: 'Zielona mila',
        desc: 'Historia niezwykłgo człowieka skazabego na śmierć',
        info: 'Gatunek: dramat',
        a: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.2.jpg'
    },
    {
        id: 4,
        title: 'Lista Schindlera',
        desc: 'Historia przedsiebiorcy, który podczas II wojny swiatowej ratował Żydów',
        info: 'Gatunek: dramat',
        a: 'https://ssl-gfx.filmweb.pl/po/12/11/1211/7075581.2.jpg'
    },
    {
        id: 5,
        title: 'Bogowie',
        desc: 'Film opowiada o początkach polskiej transplantologii serca',
        info: 'Gatunek: biograficzny, dramat',
        a: 'https://ssl-gfx.filmweb.pl/po/43/78/694378/7632114.2.jpg',
}
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.info),
        React.createElement('img', {src: movie.a},)
    )
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
);

ReactDOM.render(element, document.getElementById('app'));

