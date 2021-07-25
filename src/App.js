import { useState } from 'react'
import './App.css';
import Card from './Ui/Card';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [gift, setgift] = useState([
    { id: "1", name: "gift 1", description: "1 Gift-giving is something that should not be a burden. ..", price: '12' },
    { id: "2", name: "gift 2", description: "2 Gift-giving is something that should not be a burden. ...", price: '302' },
    { id: "3", name: "gift 3", description: "3 Gift-giving is something that should not be a burden. ", price: '40' },
    { id: "4", name: "gift 4", description: "4 Gift-giving is something that should not be a burden. ... When ", price: '90' }
  ]);
  const [EditContent, setEditContent] = useState(null);
  const [addContent, setaddContent] = useState(null);

  const [toggle, setToggle] = useState(false)

  const handleDelete = (id) => {
    const index = gift.findIndex(ele => {
      return ele.id === id;
    })
    console.log(index);
    const newGift = [...gift];
    newGift.splice(index, 1);
    console.log(newGift);
    setgift(newGift);
    setEditContent(null);

  }

  const handleAdd = () => {
    console.log(addContent);
    const newE = {
      ...gift,
      id: Math.random()
    }
    const newa = [...gift];
    newa.push(newE)
    setgift(newa);
    setToggle(!toggle);

  }
  const handleAChange = (e) => {
    setaddContent({
      ...addContent,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = (id) => {
    const editGift = gift.find(ele => {
      return ele.id === id;
    });
    setEditContent(editGift);
  }
  const handleChange = (e) => {
    setEditContent({
      ...EditContent,
      [e.target.name]: e.target.value
    })
  }
  const handleUpdate = () => {
    if (EditContent !== null) {
      const index = gift.findIndex(ele => {
        return ele.id === EditContent.id;
      });
      const updategift = gift[index];

      const nwGift = [...gift];
      nwGift.splice(index, 1, EditContent);
      setgift(nwGift);
      setEditContent(null);
      console.log(EditContent);
    }
  }

  console.log(gift);
  let content = gift.map(g => {
    return <Card
      id={g.id}
      des={g.description}
      n={g.name}
      p={g.price}
      handleDelete={handleDelete}
      handleEdit={handleEdit} />
  })
  let EditForm = null;
  if (EditContent !== null) {
    EditForm = (
      <form>
        <div className="form-group">
          <label forName="exampleInputEmail1">Name Of Gift</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Gift name"
            value={EditContent.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label forName="exampleInputEmail1">Prices</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enterprice"
            value={EditContent.price}
            name="price"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label forName="exampleInputEmail1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={EditContent.description}
            name="description"
            onChange={(e) => handleChange(e)}
            rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary my-2" onClick={(e) => handleUpdate(e)}>update</button>
      </form>
    )
  }

  return (


    <div className="Container" style={{ width: '90%', margin: 'auto' }}>
      <div class="jumbotron">
        <h1 class="display-4">Gift Shop!</h1>
        <p class="lead">This is a simple hero unit, a simple</p>
        <hr class="my-4" />
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
        {!toggle && <button type="button" class="btn mb-2 btn-primary " onClick={() => setToggle(!toggle)}>Add New</button>
        }
      </div>
      {
        toggle && <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name Of Gift</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Gift name"
              name="name"
              onChange={(e) => handleAChange(e)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Prices</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enterprice"
              name="price"
              onChange={(e) => handleAChange(e)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="description"
              onChange={(e) => handleAChange(e)}
              rows="3"></textarea>
          </div>

          <button type="button" class="btn btn-primary my-2" onClick={(e) => handleAdd(e)}> Save </button>
        </form>

      }
      <div className="App" >
        <div class="row">

          {content}
        </div>
        {EditForm}

      </div>
      
    </div>

  );
}

export default App;
