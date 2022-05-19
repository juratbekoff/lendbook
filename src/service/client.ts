import { Pool } from "pg"

//postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName

// string
let olimtoyURL = 'postgres://postgres:1234@127.0.0.1:5432/juratali'

let client = new Pool({
  connectionString: olimtoyURL
})

client.connect((err) => {
  console.log(err ? err : 'Database `juratali` is connected.');
})

export default client
