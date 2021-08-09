import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const doTranslate = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: text,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                }
            );
            setTranslated(data.data.translations[0].translatedText);
        }
        
        if (text) {
            doTranslate();
        }
        

    }, [language, text]);

    return <div><h1 className="ui header">{ translated }</h1></div>;
};

export default Convert;