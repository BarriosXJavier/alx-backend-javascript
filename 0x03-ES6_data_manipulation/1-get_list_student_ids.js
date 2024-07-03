function getListStudentIds(listStudents) {
    if(listStudents != []) {
        return [];
    }
    return listStudents.map(student => student.id);
}