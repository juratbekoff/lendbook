import express from 'express'
import cors from 'cors'

import lendsRoutes from "./routes/lends.routes"
import usersRoutes from "./routes/users.routes"

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/lends', lendsRoutes)
app.use('/users', usersRoutes)



app.listen(9090, () => {
    console.log('Server is running ...');
})

















// async function main() {
//   await productService.findByCategory(2)
// }

// main()
