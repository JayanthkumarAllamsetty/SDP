import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Translator=({ text, language }) => {
    const [convertedText, setConvertedText] = useState('');
  
    useEffect(() => {
      const response = axios
        .post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: ` Before the mid-1960s, India relied on imports and food aid to meet domestic requirements. However, two years of severe drought in 1965 and 1966 convinced India to reform its agricultural policy and that it could not rely on foreign aid and imports for food security. India adopted significant policy reforms focused on the goal of food grain self-sufficiency. This ushered in India's Green Revolution. It began with the decision to adopt superior yielding, disease resistant wheat varieties in combination with better farming knowledge to improve productivity. The state of Punjab led India's green revolution and earned the distinction of being the country's breadbasket.

              The initial increase in production was centred on the irrigated areas of the states of Punjab, Haryana and western Uttar Pradesh. With the farmers and the government officials focusing on farm productivity and knowledge transfer, India's total food grain production soared. A hectare of Indian wheat farm that produced an average of 0.8 tonnes in 1948, produced 4.7 tonnes of wheat in 1975 from the same land. Such rapid growth in farm productivity enabled India to become self-sufficient by the 1970s. It also empowered the smallholder farmers to seek further means to increase food staples produced per hectare. By 2000, Indian farms were adopting wheat varieties capable of yielding 6 tonnes of wheat per hectare.`,
              target:' Telugu',
              key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
          }
        )
        .then((response) => {
          setConvertedText(response.data.data.translations[0].translatedText);
        })
        .catch((err) => {
          console.log('rest api error', err);
        });
    }, [text, language]);
  
    return <div>{convertedText}</div>;
  };
export default Translator;
  
