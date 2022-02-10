import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom'

function SearchProducts() {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [errMsg, setErrMsg] = useState('')
    const [loader, setLoader] = useState(true)

    const [search, setSearch] = useState('')
    const [searchEntry, setSearchEntry] = useState('')
    console.log(122211,searchEntry);

    const [selectedOption, setSelectedOption] = useState(0)
    const [clearable, setClearable] = useState(true)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(response => {
                console.log(12121,response);
                setLoader(false)
                setProducts(
                    response.data
                )

            }).catch(error => {
                setLoader(false)
                setErrMsg(
                    error.message
                )

            })
    }, [])

    const options = []

    products.map(product=> {
        options.push({value: `${product.id}`, label: `${product.title}`})
    })

    // const len=search.length

    // const searchitem=products.filter(product=>
    //     // product.title.slice(0,len)===search
    //     product.title.includes(search)
    //     )
    // console.log(1222115555,searchitem);

    // const searchsuccess=products.filter(product=>product.id===parseInt(searchEntry))
    // console.log(1222116666,searchsuccess[0]);
    

    // (searchsuccess.length===1)?navigate(`/products/${searchsuccess[0].id}`):navigate(`/`)

  return (
    <div className="searchboxcontainer2">
        {/* <InputGroup>
    <FormControl placeholder='Search products & Brands ' aria-describedby="basic-addon2" value={search} onChange={e => setSearch(e.target.value) } ></FormControl>
    <Button variant="dark" onClick={()=> setSearchEntry(search) }>Search</Button>
</InputGroup> */}
    <InputGroup>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className='selectcls'
        clearable={true}
        placeholder='Search products & Brands '
      />
      {selectedOption.value!=null?(<Link to={`/products/${selectedOption.value}`} className='deco1'>
      <Button variant="dark" >
          Search
          </Button>
          </Link>):(<Button variant="dark" >
          Search
          </Button>)}
      </InputGroup>
      {/* serach */}
      
</div>
  )
}

export default SearchProducts