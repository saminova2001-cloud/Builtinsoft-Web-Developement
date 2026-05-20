class Student{
    String name;
    int age;

    public void PrintInfo(String Name){
        System.out.println(Name);
    }

    public void PrintInfo(int age){
        System.out.println(age);
    }

    public void PrintInfo(String name, int age){
        System.out.println(name+" "+age);
    }


}

public class PolymorOverloading {
    public static void main(String args[]){
        Student  s1 = new Student();
        s1.name = "shair ka bacha";
        s1.age = 10;

        s1.PrintInfo(s1.name);
        s1.PrintInfo(s1.age);
        s1.PrintInfo(s1.name, s1.age);
    }
}
