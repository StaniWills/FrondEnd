import Counter from '../Counter';
import WordsContainer from '../WordsContainer'

function App() {
  return (
    <div>

      <Counter/>
      <WordsContainer/>
      
    </div>
  );
}

export default App;

// 1. В отдельном файле words.js дан массив с объектами:

// 2. Создать компонеты Word и WordsContainer. Word импортирован в WordsContainer. WordsContainer импортирован в App.

// 3. Вывести слова из words.js в компонент Word.

// 4. Стилизовать выведенные слова из words.js в формате карточки со словом.
