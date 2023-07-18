import React ,{useState,useEffect} from 'react'
import { Link, useNavigate, createSearchParams  } from 'react-router-dom';

function Card() {
    const [user,setUser] = useState([]);

    const navigate=useNavigate();
    const navigateHandler =(phone, id )=>{
       
     
    navigate({pathname:"/itemdetails",
    search : `?${createSearchParams({
      phone :"phone",
      id: "id",
    })}`,
    });
  }
    const fetchData =()=>{
        fetch("https://randomuser.me/api/?nat=us&results=18&page=1")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let res = data.results
            console.log(res);
            setUser(res)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix"> 
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      data.location.state}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                  <a href='#' className='btn btn-primary' onClick={()=>data.id}>More Info</a> &nbsp;
                  <button className='btn btn-secondary'><Link to={`/itemdetails/${data.phone}`}>Add friend</Link>  </button>&nbsp;
                  <button className='btn btn-secondary' onClick={navigateHandler()}>view </button>  
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}

export default Card