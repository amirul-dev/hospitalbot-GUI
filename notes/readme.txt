install npm, nodejs
npm i create-react-app (install this package)
install extension ES7+ React/Redux/React-Native snippets, for snippet shortcut

create app folder
cd
run "npx create-react-app" - creates basic react template

create server folder outside
setup python env by "python -m venv venv"
get into env by ".\venv\Scripts\activate"
install flask by "pip install FLask"
run python file
"localhost:5000" for seeing the website

setup basic python file by template

in package.json, add
"proxy": "http/localhost:5000"

clear app.js
rfce to get std snippet
change to "import React, {useState, useEffect} from 'react' "


for python data to react
add this under function before return
const [data, setData] = useState([{}])
- data is variable
- setData is fn to manipulate state of data variable (fn can be given any name)
setData(prevState => prevState +1) , can be done for increment
- useState makes the fuction stateful, that is can change elements dynamically
- state is used to change data dynamically when changed from backend
- new data can be passed to setData fn to change it

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])


----------------------
if no data, display loading, otherwise data
{(typeof data.members === 'undefined') ? (<p>Loading...</p>) : (data.members[0])}

iteration
 {(typeof data.members === 'undefined')?(
        <p>Loading...</p>
      ): (
        data.members.map((members,i)=>(
          <p key={i}>{members}</p>
        )
        )
      )}

