import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const CategoryPage = () => {
    const [toggle,setToggle] = useState(false)
    const [categoryId,setCategoryId] = useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    const brand = []
    const category = []
    if(products){
        products.map(item => {
            if (brand.indexOf(item.brand) === -1) {
                brand.push(item.brand)
            }
            if (category.indexOf(item.category) === -1) {
                category.push(item.category)
            }
        } )
    }

    const handleSubmit = (e) => {
        
    }

    useEffect(()=> {
        dispatch(listProducts())
    },[dispatch])

    return (
        <>
            <Navbar/>
            {/* filter mobile view */}
            <div className="lg:hidden">
                <div className = "flex justify-around">
                    <h1 className = " font-semibold text-lg ">FILTERS</h1>
                    <div className={`hamburger ${toggle ?"is-active":""}`} id="hamburger-1" onClick = {()=> setToggle(!toggle)} >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                {toggle &&
                    <div className = "mx-6 my-4">
                        <h2 className = " font-semibold text-lg text-gray-500">Brands</h2>
                        <div className="flex flex-col">
                            <label className="inline-flex items-center mt-3">
                                <input type="checkbox"   className=" h-5 w-5 text-gray-600 "   id = "Novel"/>
                                <span className="ml-2 text-gray-700">Novel</span>
                            </label>
                        </div>
                    </div>
                }
            </div>
            {/* filter desktop view */}
            <div className="flex justify-center lg:justify-start">
                <aside className = "hidden lg:block border-x-4 sticky self-start  top-4 w-1/5">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-2 mx-12 my-6">
                            <h1 className = " font-semibold text-lg ">FILTERS</h1>
                            <h2 className = " font-semibold text-lg text-gray-500">Brands</h2>
                                {loading ?
                                    <p>Loading brands...</p> :
                                    error ? <p>{error}</p> :  
                                    <div className="flex flex-col">
                                        {brand.map(item => (
                                            <label className="cursor-pointer inline-flex items-center mt-3">
                                                <input type="checkbox"  className=" h-5 w-5 text-gray-600 " name='category' value={item}  id = {item} onClick={()=> setCategoryId(prevState=> [...prevState,item] )} />
                                            <span className="ml-2 text-gray-700">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                } 
                        </div>
                        <div className="space-y-2 mx-12 my-6">
                            <h2 className = " font-semibold text-lg text-gray-500">Brands</h2>
                                {loading ?
                                    <p>Loading category...</p> :
                                    error ? <p>{error}</p> :  
                                    <div className="flex flex-col">
                                        {category.map(item => (
                                            <label className=" cursor-pointer inline-flex items-center mt-3">
                                                <input type="checkbox"  className=" h-5 w-5 text-gray-600 "/>
                                            <span className="ml-2 text-gray-700" >{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                } 
                        </div>
                        <div className="space-y-2 mx-12 my-6">
                            <button type="submit" class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Apply Filters</button>
                        </div>
                    </form>
                </aside>

                {loading ?
                    <Loader/> :
                    error ? <p>{error}</p> :  
                    <div className="bg-white">
                    <div className="max-w-2xl mx-auto pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map(product => {
                            return(
                                <Product product={product} key={product._id}/>
                            )
                        })}
                        </div>
                    </div>
                    </div>
                } 
            </div> 
            <Footer/>   
        </>
    )
}

export default CategoryPage
