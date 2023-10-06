    //Palindrome using Arrow function
let num=prompt("Enter the value")
let palindrome=(num)=>{
    let temp=num;
    let a=0,b;
    while(num>0){
        b=num%10;
        num=parseInt(num/10);
        a=a*10+b;
    }
    
    if(temp==a){
        console.log("The number is Palindrome");
        document.write(`The given number ${temp} is Palindrome`)
    }
    else{
        document.write(`The given number ${temp} not Palindrome`);
    }
    
}
// palindrome(121);
// palindrome(234);
// palindrome(1221)
palindrome(num)