    async function foo(){

        try{
    let bookReport = await fetch (`https://www.anapioficeandfire.com/api/books`);

    let res = await bookReport.json();
   

    console.log(res);

    let apionfire = await fetch (`https://www.anapioficeandfire.com/api/characters`);

    let res1 = await apionfire.json();
   

    console.log(res1);




    
    let gate = res.map((elements=>elements.name));
      console.log(gate);

    let gate1 = res.map((elements=>elements.isbn));
      console.log(gate1);

    let gate2 = res.map((elements=>elements.numberOfPages));
      console.log(gate2);

    let gate3 = res.map((elements=>elements.authors));
      console.log(gate3);

    let gate4 = res.map((elements=>elements.publisher));
      console.log(gate4);

    let gate5 = res.map((elements=>elements.released));
      console.log(gate5);

    let gate6 = res1.map((elements=>elements.aliases));
    console.log(gate6);

    let gate7 = res1.map((elements=>elements.father));
    console.log(gate7);

    let gate8 = res1.map((elements=>elements.mother));
    console.log(gate8);

    let gate9 = res1.map((elements=>elements.spouse));
    console.log(gate9);

    let gate10 = res1.map((elements=>elements.playedBy));
    console.log(gate10);



    var division = document.createElement('div')
    division.setAttribute("class","datafetch")
    division.innerHTML= `<h1>Data from Ice and Fire Api</h1> <h4> ISDB Number</h4>ISDB:${gate1} <br><br>
    <h4> Name of Books</h4>Name:${gate}<br><br>
    <h4> Number of pages</h4>Number of pages:${gate2}<br><br>
    <h4> Authors</h4>Authors:${gate3}<br><br>
    <h4>Publishers Name</h4>Publishers:${gate4}<br><br>
    <h4> Release Date</h4>Release Date:${gate5}`                            
    
    document.body.append(division);


    var division1 = document.createElement('div')
    division1.setAttribute("class","datadraw")
    division1.innerHTML=`<h4>Characters</h4>aliases:${gate6}<br><br>
    Father:${gate7}<br><br>
    Mother:${gate8}<br><br>
    Spouse:${gate9}<br><br>
    PlayedBy:${gate10}`


    document.body.append(division1);
        }
        catch(err){
          console.log("some error occured"+ err)
        }

}
foo();
