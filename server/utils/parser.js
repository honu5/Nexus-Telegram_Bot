class Parser{
    parse(message){
        const splitString=message.split(" ");
        if(splitString.length!==4){
            console.log("Please use the correct format");
            return null;
        }

        const amount=parseFloat(splitString[0]);

        if (splitString[2].toLowerCase() !== "to") {
         console.log("Message must contain 'to' between currencies");
         return null;
        }
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