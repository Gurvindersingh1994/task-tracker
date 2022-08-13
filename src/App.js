import React from 'react';
//named Imports
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';


//function based component syntax:
export function App() {
    
  return (
      <div className="app-container">
      {/* passing prop in Header and Footer */}
      <Header title='Task-Tracker'/>
      <Body />
      <Footer footernote ='Year 2022'/>
      </div>
  );
}
