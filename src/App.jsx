import "./App.css";
import CollegeDetails from "./components/CollegeDetails";
import StudentDetails from "./components/StudentDetails";

function App() {

  const collegeData = [
    {
      name: 'ahemednagar college',
      location: 'chandni chowk',
      website: 'www.aca.edu.in',
      student: [
        {
          name: 'shivam netke',
          email: 'shivamnetke@gmail.com'
        },

        {
          name: 'rushikesh kokate ',
          email: 'rushikeshkokate@gmail.com'
        }
      ]
    },

    {
      name: 'sarada college',
      location: 'patrakar chowk',
      website: 'www.saradacollege.edu.in',
      student: [
        {
          name: 'mohan padawale',
          email: 'mohanpadawale@gmail.com'
        },

        {
          name: 'harshal bhagat',
          email: 'harshalbhagat@gmail.com'
        }
      ]
    },

    {
      name: 'new arts college',
      location: 'delhi gate',
      website: 'www.nacsca.edu.in',
      student: [
        {
          name: 'sarthak shinde',
          email: 'sarthakshinde@gmail.com'
        },

        {
          name: 'vishal mane',
          email: 'vishalmane@gmail.com'
        }
      ]
    },

    {
      name: 'paulbuddhe college',
      location: 'shriram chowk',
      website: 'www.paulbuddhecollege.edu.in',
      student: [
        {
          name: 'aniket karande',
          email: 'aniketkarande@gmail.com'
        },

        {
          name: 'kiran karande',
          email: 'kirankarande@gmail.com'
        }
      ]
    }
  ]

  return (
    <>
      <h1>nested loop with components</h1>
      {
        collegeData.map((college, index) => (
          <div key={index}
            style={{ backgroundColor: '#999', borderRadius: '10px', padding: '5px', margin: '40px', borderBottom: '2px solid black' }}

          >
            <CollegeDetails college={college} />
            <StudentDetails student={college.student} />


          </div>
        ))
      }
    </>
  );
}

export default App;
