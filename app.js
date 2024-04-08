import React from "react";
import ReactDOM from "react-dom/client";

/**App Planning
 * header
 *  -logo
 *  -Nav items
 * body
 *  -search feature
 *  -restaurant cards
 * Footer
 *  -copyRights
 *  -links
 */
const HeaderPart=()=>(
    <div className="Header-class">
        <div className="logo-class">
            <img className="logo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-food-restaurant-logo-editable-design-template-949091af7f6dc8b1fc80d8669faab4d6_screen.jpg?ts=1619030187"/>
        </div>
        <div className="Nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const Rescard=(props)=>{
    const {resData}=props
    return (
        <div className="res-card">
            <img className="res-image" src="https://tb-static.uber.com/prod/image-proc/processed_images/f57fb461cfafbbb63b57e8a50c81c5d0/c9252e6c6cd289c588c3381bc77b1dfc.jpeg" alt=""></img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisins.join(', ')}</h4>
            <h5>{resData.time} mins</h5>
        </div>
    )
}
const restList=[
    {
        'id':123,
        'name':'Andhra Spice',
        'cuisins':["Indian BreakFast","Desserts","Snacks"],
        'time':30
    },
    {   'id':124,
        'name':'Ps4',
        'cuisins':["Indian BreakFast","Milkshakes","FastFoods"],
        'time':35
    },
    {   'id':125,
        'name':'KFC',
        'cuisins':["Fried chicken","Wings","Drinks"],
        'time':40
    },
    {   'id':126,
        'name':'Dominos',
        'cuisins':["Veg Pizzas","Non-Veg Pizzas","Breads"],
        'time':35
    },
    {   'id':127,
        'name':'McDonalds',
        'cuisins':["Burgers","Fried chicken","Desserts"],
        'time':25
    },
    {   'id':128,
        'name':'Orion',
        'cuisins':["Tea","Coffees","FastFoods"],
        'time':30
    },
    {   'id':129,
        'name':'Biryani Wala',
        'cuisins':["Biryanis","FriedRices","Chapathis"],
        'time':30
    }
]

const Body=()=>{
    return (
        <div className="body">
            <div className="search">SearchBar</div>
            <div className="res-container">
                {
                    restList.map((resto)=><Rescard key={resto.id} resData={resto}/>)
                }

            </div>

        </div>
    )
}



const AppLayout=()=>{
    return (
    <div>
        <HeaderPart/>
        <Body/>
    </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)