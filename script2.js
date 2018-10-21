var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Harry Potter'),
        React.createElement('p', {}, 'Film o czarodzieju'),
        React.createElement('p', {}, 'Gatunek: familijny, fantasy, przygodowy'),
        React.createElement('a', {href: 'https://www.filmonpaper.com/site/media/2011/07/HarryPotterAndTheSorcerersStone_onesheet_USA_DrewStruzan-1-500x730.jpg'}, 'plakat')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Król lew'),
        React.createElement('p', {}, 'Film opowiadający historię króla sawanny'),
        React.createElement('p', {}, 'Gatunek: animacja, familijny'),
        React.createElement('a', {href: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'}, 'plakat')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Zielona mila'),
        React.createElement('p', {}, 'Historia niezwykłgo człowieka skazabego na śmierć'),
        React.createElement('p', {}, 'Gatunek: dramat'),
        React.createElement('a', {href: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.2.jpg'}, 'plakat')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Lista Schindlera'),
        React.createElement('p', {}, 'Historia przedsiebiorcy, który podczas II wojny swiatowej ratował Żydów'),
        React.createElement('p', {}, 'Gatunek: dramat, wojenny'),
        React.createElement('a', {href: 'https://ssl-gfx.filmweb.pl/po/12/11/1211/6970977.2.jpg'}, 'plakat')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Bogowie'),
        React.createElement('p', {}, 'Film opowiada o początkach polskiej transplantologii serca'),
        React.createElement('p', {}, 'Gatunek: biograficzny, dramat'),
        React.createElement('a', {href: 'https://ssl-gfx.filmweb.pl/po/43/78/694378/7632114.2.jpg'}, 'plakat')
      ),
    )
  );


ReactDOM.render(element, document.getElementById('app'));