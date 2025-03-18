//andiamo a creare un for per il ciclo di numeri tra 1 e 100
for(i=0; i<=100; i++){

    if( i % 3 == 0 && i % 5){
        
        console.log("buzzfizz")
    }

    else if(i % 3 == 0){
        
        console.log("Fizz")
    }

    else if(i % 5 == 0){
        console.log("Buzz")
    }

    else{
        console.log(i + 1)
    }

}
