import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


import { store } from "./redux/store/store";
import { Provider } from 'react-redux';
import { Catagory_Provider } from "./context-api/catagory-context";



import Navbar from "../src/combonants/home-page/Nav-Bar/Navbar";
import Main_catagory_page from "../src/combonants/catagory-page/main-catagory-page"
import Crearte_Post from "./combonants/cerate_post/Crearte_Post";
import Creadit_Card from "./combonants/creadit-card/Creadit_Card";

const queryClient = new QueryClient();

const App=()=>{
    return(
        <Catagory_Provider>
                <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                                <BrowserRouter >
                                        <Routes>
                                                <Route path="/" element={<><Navbar/> <Main_catagory_page/> </>}/>
                                                <Route path="/createPost" element={<><Navbar/> <Crearte_Post/></>}/>
                                                <Route path="/creadit" element={<><Navbar/> <Creadit_Card/></>}/>

                                        </Routes>
                                </BrowserRouter>
                </Provider>
                </QueryClientProvider>
        </Catagory_Provider>
    )
}



export default App