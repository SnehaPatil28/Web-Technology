function Student(props){
    return(
        <div>
            <h2>Student Information</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}

export default Student;