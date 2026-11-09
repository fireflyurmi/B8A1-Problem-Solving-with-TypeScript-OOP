function multiplyValue(value : number, multiplier ?: number) : number {
    return value * (multiplier === undefined ? 2 : multiplier);
}




function processInput(value : string | number | boolean) : string | number {
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }else if(typeof value === "number"){
        return value * 10 ;
    }else{
        return value ? "Active" : "Inactive" ;
    }
}




