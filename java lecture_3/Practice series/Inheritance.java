class Shape{
    public void area(){
        System.out.println("displays area");
    }
}

// single Level Inheritance

class Triangle extends Shape{
    public void area(int l, int h){
        System.out.println(1/2*l*h);
    }
}


// Heirarchical Inheritance

class Circle extends Shape{
    public void area(int r){
        System.out.println(3.14*r*r);
    }
}


// Hybrid Inheritance
class Square extends Shape{
    public void area(int s){
        System.out.println(s*s);
    }
}

     // ( Multiple level Inheritance

class EquilateralTriangle extends Triangle{
    public void area(int l, int h){
        System.out.println(1/2*l*h);  
    }
}
     // Multiple Inheritance )




public class Inheritance {
    public static void main(String[] args) {

    }
}
