import logo from "./logo.svg";
import "./App.css";
import Realm from "realm";

const app = new Realm.App({ id: "revolution_educational-ttenr" }); // create a new instance of the Realm.App
async function run() {
     // login with an anonymous credential
     await app.logIn(Realm.Credentials.anonymous());

     const DogSchema = {
          name: "Dog",
          properties: {
               _id: "int",
               name: "string",
               age: "int",
          },
          primaryKey: "_id",
     };

     const realm = await Realm.open({
          schema: [DogSchema],
          sync: {
               user: app.currentUser,
               partitionValue: "myPartition",
          },
     });

     // The myPartition realm is now synced to the device. You can
     // access it through the `realm` object returned by `Realm.open()`

     // write to the realm
}
run()
     .then((res) => {
          console.log("SUCCESS", res);
     })
     .catch((err) => {
          console.error("Failed to open realm:", err);
     });

function App() {
     return (
          <div className="App">
               <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                         Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                         Learn React
                    </a>
               </header>
          </div>
     );
}

export default App;
