import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { getAllMenuApi, getMenuDetailsApi } from "../services/allAPI";

function Menus() {
    const [menus, setMenus] = useState([]);
    const [menuDetails, setMenuDetails] = useState(null);


    //function for get all menu
    const getAllMenu = async () => {
        try {
            const result = await getAllMenuApi()

            if (result.status === 200) {
                setMenus(result.data)
            } else {
                alert(result.error || 'Failed to fetch menus');
            }
        } catch (error) {
            console.error('Error fetching menus:', error);
            alert('Failed to fetch menus');
        }
    };

    //function for get food based on menu id
    const getMenuFoods = async (menuId) => {
        try {
            const result = await getMenuDetailsApi(menuId);

            if (result.status === 200) {
                console.log(result.data); 
                setMenuDetails(result.data.items || []);
            } else {
                alert(result.error || 'Failed to fetch menu details');
            }
        } catch (error) {
            console.error('Error fetching menu details:', error);
            alert('no items avilable');
        }
    };


    useEffect(() => {
        getAllMenu();
    }, [menus]);

    return (
        <div className="bg-black text-white min-h-screen">
            <header>
                <Header />
            </header>
            <div className="bg-cover bg-center relative" style={{ backgroundImage: "url('https://www.taalrestaurant.co.uk/taal/wp-content/uploads/2019/04/taal_vegan_food.jpg')" }}>
                <div className="bg-black bg-opacity-50 p-10 text-center">
                    <h1 className="text-5xl font-bold text-white">MENU</h1>
                    <p className="mt-4 lg:px-72 text-gray-300">
                        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the
                        "Order Online" button located below the menu.
                    </p>
                </div>
            </div>

            {/* Section-1 */}
            <div
                className="flex justify-center"
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/thumbnails/020/639/119/small_2x/black-background-with-mandala-pattern-design-illustration-eps10-vector.jpg')",
                }}
            >
                <div className="my-8 flex gap-4">
                    {menus.map((menu) => (
                        <button onClick={() => getMenuFoods(menu.menu_id)} className="px-6 py-2 bg-gray-900 text-white hover:bg-blue-600 hover:border-blue-800 border-1 border-blue-600 transition">
                            {menu.menu_name}
                        </button>
                    ))}

                    <Link to='/additems' className="flex items-center">
                        <button className="p-2 bg-gray-900 text-white hover:bg-blue-600 hover:border-blue-800 border-1 border-blue-600 rounded-full transition">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </Link>
                </div>

            </div>

            {/* section-2 */}
            <div
                className="relative text-white py-16 px-6 md:px-20 lg:px-40"
            // style={{
            //     backgroundImage: "url('https://img.freepik.com/premium-vector/food-drink-pattern-background_554445-961.jpg')",
            //     backgroundRepeat: "no-repeat",
            //     backgroundSize: "cover",
            // }}
            >
                <div className="border border-gray-600 p-8 relative">
                    <h2 className="text-4xl py-4 font-bold text-center text-white uppercase tracking-wide mb-8">
                        Brunch Cocktails
                    </h2>
                    <div className="md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {
                                Array.isArray(menuDetails) && menuDetails.length > 0 ? (
                                    menuDetails.map((food) => (
                                        <div key={food.id} className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-bold uppercase">{food.item_name}</h3>
                                                <p className="text-gray-400 text-sm mt-2">
                                                    {food.item_description}
                                                </p>
                                            </div>
                                            <span className="text-lg font-bold text-white">{food.amount}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p>No items available</p>
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Menus;
