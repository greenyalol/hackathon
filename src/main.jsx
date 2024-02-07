import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import FlippableCard from './components/FlippableCard/FlippableCard.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    {/* <Route index element={<Homepage />} /> */}
                    <Route path="/game" element={<FlippableCard />} />
                    <Route path='*' element={<><h1>404</h1></>} />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </ChakraProvider >
)
