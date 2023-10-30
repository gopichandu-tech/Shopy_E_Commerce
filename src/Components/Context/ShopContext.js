import React,{createContext, useState,useEffect} from 'react'
export const ShopContext = createContext();



const ShopContextProvider = (props) => {
    /* Fetching all products data  */
    const [data,setData] = useState([]);
    const [search,setSearch] = useState(data);
    useEffect(()=>{
        const fetchApi = async() =>{
            const url = `https://fakestoreapi.com/products`;
            const response = await fetch(url);
            const resJson = await response.json();
            setData(resJson)
            setSearch(resJson)
        }
        fetchApi();
    },[])

    /*Cart Items */
    const [cartItems,setCartItems] = useState({});//Using context we can acess any cart item using contex

    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = { ...prevCartItems };
          updatedCartItems[itemId] = (updatedCartItems[itemId] || 0) + 1;
          return updatedCartItems;
        });
      }

      const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => {
          const updatedCartItems = { ...prevCartItems };
          if (updatedCartItems[itemId] && updatedCartItems[itemId] > 0) {
            updatedCartItems[itemId]--;
            if (updatedCartItems[itemId] === 0) {
              delete updatedCartItems[itemId];
            }
          }
          return updatedCartItems;
        });
      }

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const itemInfo = search.find((product) => product.id === Number(itemId));
          if (itemInfo) {
            totalAmount += (((itemInfo.price * 50) / 100) * cartItems[itemId]);
          }
        }
      }
      
      return totalAmount;
    };

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    /*Sigup logic */
    const [username,setUserName] = useState('');
    const [validateusername, setValidateUserName] = useState(false);

    const [email,setEmail] = useState('');
    const [validateemail,setValiDateEmail] = useState(false);

    const [password,setPassword] = useState('');
    const [validatepassword,setValidatePassword] = useState(false);

    const [phonenumber,setPhoneNumber] = useState();
    const [validatephonenumber,setValidatePhoneNumber] = useState(false);

    const [pincode,setPincode] = useState();
    const [validatepincode,setValidatePincode] = useState(false);

    const [click,setClick] = useState(false);
    const [signup,setSignUp] = useState(false);

    const handleClick = () =>{
        setClick(!click);
      }

    const handleSignUp = () =>{
        setSignUp(true);
    }

    /*Checking For Email */
    const handleEmail = (event) =>{
        setEmail(email)
        let enterEmial = event.target.value;
        setEmail(enterEmial); 
        setValiDateEmail(validateEmail(enterEmial));
    }

    const validateEmail = (enteremail) =>{
        const emailPattern = /^[a-zA-Z0-9]{2,}[0-9]{0,}@gmail.com{1}$/;/*/^[^\s@]+@[^\s@]+\.[^\s@]+$/*/
        return emailPattern.test(enteremail);
    }

     /*Checking For UserName */
    const handleUserName = (event) =>{
        setUserName(username)
        let enterUserName = event.target.value;
        setUserName(enterUserName); 
        setValidateUserName(handlevalidateUserName(enterUserName));
    }

    const handlevalidateUserName = (enterusername) =>{
        const usernamePattern = /[a-zA-Z]{3,}/;
        return usernamePattern.test(enterusername);
    }

    /*Checking For Password */
    const handleEnterPassword = (event) =>{
        setPassword(password)
        const enterPassword = event.target.value;
        setPassword(enterPassword);
        setValidatePassword(handlevalidatePassword(enterPassword))
    }
      const handlevalidatePassword = (enterpassword) =>{
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        return passwordPattern.test(enterpassword);
    }
    
    /*Checking for phonenumber in india */
    const handlePhoneNumber = (event) =>{
        setPhoneNumber(phonenumber)
        const enterPhoneNumber = event.target.value;
        setPhoneNumber(phonenumber)
        setValidatePhoneNumber(handlevalidatePoneNumber(enterPhoneNumber))
    }
      const handlevalidatePoneNumber = (enterPhoneNumber) =>{
        const phonenumberPattern = /^(\+91-|91-|0)?[789]\d{9}$/;
        return phonenumberPattern.test(enterPhoneNumber);
    }

   

    /*Checking the pincode */
    const handlepincode = (event) =>{
        setPincode(pincode)
        const enterpincode = event.target.value;
        setPincode(pincode)
        setValidatePincode(handlevalidatePincode(enterpincode))
    }

    const handlevalidatePincode = (enterpincode) =>{
        const pincodePattern = /^\d{6}$/;
        return pincodePattern.test(enterpincode);
    }

    /* Sort By  FIlters code */
    const [selectedPrice, setSelectedPrice] = useState(0);

    const sortBy = (price) => {
        const updateItems = data.filter((item) => {
            if(price === 50){
                return item.price / 2 > price
            }else if (price === 20) {
                return item.price / 2 < price
            }  else{
                return item.price > 0 
            }
        });
        setSearch(updateItems);
    };

    const handlePriceChange = (event) => {
        const price = parseInt(event.target.value);
        setSelectedPrice(price);
        sortBy(price);
    };


    const contextValue = {
        data,search,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems,
        handleEmail,handleUserName,handleEnterPassword,handleClick,
        click,validateusername,validateemail,validatepassword,
        phonenumber,validatephonenumber,handlePhoneNumber,handlevalidatePoneNumber,
        pincode,validatepincode,handlepincode,handlevalidatePincode,
        signup,setSignUp,handleSignUp,
        sortBy,handlePriceChange, selectedPrice
    }
    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
      )
}

export default ShopContextProvider;