import React from "react";
import {
  ComposableMap,

  ZoomableGroup
} from "react-simple-maps";

import  Chart from "./Charts/APChart";
import  BiharChart from "./Charts/BiharChart";
import GujaratChart from "./Charts/GujaratChart";
import TamilNadu from "./Charts/TamilNaduCharts";
import Uttarpradesh from "./Charts/UttarpradeshCharts"
import Chhattisgarh from "./Charts/ChhartisgarhChart"
import Uttarakhand from "./Charts/UttrakhandChart"
import Kerala from "./Charts/KeralaChart"
import Telangana from "./Charts/TelanganaChart"
import Westbengal from "./Charts/WestBengalChart"
import Assam from "./Charts/AssamChart";

import andamannicobar from './topojsons/states/andamannicobar.json';
import andhrapradesh from './topojsons/states/andhrapradesh.json';
import arunachalpradesh from './topojsons/states/arunachalpradesh.json';
import assam from './topojsons/states/assam.json';
import bihar from './topojsons/states/bihar.json';
import chhattisgarh from './topojsons/states/chhattisgarh.json';
import delhi from './topojsons/states/delhi.json';
import goa from './topojsons/states/goa.json';
import gujarat from './topojsons/states/gujarat.json';
import haryana from './topojsons/states/haryana.json';
import himachalpradesh from './topojsons/states/himachalpradesh.json';
import jammukashmir from './topojsons/states/jammukashmir.json';
import jharkhand from './topojsons/states/jharkhand.json';
import karnataka from './topojsons/states/karnataka.json';
import kerala from './topojsons/states/kerala.json';
import lakshadweep from './topojsons/states/lakshadweep.json';
import madhyapradesh from './topojsons/states/madhyapradesh.json';
import maharashtra from './topojsons/states/maharashtra.json';
import manipur from './topojsons/states/manipur.json';
import meghalaya from './topojsons/states/meghalaya.json';
import mizoram from './topojsons/states/mizoram.json';
import nagaland from './topojsons/states/nagaland.json';
import odisha from './topojsons/states/odisha.json';
import punjab from './topojsons/states/punjab.json';
import rajasthan from './topojsons/states/rajasthan.json';
import sikkim from './topojsons/states/sikkim.json';
import tamilnadu from './topojsons/states/tamilnadu.json';
import telangana from './topojsons/states/telangana.json';
import tripura from './topojsons/states/tripura.json';
import uttarakhand from './topojsons/states/uttarakhand.json';
import uttarpradesh from './topojsons/states/uttarpradesh.json';
import westbengal from './topojsons/states/westbengal.json';


