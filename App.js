import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import "./index.css";
//import Props from "./Props";
import SData from "./SData";
function App() {

  // function nCard(val){
  //   return (
  // <Card
  //   imgsrc={val.imgsrc}
  //   title={val.title}
  //   links={val.links}
  // />
  // );
  // }
  return (

    <>

      <h1 className='heading_Style'>List of Top OTT Platform </h1>
      {/* ----------------- first method-------------------------- */}
      {/* <Card
        imgsrc={SData[0].imgsrc}
        title={SData[0].title}
        links={SData[0].links}
      />
       <Card
        imgsrc={SData[1].imgsrc}
        title={SData[1].title}
        links={SData[1].links}
      />
       <Card
        imgsrc={SData[2].imgsrc}
        title={SData[2].title}
        links={SData[2].links}
      />
      <Card
        imgsrc={SData[3].imgsrc}
        title={SData[3].title}
        links={SData[3].links}
      />
      <Card
        imgsrc={SData[4].imgsrc}
        title={SData[4].title}
        links={SData[4].links}
      />
      <Card
        imgsrc={SData[5].imgsrc}
        title={SData[5].title}
        links={SData[5].links}
      />
       <Card
        imgsrc={SData[6].imgsrc}
        title={SData[6].title}
        links={SData[6].links}
      />
      <Card
        imgsrc={SData[7].imgsrc}
        title={SData[7].title}
        links={SData[7].links}
      />
       <Card
         imgsrc={SData[8].imgsrc}
         title={SData[8].title}
         links={SData[8].links}
       />  */}




            {/* --------------second method--------------- */}

      {/* {SData.map(nCard)}; */}
        


        {/* ------------third method----------------------- */}
      {SData.map(function nCard(val) {
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            links={val.links}
          />
        );
      })}

    </>

  );
}

export default App;
