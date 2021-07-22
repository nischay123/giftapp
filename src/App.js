import {useState} from 'react'
import './App.css';
import Card from './Ui/Card';

function App() {

  const [gift, setgift] = useState([
    {name: "gift 1" , description: "1 Gift-giving is something that should not be a burden. ... When you give gifts, you are giving something willingly without wanting something in return. Making someone feel special is more than enough reason to make you give more. It tells the receiver that you were thinking about them" , price:'30' },
    {name: "gift 2" , description: "2 Gift-giving is something that should not be a burden. ... When you give gifts, you are giving something willingly without wanting something in return. Making someone feel special is more than enough reason to make you give more. It tells the receiver that you were thinking about them" , price:'30' },
    {name: "gift 3" , description: "3 Gift-giving is something that should not be a burden. ... When you give gifts, you are giving something willingly without wanting something in return. Making someone feel special is more than enough reason to make you give more. It tells the receiver that you were thinking about them" , price:'30' },
    {name: "gift 4" , description: "4 Gift-giving is something that should not be a burden. ... When you give gifts, you are giving something willingly without wanting something in return. Making someone feel special is more than enough reason to make you give more. It tells the receiver that you were thinking about them" , price:'30' }
  ])

  let content = gift.map(g => {
   return <Card  des={g.description} n={g.name} p = {g.price} />
  })

  return (


    <div className="Container" style={{width: '90%', margin: 'auto'}}>
      <div className="App" >
      {content}

      </div>
    </div>

  );
}

export default App;
