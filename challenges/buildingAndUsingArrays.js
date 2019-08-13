 const rainbow = [{
     color: "red",
     hex: "#FF0000",
     rgb: "255,0,0",
     numberOfFans: 594
 }, {
     color: "orange",
     hex: "#FFA500",
     rgb: "255,165,0",
     numberOfFans: 153
 }, {
     color: "yellow",
     hex: "#FFFF00",
     rgb: "255,255,0",
     numberOfFans: 241
 }, {
     color: "lime",
     hex: "#00FF00",
     rgb: "0,255,0",
     numberOfFans: 5
 }, {
     color: "green",
     hex: "#008000",
     rgb: "0,128,0",
     numberOfFans: 648
 }, {
     color: "blue",
     hex: "#0000FF",
     rgb: "0,0,255",
     numberOfFans: 768
 }, {
     color: "purple",
     hex: "#800080",
     rgb: "128,0,128",
     numberOfFans: 56847
 }, {
     color: "fuchsia/magenta",
     hex: "#FF00FF",
     rgb: "255,0,255",
     numberOfFans: 7
 }]
 console.log(rainbow[1])
 console.log(rainbow[7])
 console.log(rainbow[1].hex)
 console.log(rainbow[4].rgb)
 console.log(rainbow[6].color)
 // ALL JAVASCRIPT VALUES EXCEPT PRIMATIVES ("strings", numbers 1,2,3,etc, booleans true/false; unless defined with the 'new' keyword) ARE OBJECTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 // Function Declarations
 function sayHello() {
     return "Hello"
 }
 console.log(sayHello())
 // Function Declaration with console.log
 function saysHello() {
     console.log("hELLO")
 }
 saysHello()
 // Arrow syntax//////////////
 const origHi = () => {
     return "hI";
 }
 console.log(origHi());
 // Streamlined Arrow Syntax//
 const saysHi = () => "hi"
 console.log(saysHi())
 ////////////////////////////
 const differentHi = () => {
     console.log('Hi')
 }
 differentHi()
 //////////////////////////////
 const sayBye = () =>
     console.log('Bye')
 sayBye()
 // Quokka can't read streamlined arrow syntax if console.logging inside the function without {}
 const newHi = () => console.log('HI');
 newHi()
 /////////////////////////////////////////Using for loop///////////////////////////////////////////////
 const arrayName = []
 // Create new empty array
 const varArray = []
 // Create for loop
 for (varIndex = 0; varIndex < arrayName.length; varIndex++) {
     // Create empty object
     let varObject = {}
     // Assign the key a path to the new object in the new array 
     varObject.varKey = arrayName[varIndex].varKey
     //Move object into new array
     varArray.push(varObject)
 }
 //////////////Key===Property===Attribute/////Key:Value Pair//////Don't use Key by itself//////////////////////////////////////
 const hexArray = []
 for (i = 0; i < rainbow.length; i++) {
     let hexObject = {}
     hexObject.hexVar = rainbow[i].hex
     hexArray.push(hexObject)
 }
 console.log(hexArray)
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////
 const colorRGB = []
 for (Elan = 0; Elan < rainbow.length; Elan++) {
     let rGb = {}
     rGb.color = rainbow[Elan].color
     rGb.rgb = rainbow[Elan].rgb
     colorRGB.push(rGb)
 }
 console.log(colorRGB)
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
 const maxRgbValues = []
 for (Elan = 0; Elan < rainbow.length; Elan++) {
     if (rainbow[Elan].rgb.includes('255'))
         maxRgbValues.push(rainbow[Elan].rgb)
 }
 console.log(maxRgbValues)
 ////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Create new array//////////////////////////////////////////////////////////////////////////////////////////
 const originalArray = []
 const aRrayName = []
 // Itterate array with .forEach at the index
//  originalArray.forEach(index => {
//      console.log(index);
//      //push string to new array
//      aRrayName.push(`Property1 ${index.property1}, Property2 ${index.property2}`)
//  })
//  console.log(aRrayName);
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  const newArrayName = []
//  arrayName.forEach(index => {
//      newArrayName.push(`Some words ${index.property1} more words ${index.property3}`)
//  })
//  console.log(newArrayName)
 ////////////////////////////////////////////////////////////////////////////////////////////////////
 const origArray = []
 const newARRay = []
 //.forEach(whatever) === create empty object
 const value1 = {}
 const value3 = {}
//  origArray.forEach((newObject, indexOfObject) => {
//      //
//      newARRay.push(`Template literal ${newObject.property1} Template literal ${newObject.property2} index${indexOfObject}`)
//  })
 console.log(newARRay)
 const emptyArray = []
 emptyArray.push({
     property1: value1,
     property2: 0,
     property3: value3
 })

 console.log(emptyArray)
 //////////////////////////.map/////////////////////////////
 // 1)name return set object 2) call array pass .map 3) name working set 4) assign working set to return set and pass method to desired property 5) return return set 6) console.log return set
 const newReturnSetObject = rainbow.map(newWorkingSetObject => {
     const newReturnSetObject = newWorkingSetObject.color.toUpperCase();
     return newReturnSetObject;
 })
 console.log(newReturnSetObject);
 //////////////////.filter()//////////////////////////////
 // 1)name return set 2) call Array, pass .filter() 3)name working set 4) return working set with condtion for filter 5)console.log return set
 const highRGB = rainbow.filter(above200 => {
     return above200.rgb = 255
 })
 console.log(highRGB)
 ///////////////////.reduce/////////////////////////////////
 const accumulator = rainbow.numberOfFans
 const fansOfColors = rainbow.reduce((accumulator, currentValue) =>
     accumulator + currentValue,
     0
 );
//  console.log(currentValue)