const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({courseName}) => {
    return <h1>{courseName}</h1>;
  };

  const Part = ({name, exercises}) => {
    return <p>{name} {exercises}</p>;
  }

  const Content = ({parts}) => {
    return (
      <div>
        <Part name={parts[0].name} exercises={parts[0].exercises}/>
        <Part name={parts[1].name} exercises={parts[1].exercises}/>
        <Part name={parts[2].name} exercises={parts[2].exercises}/>
      </div>
    );
  }

  const Total = ({parts}) => {
    const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises;
    return <p>Number of exercises: {totalExercises}</p>;
  }


  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
};

export default App
