class Student {
    int id;
    String studyname;

    class BSCS {
        int id;
        String session;

        BSCS() {
        }

        BSCS(int i) {
            id = i;
        }

        BSCS(String s) {
            session = s;
        }

        BSCS(int i, String s) {
            id = i;
            session = s;
        }

        BSCS(String s, int i) {
            session = s;
            id = i;
        }
    }

    Student() {
    }

    Student(int id, String studyname) {
        this.id = id;
        this.studyname = studyname;
    }
}
