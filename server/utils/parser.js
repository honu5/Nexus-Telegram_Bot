class Parser{
    parse(string){
        const splitString=string.split(" ");
        if(splitString.length!==4){
            console.log("Please use the correct format");
            return null;
        }
        const amount=parseFloat(splitString[0]);
        if(isNaN(amount)){
            console.log("The amount should be in number!");
            return null;
        }
        const from=splitString[1].toUpperCase();
        const to=splitString[3].toUpperCase();

        return {amount,from,to};

    }
}
module.exports=new Parser();