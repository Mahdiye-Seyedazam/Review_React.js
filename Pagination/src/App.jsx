import { useRef ,useState  } from 'react'
import {useEffect}from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [Todo,setTodo] = useState([])
  const [currentPage , SetCurrentPage] = useState(1)
  const [paginatedTodos,SetaginatedTodos] = useState([])

  let PagesSize = 10 ;
  let NumberOfEveryPage ;

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data =>{
      setTodo(data)
      let endIndex = PagesSize * currentPage
      let startIndex = endIndex - PagesSize
      let show = data.slice(startIndex,endIndex)
      SetaginatedTodos(show)
  })

  }, [])

const PageCount = Math.ceil(Todo.length) / PagesSize
NumberOfEveryPage = Array.from(Array(PageCount).keys())

  useEffect(() => {
    let endIndex = PagesSize * currentPage;
    let startIndex = endIndex - PagesSize;
    let show = Todo.slice(startIndex, endIndex);
    SetaginatedTodos(show);
  }, [currentPage]);

  const handlePageChange = (page) => {
    SetCurrentPage(page);
  };



  return (
    <div>
      {
        !Todo ? "Loading" : (
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              paginatedTodos.map(todo => (
                <>
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.userId}</td>
                  <td>{todo.title}</td>
                  <td>
                    <p className={todo.completed ? "btn btn-success" : "btn btn-danger"} >
                      {todo.completed ? " Completed " : "Pending"}
                    </p>
                  </td>
                  {console.log(todo)}
                </tr>
                </>
              ))
            }
          </tbody>
        </table>
        )
      }

<>
<nav aria-label="...">
  <ul class="pagination pagination-sm justify-content-center">

      {
        NumberOfEveryPage.map((pageNumber)=>(
          <li class={ pageNumber + 1 == currentPage ? "page-item active" : "page-item"} key={pageNumber+1} 
          onClick={()=>handlePageChange(pageNumber+1)} >
            <a class="page-link" href="#">{pageNumber+1}</a>
            </li>
        ))
      }



    {/* <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li> */}
  </ul>
</nav>
</>
    </div>
  )
}