const StateChart = ({ selectedState }) => {
    let geoURL;
    let zoomMap = 1;
    let centerMap = [80, 22];
    let scaleMap = 400;
    if (selectedState === 'Andaman & Nicobar Island') {
        geoURL = andamannicobar;
        scaleMap = 1000;
        centerMap = [93,10];
         return <Chart/>
    } else if (selectedState === 'Andhra Pradesh') {
        geoURL = andhrapradesh;
        scaleMap = 800;
        centerMap = [80,17];
        return <Chart/>
        
    } else if (selectedState === 'Arunachal Pradesh') {
        geoURL = arunachalpradesh;
        scaleMap = 1200;
        centerMap = [94.5,28];
        return <Assam/>
    } else if (selectedState === 'Assam') {
        geoURL = assam;
        scaleMap = 1350;
        centerMap = [92.9,26];
        return <Assam/>;
    } else if (selectedState === 'Bihar') {
        geoURL = bihar;
        scaleMap = 1300;
        centerMap = [85.5,26];
        return <BiharChart/> ;
    } else if (selectedState === 'Chhattisgarh') {
        geoURL = chhattisgarh;
        scaleMap = 1100;
        centerMap = [82,21];
        return < Chhattisgarh/>;
    } else if (selectedState === 'NCT of Delhi') {
        geoURL = delhi;
        scaleMap = 11000;
        centerMap = [77.05,28.6];
        return < Chhattisgarh/>;
    } else if (selectedState === 'Goa') {
        geoURL = goa;
        scaleMap = 6000;
        centerMap = [74,15.25];
        return  <GujaratChart/> ;
    } else if (selectedState === 'Gujarat') {
        geoURL = gujarat;
        scaleMap = 1000;
        centerMap = [71.5,22];
        return <GujaratChart/>;
    } else if (selectedState === 'Haryana') {
        geoURL = haryana;
        scaleMap = 1700;
        centerMap = [76,29];
        return <GujaratChart/>;
    } else if (selectedState === 'Himachal Pradesh') {
        geoURL = himachalpradesh;
        scaleMap = 2000;
        centerMap = [77.4,31.8];
       return  <Kerala/>;
    } else if (selectedState === 'Jammu & Kashmir') {
        geoURL = jammukashmir;
        scaleMap = 1000;
        centerMap = [76.3,35];
        return <Kerala/>;
    } else if (selectedState === 'Jharkhand') {
        geoURL = jharkhand;
        scaleMap = 1700;
        centerMap = [85.7,23.6];
        return <Kerala/>;
    } else if (selectedState === 'Karnataka') {
        geoURL = karnataka;
        scaleMap = 1100;
        centerMap = [76.5,15];
         return <Kerala/>;
    } else if (selectedState === 'Kerala') {
        geoURL = kerala;
        scaleMap = 1800;
        centerMap = [76,10.5];
        return <Kerala/>;
    } else if (selectedState === 'Lakshadweep') {
        geoURL = lakshadweep;
        scaleMap = 2300;
        centerMap = [73,11];
         return <Kerala/>;
    } else if (selectedState === 'Madhya Pradesh') {
        geoURL = madhyapradesh;
        scaleMap = 900;
        centerMap = [78.5,24];
        return <Kerala/>;
    } else if (selectedState === 'Maharashtra') {
        geoURL = maharashtra;
        scaleMap = 1000;
        centerMap = [76.8,19.3];
        return <Kerala/>;
    } else if (selectedState === 'Manipur') {
        geoURL = manipur;
        scaleMap = 3400;
        centerMap = [93.8,24.7];
        return <Kerala/>;
    } else if (selectedState === 'Meghalaya') {
        geoURL = meghalaya;
        scaleMap = 2500;
        centerMap = [91.3,25.4];
         return <Kerala/>;
    } else if (selectedState === 'Mizoram') {
        geoURL = mizoram;
        scaleMap = 2900;
        centerMap = [92.8,23.25];
         return <Kerala/>;
    } else if (selectedState === 'Nagaland') {
        geoURL = nagaland;
        scaleMap = 4000;
        centerMap = [94.3,26.1];
         return <Kerala/>;
    } else if (selectedState === 'Odisha') {
        geoURL = odisha;
        scaleMap = 1300;
        centerMap = [84.4,20.25];
         return <Kerala/>;
    } else if (selectedState === 'Punjab') {
        geoURL = punjab;
        scaleMap = 2300;
        centerMap = [75.35,31.1];
         return <Kerala/>;
    } else if (selectedState === 'Rajasthan') {
        geoURL = rajasthan;
        scaleMap = 900;
        centerMap = [74,26.3];
         return <Kerala/>;
    } else if (selectedState === 'Sikkim') {
        geoURL = sikkim;
        scaleMap = 6000;
        centerMap = [88.45,27.6];
        return <Kerala/>;
    } else if (selectedState === 'Tamil Nadu') {
        geoURL = tamilnadu;
        scaleMap = 1300;
        centerMap = [78.25,10.8];
        return <TamilNadu/>
    } else if (selectedState === 'Telangana') {
        geoURL = telangana;
        scaleMap = 1800;
        centerMap = [79.5,17.9];
        return <Telangana/>;
    } else if (selectedState === 'Tripura') {
        geoURL = tripura;
        scaleMap = 4500;
        centerMap = [91.75,23.75];
        return <Kerala/>;
    } else if (selectedState === 'Uttarakhand') {
        geoURL = uttarakhand;
        scaleMap = 2000;
        centerMap = [79.3,30];
        return <Uttarakhand/>;
    } else if (selectedState === 'Uttar Pradesh') {
        geoURL = uttarpradesh;
        scaleMap = 1000;
        centerMap = [80.8,27];
        return <Uttarpradesh/>;
    } else if (selectedState === 'West Bengal') {
        geoURL = westbengal;
        scaleMap = 1200;
        centerMap = [87.7,24.2];
        return <Westbengal/>;
    }

    return (
      <>
        <ComposableMap  data-tip="" projection="geoMercator" width={150} height={150} projectionConfig={{ scale: scaleMap }}>
          <ZoomableGroup zoom={zoomMap} center={centerMap}>
        
            {/* <Geographies geography={geoURL}>
              {({ geographies }) =>
                // geographies.map(geo => (
                //   <Geography  
                //     key={geo.rsmKey}
                //     geography={geo}
                //     onMouseEnter={() => {
                //       const { district } = geo.properties;
                //       setTooltipContent(`${district}`);
                //     }}
                //     onMouseLeave={() => {
                //       setTooltipContent("");
                //     }}
                //     // onClick = {() => {
                //     //   const { district } = geo.properties;
                //     //   setDistrictName(`${district}`);
                //     // }}
                //     style={{
                //       default: {
                //         fill: "#D6D6DA",
                //         outline: "none"
                //       },
                //       hover: {
                //         fill: "forestgreen",
                //         outline: "none"
                //       },
                //       pressed: {
                //         fill: "#2E8B57",
                //         outline: "none"
                //       }
                //     }}
                //   />
                // ))
              }
            </Geographies> */}
          </ZoomableGroup>
        </ComposableMap>
      </>
    );
};

export default StateChart;