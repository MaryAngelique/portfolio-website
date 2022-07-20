import React, { useState, useEffect } from "react"

const Home = () => {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "FullStack Web Development", "FrontEnd Development", "BackEnd Developer"
    )
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 40)
        }
    }, [index])


    return(
        <div>
            <div className="home-title">
                <h2>Hi, I'm <span className="home-name">Angelique</span></h2>
                <h2>{text}</h2>
            </div>
        </div>
    );
}

export default Home;