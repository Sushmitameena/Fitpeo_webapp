import Body from "./components/Body.js";
import Header from "./components/Header.js";

export default function App() {
  const handleMenuOpen = (event) => {
  };
  return (
    <>
     <Header 
        handleMenuOpen={handleMenuOpen} 
        profilePhoto="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?t=st=1722522398~exp=1722525998~hmac=85cfbd0b353eda6faa43e826411d91f1a020418ed3dd8decb59ae566e5ca5d09&w=740" 
      />
     <br/>
     <br/>
     <br/>


    <Body/>
    </>
   
  )
}