import { useState } from 'react';
import { Container, Header, Area} from './App.styles';
import { Item } from './types/Item';
import { List_item } from './components/List-item';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Qualquer texto', done: false},
    {id: 2, name: 'Qualquer outro texto', done: true},
  ]);
  
  return (
    <Container>My container
      <Area>
        <Header>To do list</Header>

        {list.map((item,index) =>(
          <List_item  key={index} item={item} />
        ))}

      </Area>
    </Container>
  );
}

export default App;