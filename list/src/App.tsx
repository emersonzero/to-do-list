import { useState } from 'react';
import { Container, Header, Area} from './App.styles';
import { Item } from './types/Item';
import { List_item } from './components/List-item';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Qualquer texto', done: false},
    {id: 2, name: 'Qualquer outro texto', done: true},
  ]);

  const handleAddtask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList)
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }
  
  return (
    <Container>
      <Area>
        <Header>To do list</Header>

        <AddArea onEnter={handleAddtask} />  

        {list.map((item,index) =>(
          <List_item  key={index} item={item} />
        ))}

      </Area>
    </Container>
  );
}

export default App;