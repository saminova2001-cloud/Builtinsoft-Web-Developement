
class StudentP{
    String name;
    int age;

    public void PrintInfo(){
        System.out.println(this.name);
        System.out.println(this.age);
    }


// perametric constructor
    StudentP(StudentP s2){
        this.age = s2.age;
        this.name = s2.name;
    }

    StudentP(){

    }
}


class Pen{
    String color;
    String type;

    public void write(){
        System.out.println("it can write whatever you want");
    }

    public void printColor(){
        System.out.println(this.color);
    }
}


public class p1{
    public static void main(String args[]){
   
   //Student 

    StudentP s1= new StudentP();

// basic constructor
   s1.name = "Awais wah g wah";
   s1.age = 29;

    StudentP s2 = new StudentP(s1);

//    s1.PrintInfo();
      s2.PrintInfo();

  // Pen

        Pen pen1 = new Pen();
        pen1.color = "blue";
        pen1.type = "ballpoint";

        Pen pen2 = new Pen();
        pen2.color = "black";
        pen2.type = "gelpen";

        pen1.printColor();
        pen2.printColor();

        pen1.write();

    }
}