import Header from  "./components/header/Header.jsx";
import Wrapper from  "./components/wrapper/Wrapper.jsx";
import { useState } from "react"

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return(
      <div>
          Welcome to React — en route to JavaScript XML (JSX)
              {isLoggedIn ? <Header /> : null};
            <Wrapper checkLoginStatus={isLoggedIn}  />
      </div>
    );
}
export default App;