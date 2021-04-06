class KioskCal {
    constructor(fruits,quantity){

        this.fruit="Mango";
        this.quantity=4;

        this.fruit1="Orange";
        this.quantity1=2;


        // this.fruit2="Avocado";
        // this.quantity2=2;

    }
    getTotalCost(){
        return `${this.quantity} ${this.fruit} for KES ${this.quantity4*15}`;
    }
    getTotalCost(){
        return `${this.quantity1} ${this.fruit1} for KES ${this.quantity1*30}`;
    }
    // getTotalCost(){
    //     return `${this.quantity2} ${this.fruit2} for KES ${this.quantity2*40}`;
    // }
    
}

var fruit1=new KioskCal("orange",2);
console.log(fruit1.getTotalCost())





