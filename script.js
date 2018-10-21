var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        info: 'Gatunek: familijny, fantasy, przygodowy',
        a: 'https://www.filmonpaper.com/site/media/2011/07/HarryPotterAndTheSorcerersStone_onesheet_USA_DrewStruzan-1-500x730.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        info: 'Gatunek: animacja, familijny',
        a: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
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
        a: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.2.jpg'
    },
    {
        id: 5,
        title: 'Bogowie',
        desc: 'Film opowiada o początkach polskiej transplantologii serca',
        info: 'Gatunek: biograficzny, dramat',
        a: 'https://ssl-gfx.filmweb.pl/po/43/78/694378/7632114.2.jpg',
}
];
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.info),
        React.createElement('p', {}, movie.a)
        )
    });
ReactDOM.render(element, document.getElementById('app'));

