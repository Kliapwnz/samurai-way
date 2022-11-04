import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";


function App() {
    console.log("App rendering")
    return (
        <div>
            <input/>
            <input type={"date"}/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            <div>Article 1</div>
            <Rating value={3}/>
            <Accordion title={"menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={true}/>
            <div>Article 2</div>
            <Rating value={4}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
