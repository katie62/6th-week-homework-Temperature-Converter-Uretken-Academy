import React, {useState} from 'react';


function TempConvert() {
 
    const [temp, setTemp]= useState("");
    const [scale, setScale] = useState("celsius"); 
    const [toScale, setToScale] = useState("fahrenheit"); 
  
    const celsiusToFah =(inputCel) => { 
        return (inputCel * 9) / 5 + 32; 
    };
    
    const fahrenheitToCel = (inputFah) => { 
        return (inputFah - 32) * 5 / 9; 
    };
  
    const celsiusToKel = (inputCel) => { 
        return inputCel + 273.15; 
    };

    const kelvinToCel = (inputKel) => { 
        return inputKel - 273.15; 
    };
    
    const convertTemp = (val ,fromScale , toScale)=> {
    if(fromScale === toScale){
        return val;
    }

    else if(fromScale === "celcius" && toScale === "fahrenheit"){
        return celsiusToFah(val)
    }

    else if(fromScale === "fahrenheit" && toScale=== "celsius"){
        return fahrenheitToCel(val)
    }

    else if(fromScale === "celcius" && toScale === "kelvin"){
        return celsiusToKel(val)
    }

    else if(fromScale === "kelvin" && toScale === "celsius"){
        return kelvinToCel(val)
    }

    else if (fromScale === "kelvin" && toScale === "fahrenheit") { 
        const celsiusValue = kelvinToCel(val); 
        return celsiusToFah(celsiusValue); 
    }
    
    else if (fromScale === "fahrenheit" && toScale === "kelvin") {
        const celsiusValue = fahrenheitToCel(val); 
        return celsiusToKel(celsiusValue); 
    }    

    return val;


  };

  const tempChangeFunction = (event) => { 
    const input = event.target.value;
    setTemp(input);
}

    const scaleChangeFunction = (event) => { 
        const selectedScale = event.target.value; 
        setScale(selectedScale); }

    const toScaleChangeFunction = (event) => { 
            const selectedToScale = event.target.value; 
            setToScale(selectedToScale); }



  const result = convertTemp(Number(temp), scale, toScale);

  return(
    <div className="converter">
        <div className="input-group">
            <input type="text"
            className='formCont' 
            placeholder={`Enter ${scale}`}
            value={temp}
            onChange={tempChangeFunction}
            />

            <select className='form-select' 
            value={scale} onChange={scaleChangeFunction}>

                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>

            <span className="Arrow">⇅</span>
            
            <select 
                    className="form-select"
                    value={toScale} 
                    onChange={toScaleChangeFunction} 
                > 
                    <option value="celsius">Celsius</option> 
                    <option value="fahrenheit">Fahrenheit</option> 
                    <option value="kelvin">Kelvin</option> 
                </select> 
            </div>
        
            { ( 
                <p className="result-text"> 
                    {result !== null ? ( 
                        <> 
                            <i className="fa-thermometer-half" /> 
                            {temp}{" "} 
                            {scale === "celsius"
                                ? "Celsius"
                                : scale === "fahrenheit"
                                    ? "Fahrenheit"
                                    : "Kelvin"} 
                            = {result.toFixed(2)}{" "} 
                            {toScale === "celsius"
                                ? "Celsius"
                                : toScale === "fahrenheit"
                                    ? "Fahrenheit"
                                    : "Kelvin"} 
                            . 
                        </> 
                    ):( 
                        " Select different units to convert."
                    )} 
                </p> 
            )} 

        
    </div>
  );

}

export default TempConvert