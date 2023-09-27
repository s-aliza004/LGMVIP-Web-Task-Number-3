import React, { useState } from 'react';
import '../Components/Calcula.css'

const Cal = () => {
    const [output, setoutput] = useState("");

    const handleClick = (e) => {
        setoutput(output.concat(e.target.name));
    };
    const clearinput = () => {
        setoutput("");
    };
    const reverse = () => {
        setoutput(output.slice(0, output.length - 1));


    };
    const result = () => {
        try {
            setoutput(eval(output).toString());
        }
        catch (err) {
            setoutput("ERROR");

        }
    };
    return (
        <>
            <section>
                {/* //main body// start */}
                <div className='main-container'>
                    {/* Sub container calculator start*/}
                    <div className='sub-cont'>
                        {/* Input field start */}
                        <form>
                            <input className='inputfield' type="text" value={output}></input>
                        </form>
                        {/* Input field end */}

                        {/* ALL BUTTONS WRAPPER START */}
                        <div className='allbtn'>
                            <button id='backspace' onClick={reverse}>C</button>
                            <button id="clear" onClick={clearinput}>Clear</button>
                            <button className='clr' name="/" onClick={handleClick}>&divide;</button>
                            <button name="7" onClick={handleClick}>7</button>
                            <button name="8" onClick={handleClick}>8</button>
                            <button name="9" onClick={handleClick}>9</button>
                            <button className='clr'name="*" onClick={handleClick}>&times;</button>
                            <button name="4" onClick={handleClick}>4</button>
                            <button name="5" onClick={handleClick}>5</button>
                            <button name="6" onClick={handleClick}>6</button>
                            <button className='clr' name="-" onClick={handleClick}>&ndash;</button>
                            <button name="1" onClick={handleClick}>1</button>
                            <button name="2" onClick={handleClick}>2</button>
                            <button name="3" onClick={handleClick}>3</button>
                            <button className='clr' name="+" onClick={handleClick}>+</button>
                            <button name="0" onClick={handleClick}>0</button>
                            <button name="." onClick={handleClick}>.</button>
                            <button id='result' onClick={result}>=</button>

                        </div>
                        {/* BUTTON WRAPPER END */}

                    </div>
                    {/* Sub container calculator END*/}


                </div>
                {/* //main body// end */}

            </section>
        </>
    )
}

export default Cal;
