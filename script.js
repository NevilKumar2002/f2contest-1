let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper(arr) {
        for(let i=0 ;i<arr.length ;i++)
        {
            let developer=arr[i];
            if(developer.profession==="developer")
            {
                console.log(developer);
            }
        }


  }
  PrintDeveloper(arr);


  function addData(arr) {
    arr.push({id:4,name:"susan",age:"20",profession:"intern"});
    console.log(arr);
  }
  addData(arr);
  
  
 
  
  function removeAdmin(arr) {
    //Write your code here, just console.log
    for(let i=0 ;i<arr.length ;i++)
        {
           let NotAdmin=arr[i];
           if(NotAdmin.profession !=="admin")
           {
            console.log(NotAdmin);
           }
        }


    
  }
  removeAdmin(arr);
  
  
  function concatenateArray(arr) {
    //Write your code here, just console.log
    let arr1=[
        { id: 5, name: 'raj', age: 20, profession: 'engineer'},
        { id: 6, name: 'kumar', age: 21, profession: 'doctor'},
        { id: 7, name: 'chinna', age: 24, profession: 'lawyer'},
    ];
    let finalarr =arr.concat(arr1);
   console.log(finalarr);

  }
  concatenateArray(arr);
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }
  consoleArr();















  //     const developers = arr.filter(man => man.profession === "developer");
//     developers.forEach(developer => {
//       console.log(developer);
//   });
